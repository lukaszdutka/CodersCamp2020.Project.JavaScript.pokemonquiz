export const fillResultsModal = (gameHandlerResults) => {

    const resultsDescription = document.querySelector('#resultsDescription');
    resultsDescription.textContent = `Congratulations ${gameHandlerResults.name}! During ${gameHandlerResults.time} seconds you answered ${gameHandlerResults.answers.length} questions and scored ${gameHandlerResults.score} points!`

    const resultsTable = document.querySelector('#tableWithResults table');

    for (let questionItem of gameHandlerResults.answers) {
        
        const tableCell = document.createElement('tr');
        tableCell.className = 'tableWithResultsQA';
        if ((questionItem.question).substring(0, 3) !== 'http') {
            tableCell.innerHTML = 
            `<td>${questionItem.question}</td>
            <td><img src='${questionItem.correctAnswer}' alt='pokemon img' class='tableWithResultsCorrectAnswer'/></td>
            <td><img src='${questionItem.answer}' alt='pokemon img' class='tableWithResultsYourAnswer'/></td>`

            if (questionItem.isCorrect === true) {
                tableCell.querySelector('.tableWithResultsYourAnswer').style.border = '2px solid green';
            } else {
                tableCell.querySelector('.tableWithResultsYourAnswer').style.border = '2px solid red';
            }
        } else {
            tableCell.innerHTML = 
            `<td><img src='${questionItem.question}' alt='pokemon img' class='tableWithResultsQuestion'/></td>
            <td class='tableWithResultsCorrectAnswer'>${questionItem.correctAnswer}</td>
            <td class='tableWithResultsYourAnswer'>${questionItem.answer}</td>`
            
            if (questionItem.isCorrect === true) {
                tableCell.querySelector('.tableWithResultsYourAnswer').style.color = 'green';
            } else {
                tableCell.querySelector('.tableWithResultsYourAnswer').style.color = 'red';
            }
        }
        resultsTable.appendChild(tableCell);
    }
}