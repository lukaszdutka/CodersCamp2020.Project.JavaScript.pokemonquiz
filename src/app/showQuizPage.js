export function showQuizPage() {
    const appScreen = document.querySelector('#pokequiz-app');
    const quizTemplate = document.getElementById('quiz-template');
    appScreen.innerHTML = quizTemplate.innerHTML;
}
