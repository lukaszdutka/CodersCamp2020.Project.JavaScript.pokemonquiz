import {
    QUIZ_PAGE_STYLES,
    START_PAGE_STYLES,
    TOTAL_NUM_OF_QUESTIONS,
} from "./appSettings.js"

import {
    GameHandler
} from "../service/GameHandler.js"

import {
    QuestionGenerator
} from "../service/QuestionGenerator.js"

import {
    showAPopUpScreen
} from './showAPopUpScreen'

import {
    fillResultsModal
} from './fillResultsModal'
import { WHO_IS_THAT_POKEMON_HARD_MODE } from "../service/modes.js"

import {
    rankingService,
    checkLocalStorage
} from '../service/rankingService'

let CURRENT_MODE = null;
let GENERATOR = null;
let GAME_HANDLER = null;

// use to render the page for the first time, after the game start
export function renderQuizPage(mode, name, totalTime) {
    CURRENT_MODE = mode;
    GAME_HANDLER = new GameHandler(name, totalTime);
    GENERATOR = new QuestionGenerator(CURRENT_MODE)
    const appScreen = document.querySelector('#pokequiz-app');
    appScreen.classList.add(QUIZ_PAGE_STYLES.quizPageClass)
    appScreen.classList.remove(START_PAGE_STYLES.startPageClass)
    const quizTemplate = document.getElementById('quiz-template');
    appScreen.innerHTML = quizTemplate.innerHTML;

    setupPageTitle();
    const resultsTemplate = document.getElementById('results-modal-template');
    appScreen.innerHTML += resultsTemplate.innerHTML;

    setupPageTitle(CURRENT_MODE);
    //GENERATOR = new QuestionService.Generator()
    renderNextQuestion(GENERATOR);

    // add event listener to the results screen button 
    document.querySelector('#backToStartingPageButton').addEventListener('click', () => {
        location.reload();
    });

    setupTimer(totalTime);
}


// use to update quizPage and change only the question, new answers and question counter
// not changing the timer and bar
// next question is rendered if there is any question left to answer
// otherwise finishes the game and redirect user to the summary page
export async function renderNextQuestion(generator) {
    const genQuestion = await generator.getNextQuestion();

    if (genQuestion !== undefined) {
        const quizBody = document.querySelector("#quiz-body");
        // Update question
        const quizQuestionElem = quizBody.querySelector(".quiz-question");
        updateQuestion(quizQuestionElem, genQuestion);
        // Update answers list
        const quizUl = quizBody.querySelector(".quiz-answers-list");
        updateAnswersList(quizUl, genQuestion);
        // Update question counter
        const questionCounter = document.querySelector("#question-counter");
        updateQuestionCounter(questionCounter, generator.askedQuestionsCount);
        // listen for an answer selection
        const answersOptions = [...quizBody.querySelector(".quiz-answers-list").children]
        for (let option of answersOptions) {
            option.querySelector('div').addEventListener("mouseup", function selectEventFunc() {
                selectAnswer(genQuestion, option.querySelector("div"));
            })
        }
    } else { // no more questions left
        const gameResults = GAME_HANDLER.getResults(durationTime);
        rankingService(CURRENT_MODE, gameResults);
        fillResultsModal(gameResults, CURRENT_MODE);
        showAPopUpScreen(document.getElementById('resultsScreen'), 'flex');
        endTimer();
    }
}

// Changes the title corresponding to the chosen game mode
const setupPageTitle = () => {
    const modeHeader = document.querySelector(".mode-title div")
    modeHeader.innerText = CURRENT_MODE.title // Setup mode title
}

// Updates the question div with styling and content depending on a type of a question
const updateQuestion = (questionElement, questionSet) => {
    if (CURRENT_MODE.questionType === "image") {
        questionElement.classList.add(QUIZ_PAGE_STYLES.quizQuestionImageClass);
        const imgElem = createImgElement(questionSet.question); // add img from url
        questionElement.appendChild(imgElem);

    } else if (CURRENT_MODE.questionType === "text") {
        questionElement.classList.add(QUIZ_PAGE_STYLES.quizQuestionTextClass);
        questionElement.innerText = questionSet.question; // add question as an inner text
    }
}

// Creates img element with a selected image url
const createImgElement = (url) => {
    const img = document.createElement("img");
    img.setAttribute("src", url);
    if (CURRENT_MODE === WHO_IS_THAT_POKEMON_HARD_MODE) {
        img.style.filter = "brightness(0%)";
    } 
    return img;
}

// Updates styles for question list based on mode type
// creates question items sor provided question set
const updateAnswersList = (answersElement, questionSet) => {
    for (let answer of questionSet.answers) {
        const answerElement = createAnswerElement(answer);
        answersElement.appendChild(answerElement);
    }
}

// returns children elements from the template
// for template.content replacement, which is not fully supported yet
const getTemplateContent = (template) => {
    const dummyDiv = document.createElement("div"); // 
    dummyDiv.innerHTML = template.innerHTML;
    return dummyDiv.children
}

