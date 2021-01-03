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
        expect(randomId).toBeGreaterThan(0);
        expect(randomId).toBeLessThan(5);
    })
});

