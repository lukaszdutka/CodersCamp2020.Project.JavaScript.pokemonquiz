// use to render the page for the first time, after the game start
export function renderQuizPage(mode) {
    const appScreen = document.querySelector('#pokequiz-app');
    const quizTemplate = document.getElementById('quiz-template');
    appScreen.innerHTML = quizTemplate.innerHTML;

    // TODO later  - generate question using questionService - below are temporary dummy variables
    const quizQuestion = {
        question: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
        answers: ['bulbasaur', 'ivysaur', 'venusaur', 'charmander'],
        correctAnswer: {
            name: 'bulbasaur',
            index: 1
        }
    }
    const generatedQuestion = {
        question: quizQuestion,
        questionNum: 1,
    }
    setupPageTitle(mode)
    //TODO setupTimer()
    renderNextQuestion(generatedQuestion, mode)
}

// use to update quizPage and change only the question, new answers and question qounter
// not changing the time bar
export function renderNextQuestion(genQuestion, mode) {
    const quizBody = document.querySelector("#quiz-body");
    const quizQuestionElem = quizBody.querySelector(".quiz-question")
    updateQuestion(quizQuestionElem, genQuestion.question, mode)

    const quizUl = quizBody.querySelector(".quiz-answers-list")
    updateAnswersList(quizUl, genQuestion.question, mode)

    // const questionCounter = quizBody.querySelector("#question-counter");
    // updateQuestionCounter(questionCounter, questionNum)
}

// Changes the title corresponding to the chosen game mode
const setupPageTitle = (mode) => {
    const modeHeader = document.querySelector(".mode-title h2")
    modeHeader.innerText = mode.title // Setup mode title
}

// Updates the question div with styling and content depending on a type of a question
const updateQuestion = (questionElement, questionSet, mode) => {
    if (mode.questionType === "image") {
        questionElement.classList.add("question-img")
        const imgElem = createImgElement(questionSet.question)  // add img from url
        questionElement.appendChild(imgElem)

    } else if (mode.questionType === "text") {
        questionElement.classList.add("question-text")
        questionElement.innerText = questionSet.question.question  // add question as an inner text
    }
}

// Creates img element with a selected image url
const createImgElement = (url) => {
    const img = document.createElement("img")
    img.setAttribute("src", url)
    return img
}

// Updates styles for question list based on mode type
// creates question items sor provided question set
const updateAnswersList = (answersElement, questionSet, mode) => {
    // current version works only for text answer type
    //TODO add img version
    
    if (mode.questionType == "text") {
        answersElement.classList.add("quiz-answer-text")
    }
    for (let answer of questionSet.answers) {
        const answerElement = createAnswerElement(answer, mode);
        answersElement.appendChild(answerElement);
    }
}

// returns first child element from tthe template
// for template.content replacement, which is not fully supported yet
const getTemplateContent = (template) => {
    const dummyDiv = document.createElement("div");  // 
    dummyDiv.innerHTML = template.innerHTML;
    return dummyDiv.children[0]
}

const createAnswerElement = (answer, mode) => {
    const liTemplate = document.querySelector("#quiz-li");
    const li = getTemplateContent(liTemplate);
    const liFirstElem = li.children[0]

    if (mode.answerType === "image") {
        // first child of li receives an image
        liFirstElem.classList.add("question-img")
        const imgElem = createImgElement(answer)  // get img url
        liFirstElem.appendChild(imgElem)

    } else if (mode.answerType === "text") {
        // first child of li receives text
        liFirstElem.classList.add("question-text")
        console.log(answer);
        liFirstElem.innerText = answer  // add question as an inner text
    }
    return li
}