const createAnswerElement = (answer) => {
    const liTemplate = document.querySelector("#quiz-li");
    const li = getTemplateContent(liTemplate)[0];
    const liFirstElem = li.children[0]

    if (CURRENT_MODE.answerType === "image") {
        // first child of li receives an image
        liFirstElem.classList.add(QUIZ_PAGE_STYLES.quizAnswerImageClass)
        const imgElem = createImgElement(answer) // get img url
        liFirstElem.appendChild(imgElem)

    } else if (CURRENT_MODE.answerType === "text") {
        // first child of li receives text
        liFirstElem.classList.add(QUIZ_PAGE_STYLES.quizAnswerTextClass)
        liFirstElem.innerText = answer // add question as an inner text
    }
    return li
}

// Updates the question number ona quiz page
const updateQuestionCounter = (counterElem, questionNum) => {
    counterElem.innerText = String(questionNum).padStart(2, '0') + "/" + String(TOTAL_NUM_OF_QUESTIONS);
}

// fires up on mouse up event on answers list li, additionally accepts questionSet
// check which answer was selected
// eventHandler is element to which eventListener was attached to
function selectAnswer(questionSet, eventHandler) {
    const answer = getAnswerFromElement(eventHandler);
    if (answer) {
        questionSet.correctAnswer.value === answer ? correctAnswerSelected(eventHandler, answer, questionSet) : wrongAnswerSelected(eventHandler, answer, questionSet);
    } else {
        throw new Error('Answer was not found')
    }
}


// Read selected answer value from clicked list item
const getAnswerFromElement = (target) => {
    const targetClasses = [...target.classList];
    let answer;
    if (targetClasses.includes(QUIZ_PAGE_STYLES.uncheckedClass)) {
        if (targetClasses.includes(QUIZ_PAGE_STYLES.quizAnswerTextClass)) {
            answer = target.innerText
        } else if (targetClasses.includes(QUIZ_PAGE_STYLES.quizAnswerImageClass)) {
            answer = target.children[0].getAttribute("src")
        }
        return answer
    }
}

const correctAnswerSelected = (selectedElem, answer, questionSet) => {
    selectedElem.classList.remove(QUIZ_PAGE_STYLES.uncheckedClass)
    selectedElem.classList.add(QUIZ_PAGE_STYLES.correctAnswerClass)
    GAME_HANDLER.addAnswer(questionSet.correctAnswer.value, answer, true, questionSet.question);
    resetQuizAfterQuestion();
    renderNextQuestion(GENERATOR);
}

const wrongAnswerSelected = (selectedElem, answer, questionSet) => {
    // add wrong-answer class and remove unchecked
    selectedElem.classList.remove(QUIZ_PAGE_STYLES.uncheckedClass)
    selectedElem.classList.add(QUIZ_PAGE_STYLES.wrongAnswerClass)
    GAME_HANDLER.addAnswer(questionSet.correctAnswer.value, answer, false, questionSet.question);
    resetQuizAfterQuestion();
    renderNextQuestion(GENERATOR);
}

// removes question list items
const resetQuizAfterQuestion = () => {
    const quizBody = document.getElementById('quiz-body');
    const quizTemplate = document.getElementById('quiz-template');
    quizBody.innerHTML = getTemplateContent(quizTemplate)[1].innerHTML // get the quiz body inner HTML from the template
}

// Timer
var interval;
var timeOut;
var durationTime;

const setupTimer = (timerDuration) => {
    const barDiv = createTimer()
    startTimer(barDiv, timerDuration);
}

const createTimer = () => {
    const timerBody = document.getElementById('timer');
    const bar = document.createElement("div");
    bar.setAttribute('id', 'bar')
    timerBody.appendChild(bar);

    return bar
}

const startTimer = (bar, timerDuration) => {
    // durationTime time in seconds, can be changed freely 120 -> 120 seconds = 2 minutes
    durationTime = timerDuration
    printTime(durationTime);
    bar.style.animation = "anim 1 linear forwards";
    bar.style.animationDuration = durationTime + "s";
    interval = setInterval(runningTime, 1000);
    timeOut = setTimeout(function () {
        clearInterval(interval);
        bar.style.animationPlayState = "paused";
        rankingService(CURRENT_MODE, GAME_HANDLER.getResults(durationTime));
        fillResultsModal(GAME_HANDLER.getResults(durationTime), CURRENT_MODE)
        showAPopUpScreen(document.getElementById('resultsScreen'), 'flex');
    }, (durationTime * 1000));

    function runningTime() {
        durationTime--;
        printTime(durationTime);
    };

    function printTime(timeToPrint) {
        document.getElementById("timerLabel").innerHTML = '<b>' + timeToPrint + '</b>s';
    };
}

function endTimer() {
    const bar = document.getElementById('bar');
    clearTimeout(timeOut);
    clearInterval(interval);
    bar.style.animationPlayState = "paused";
}