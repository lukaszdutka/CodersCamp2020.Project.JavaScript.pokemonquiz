import {
    QuestionService
} from "../service/QuestionService.js"

import {
    QUIZ_PAGE_STYLES,
    START_PAGE_STYLES,
    TIMEOUT_AFTER_ANSWER_SELECTION
} from "./appSettings.js"

import{
    GameHandler
}from "../service/GameHandler.js"

import {
    showAPopUpScreen
} from './showAPopUpScreen'

// will be filledi with mode object during page rendering
let CURRENT_MODE = null; 
let GENERATOR = null;
let GAME_HANDLER = null;

// use to render the page for the first time, after the game start
export function renderQuizPage(mode, name, totalTime) {
    CURRENT_MODE = mode;
    GAME_HANDLER = new GameHandler(name, totalTime);

    const appScreen = document.querySelector('#pokequiz-app');
    appScreen.classList.add(QUIZ_PAGE_STYLES.quizPageClass)
    appScreen.classList.remove(START_PAGE_STYLES.startPageClass)
    const quizTemplate = document.getElementById('quiz-template');
    appScreen.innerHTML = quizTemplate.innerHTML;
    const resultsTemplate = document.getElementById('results-modal-template');
    appScreen.innerHTML += resultsTemplate.innerHTML;

    // TODO later  - generate question using questionService - below are temporary dummy variables
    const generatedQuestion = {
        question: "quizQuestion",
        questionNum: 1,
    }
    setupPageTitle(CURRENT_MODE);
    //GENERATOR = new QuestionService.Generator()
    //TODO setupTimer() -- here or directly in App
    renderNextQuestion(CURRENT_MODE);

    // TODO later - the end of the quiz should activate the function below: 
    showAPopUpScreen(document.getElementById('resultsScreen'), 'flex');
    // add event listener to the results screen button 
    document.querySelector('#backToStartingPageButton').addEventListener('click', () => {
        location.reload();
    });
}


// use to update quizPage and change only the question, new answers and question counter
// not changing the timer and bar
// gent question generator and use generates next question if there is any left to answer
// otherwise finishes the game and redirect user to the summary page
export function renderNextQuestion(mode) {
    //genQuestion nie powinno być przekazywane do funkcji tylko powinno być tu wywoływana
    const genQuestion = getNextQuestion(mode); // TODO later pass generator and use  generator.genQuestion(), and replace dummy function with real one, once it's implemented. Gonna be async
    if (genQuestion) { // some questions still left to answer
        const quizBody = document.querySelector("#quiz-body");
        // Update question
        const quizQuestionElem = quizBody.querySelector(".quiz-question");
        updateQuestion(quizQuestionElem, genQuestion.question, mode);
        // Update answers list
        const quizUl = quizBody.querySelector(".quiz-answers-list");
        updateAnswersList(quizUl, genQuestion.question, mode);
        // Update question counter
        const questionCounter = document.querySelector("#question-counter");
        updateQuestionCounter(questionCounter, genQuestion.questionNum);
        // listen for an answer selection
        const answersOptions = [...quizBody.querySelector(".quiz-answers-list").children]
        for (let option of answersOptions) {
            option.addEventListener("mouseup", function selectEventFunc() {
                selectAnswer(genQuestion.question, option.querySelector("div"));
            })
        }
    } else { // no more questions left
        console.log("You WON!, but sorry, we still don't have any summary page"); // TODO create summary page redirection
    }
}

//TODO dummy function  to be removed after generator is added
const getNextQuestion = (mode) => {
    let q;
    if (mode.name == "WHO_IS_THAT_POKEMON") {
        q = {
            question: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
            answers: ['bulbasaur', 'ivysaur', 'venusaur', 'charmander'],
            correctAnswer: {
                name: 'bulbasaur',
                index: 1
            }
        }
    } else if (mode.name == "WHAT_DOES_THIS_POKEMON_LOOK_LIKE") {
        q = {
            question: 'bulbasaur',
            answers: ['https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png',
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png'
            ],
            correctAnswer: {
                name: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
                index: 1
            }
        }
    }
    return {
        question: q,
        questionNum: 1,
    }
}

