import {
    Question
} from "./pokemonService";

const quizQuestion = new Question();

describe('Test random pokemon id method', () => {

    const randomId = quizQuestion.randomPokemonId();

    it("Should return number in range 1-151", () => {
        expect(randomId).toBeGreaterThan(0);
        expect(randomId).toBeLessThan(152);
    })
});

describe('Test answers method', () => {

    const answersList = quizQuestion.answers();

    it("Should return list of IDs (default 4 element list) which will be mapped on answers", () => {
        expect(answersList.length).toEqual(4);
    })
});

describe('Test correctAnswer method', () => {

    const correctAnswer = quizQuestion.correctAnswer();

    it("Should return number in range 1-4. The number show position of correct answer in quiz", () => {
        expect(correctAnswer).toBeGreaterThan(0);
        expect(correctAnswer).toBeLessThan(5);
    })
});

describe('Test getNextQuestion method', () => {

    const questionExample = quizQuestion.getNextQuestion();

    it("Should return question object - example output for mode 1: question: { pokemonName: 'Bulbasaur', pokemonUrl: 'someUrl', }, answers: [ 'answer1', 'answer2', 'answer3', 'answer4', 'answer5-forTypes', 'answer6-forTypes', ], correctAnswer: 'Bulbasaur'  ", () => {
        expect(questionExample).toHaveProperty('question');
        expect(questionExample).toHaveProperty('answers');
        expect(questionExample).toHaveProperty('correctAnswer');
    })
});

