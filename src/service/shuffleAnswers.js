import { randomNumberInRange } from './randomNumberInRange'

export const shuffleAnswers = (questionObj) => {

    if (!questionObj.hasOwnProperty('question') || !questionObj.hasOwnProperty('answers') || !questionObj.hasOwnProperty('correctAnswer')) {

        throw new Error (`Incorrect argument! The argument has to be a question object with properties question, anwers, correctAnswers.Argument received: ${questionObj}`);

    }

    // assign new indices, making sure every index is different
    const correctAnswerNewIndex =  randomNumberInRange(0, 3);
    const secondAnswerNewIndex = randomNumberInRange(0, 3, [correctAnswerNewIndex]);
    const thirdAnswerNewIndex = randomNumberInRange(0, 3, [correctAnswerNewIndex, secondAnswerNewIndex]);
    const forthAnswerNewIndex = randomNumberInRange(0, 3, [correctAnswerNewIndex, secondAnswerNewIndex, thirdAnswerNewIndex]);
    
    // create an array of arrays: each array contains the answer at [0] and the new endex at [1];
    const allQuestionsWithNewIndices = [[questionObj.answers[0], correctAnswerNewIndex], [questionObj.answers[1], secondAnswerNewIndex], [questionObj.answers[2], 
    thirdAnswerNewIndex], [questionObj.answers[3], forthAnswerNewIndex]];

    //sort according to new indices
    const allQuestionsSortedInNewOrder = allQuestionsWithNewIndices.sort((a, b) => a[1] - b[1]);

    return {
        question: questionObj.question, 
        // add only first elements of allQuestionsSortedInNewOrder array - answers
        answers: [ allQuestionsSortedInNewOrder[0][0], allQuestionsSortedInNewOrder[1][0], allQuestionsSortedInNewOrder[2][0], allQuestionsSortedInNewOrder[3][0]], 
        correctAnswer: { value: allQuestionsSortedInNewOrder[correctAnswerNewIndex][0], index: correctAnswerNewIndex}
    }
}