// Changes the title corresponding to the chosen game mode
const setupPageTitle = (mode) => {
    const modeHeader = document.querySelector(".mode-title h2")
    modeHeader.innerText = mode.title // Setup mode title
}

// Updates the question div with styling and content depending on a type of a question
const updateQuestion = (questionElement, questionSet, mode) => {
    if (mode.questionType === "image") {
        questionElement.classList.add(QUIZ_PAGE_STYLES.quizQuestionImageClass);
        const imgElem = createImgElement(questionSet.question); // add img from url
        questionElement.appendChild(imgElem);

    } else if (mode.questionType === "text") {
        questionElement.classList.add(QUIZ_PAGE_STYLES.quizQuestionTextClass);
        questionElement.innerText = questionSet.question; // add question as an inner text
    }
}

// Creates img element with a selected image url
const createImgElement = (url) => {
    const img = document.createElement("img");
    img.setAttribute("src", url);
    return img;
}

// Updates styles for question list based on mode type
// creates question items sor provided question set
const updateAnswersList = (answersElement, questionSet, mode) => {
    for (let answer of questionSet.answers) {
        const answerElement = createAnswerElement(answer, mode);
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

const createAnswerElement = (answer, mode) => {
    const liTemplate = document.querySelector("#quiz-li");
    const li = getTemplateContent(liTemplate)[0];
    const liFirstElem = li.children[0]

    if (mode.answerType === "image") {
        // first child of li receives an image
        liFirstElem.classList.add(QUIZ_PAGE_STYLES.quizAnswerImageClass)
        const imgElem = createImgElement(answer) // get img url
        liFirstElem.appendChild(imgElem)

    } else if (mode.answerType === "text") {
        // first child of li receives text
        liFirstElem.classList.add(QUIZ_PAGE_STYLES.quizAnswerTextClass)
        liFirstElem.innerText = answer // add question as an inner text
    }
    return li
}

// Updates the question number ona quiz page
const updateQuestionCounter = (counterElem, questionNum) => {
    counterElem.innerText = String(questionNum).padStart(2, '0'); //TODO maybe - total num of question in a game mode
}

// fires up on mouse up event on answers list li, additionally accepts questionSet
// check which answer was selected
// eventHandler is element to which eventListener was attached to
function selectAnswer(questionSet, eventHandler) {
    const answer = getAnswerFromElement(eventHandler);
    if (answer) {
        questionSet.correctAnswer.name === answer ? correctAnswerSelected(eventHandler, answer, questionSet) : wrongAnswerSelected(eventHandler, answer, questionSet);
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
    //TODO add correct-answer class and remove unchecked
    selectedElem.classList.remove(QUIZ_PAGE_STYLES.uncheckedClass)
    selectedElem.classList.add(QUIZ_PAGE_STYLES.correctAnswerClass)
    
    GAME_HANDLER.addAnswer(questionSet.correctAnswer.name, answer, true);
    console.log(GAME_HANDLER.getResults(10));
    setTimeout(()=> {
        resetQuizAfterQuestion();
        renderNextQuestion(CURRENT_MODE);
    }, TIMEOUT_AFTER_ANSWER_SELECTION)
}

const wrongAnswerSelected = (selectedElem, answer, questionSet) => {
    // add wrong-answer class and remove unchecked
    selectedElem.classList.remove(QUIZ_PAGE_STYLES.uncheckedClass)
    selectedElem.classList.add(QUIZ_PAGE_STYLES.wrongAnswerClass)

    GAME_HANDLER.addAnswer(questionSet.correctAnswer.name, answer, false);
    console.log(GAME_HANDLER.getResults(10));
    setTimeout(()=> {
        resetQuizAfterQuestion();
        renderNextQuestion(CURRENT_MODE);
    }, TIMEOUT_AFTER_ANSWER_SELECTION)
}

// removes question list items
const resetQuizAfterQuestion = () => {
    const quizBody = document.getElementById('quiz-body');
    const quizTemplate = document.getElementById('quiz-template');
    quizBody.innerHTML = getTemplateContent(quizTemplate)[1].innerHTML // get the quiz body inner HTML from the template
}
// TODO check if any css class should be reset too

