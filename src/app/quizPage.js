export function renderQuizPage(mode) {
    console.log("test");
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
    renderNextQuestion(generatedQuestion, mode)
}


export function renderNextQuestion(genQuestion, mode) {
    const quizBody = document.querySelector("#quiz-body");
    const quizQuestionElem = quizBody.querySelector(".quiz-question")
    updateQuestion(quizQuestionElem, genQuestion, mode)

    const quizUl = quizBody.querySelector(".quiz-answers-list")
    //updateQuestionsList(quizUl)

    // const questionCounter = quizBody.querySelector("#question-counter");
    // updateQuestionCounter(questionCounter, questionNum)
}

const setupPageTitle = (mode) => {
    const modeHeader = document.querySelector(".mode-title h2")
    modeHeader.innerText = mode.title // Setup mode title
}

const updateQuestion = (questionElement, quizQuestion, mode) => {
    // adds styling and content depending on a type of a question
    if (mode.questionType === "image") {
        questionElement.classList.add("question-image")
        const imgElem = createImgElement(quizQuestion.question.question)  // get img url
        questionElement.appendChild(imgElem)

    } else if (mode.questionType === "text") {
        questionElement.classList.add("question-text")
        questionElement.innerText = quizQuestion.question.question  // add question as an inner text
    }
}

const createImgElement = (mode) => {
    const img = document.createElement("img")
    img.setAttribute("src", mode)
    return img
}
