import { WHAT_DOES_THIS_POKEMON_LOOK_LIKE, WHO_IS_THAT_POKEMON } from "../service/modes";

export const fillResultsModal = (gameHandlerResults, mode) => {

    const resultsDescription = document.querySelector('#resultsDescription');
    resultsDescription.textContent = `Congratulations ${gameHandlerResults.name}! During ${gameHandlerResults.time} seconds you answered ${gameHandlerResults.answers.length} questions and scored ${gameHandlerResults.score} point(s)!`

    const resultsTable = document.querySelector('#tableWithResults table');

    for (let questionItem of gameHandlerResults.answers) {
        
        const tableCell = document.createElement('tr');
        tableCell.className = 'tableWithResultsQA';
        
        if (mode === WHAT_DOES_THIS_POKEMON_LOOK_LIKE) {
            tableCell.innerHTML = 
            `<td>${questionItem.question}</td>
            <td><img src='${questionItem.correctAnswer}' alt='pokemon img' class='tableWithResultsCorrectAnswer'/></td>
            <td><img src='${questionItem.answer}' alt='pokemon img' class='tableWithResultsYourAnswer'/></td>`

            tableCell.querySelector('.tableWithResultsYourAnswer').style.border = questionItem.isCorrect === true ? '2px solid green' : '2px solid red';
        
        } else if (mode === WHO_IS_THAT_POKEMON) {
            tableCell.innerHTML = 
            `<td><img src='${questionItem.question}' alt='pokemon img' class='tableWithResultsQuestion'/></td>
            <td class='tableWithResultsCorrectAnswer'>${questionItem.correctAnswer}</td>
            <td class='tableWithResultsYourAnswer'>${questionItem.answer}</td>`

            tableCell.querySelector('.tableWithResultsYourAnswer').style.color = questionItem.isCorrect === true ? 'green' : 'red';
        }
        resultsTable.appendChild(tableCell);
    }
}