export const fillResultsModal = (gameHandlerResults) => {

    const resultsDescription = document.querySelector('#resultsDescription');
    resultsDescription.textContent = `Congratulations ${gameHandlerResults.name}! During ${gameHandlerResults.time} seconds you answered ${gameHandlerResults.answers.length} questions and scored ${gameHandlerResults.score} points!`

    const resultsTable = document.querySelector('#tableWithResults');

    for (let question of gameHandlerResults.answers) {
        
        const tableCell = document.createElement('tr');
        tableCell.className = 'tableWithResultsQA';
        tableCell.innerHTML = 
        `<td><img src='./static/assets/ui/pikach1.png' alt='Pokemon' class='tableWithResultsQuestion'/></td>
        <td class='tableWithResultsCorrectAnswer'>${question.correctAnswer}</td>
        <td class='tableWithResultsYourAnswer'>${question.answer}</td>`

        if (question.isCorrect === true) {
            tableCell.querySelector('.tableWithResultsYourAnswer').style.color = 'green';
        } else {
            tableCell.querySelector('.tableWithResultsYourAnswer').style.color = 'red';
        }

        resultsTable.appendChild(tableCell);
    }
}