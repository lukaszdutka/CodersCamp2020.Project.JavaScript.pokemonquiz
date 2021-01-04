import { WHO_IS_THAT_POKEMON } from "./modes";
import {
    QuestionService
} from "./questionService";

const quizQuestion = new QuestionService(WHO_IS_THAT_POKEMON);

describe('Test getNextQuestion method', () => {

    it("Should return question object - example output for mode 1: question: 'bulbasaur' , answers: [ 'answer1', 'answer2', 'answer3', 'answer4' ], correctAnswer: { name: 'bulbasaur', index: 1 }  ", async () => {
        // Given
        const pokomonIds = [1, 2, 3, 4];

        // When
        const question = await quizQuestion.getNextQuestion(pokomonIds);

        // Then
        expect(question).toHaveProperty('question');
        expect(question.question).toEqual('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png');

        expect(question).toHaveProperty('answers');
        expect(question.answers).toHaveLength(4);
        expect(question.answers).toEqual(expect.arrayContaining(['bulbasaur', 'ivysaur', 'venusaur', 'charmander'])); //In any order
        
        expect(question).toHaveProperty('correctAnswer');
        expect(question.correctAnswer).toHaveProperty('value');
        expect(question.correctAnswer.value).toEqual('bulbasaur');
        expect(question.correctAnswer).toHaveProperty('index');
        
        expect(question.answers[question.correctAnswer.index]).toEqual(question.correctAnswer.value);
    })
});


describe('Test checkAnswer method', () => {

    it("Should return result true for user answer -> 'bulbasaur' ", async () => {
        // Given
        const pokomonIds = [1, 2, 3, 4];
        const userAnswer = 'bulbasaur';

        // When
        const question = await quizQuestion.getNextQuestion(pokomonIds);

        // Then
        expect(quizQuestion.checkAnswer(question, userAnswer)).toEqual(true);
        
    })
});

describe('Test checkAnswer method', () => {

    it("Should return result false for user answer -> 'venusaur' ", async () => {
        // Given
        const pokomonIds = [1, 2, 3, 4];
        const userAnswer = 'venusaur';

        // When
        const question = await quizQuestion.getNextQuestion(pokomonIds);

        // Then
        expect(quizQuestion.checkAnswer(question, userAnswer)).toEqual(false);
        
    })
});