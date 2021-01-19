import { WHO_IS_THAT_POKEMON } from "../src/service/modes";
import {
    QuestionService
} from "../src/service/QuestionService.js";

const quizQuestion = new QuestionService();

describe('Test getQuestion method', () => {

    it("Should return question object - example output for mode 1: question: 'bulbasaur' , answers: [ 'answer1', 'answer2', 'answer3', 'answer4' ], correctAnswer: { name: 'bulbasaur', index: 1 }  ", async () => {
        // Given
        const pokemonIds = [1, 2, 3, 4];

        // When
        const question = await quizQuestion.getQuestion(pokemonIds, WHO_IS_THAT_POKEMON);

        // Then
        expect(question).toHaveProperty('question');
        expect(question.question).toEqual('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png');

        expect(question).toHaveProperty('answers');
        expect(question.answers).toHaveLength(4);
        expect(question.answers).toEqual(expect.arrayContaining(['Bulbasaur', 'Ivysaur', 'Venusaur', 'Charmander'])); //In any order
        
        expect(question).toHaveProperty('correctAnswer');
        expect(question.correctAnswer).toHaveProperty('value');
        expect(question.correctAnswer.value).toEqual('Bulbasaur');
        expect(question.correctAnswer).toHaveProperty('index');
        
        expect(question.answers[question.correctAnswer.index]).toEqual(question.correctAnswer.value);
    })
});


describe('Test checkAnswer method', () => {

    it("Should return result true for user answer -> 'Bulbasaur' ", async () => {
        // Given
        const pokemonIds = [1, 2, 3, 4];
        const userAnswer = 'Bulbasaur';

        // When
        const question = await quizQuestion.getQuestion(pokemonIds, WHO_IS_THAT_POKEMON);

        // Then
        expect(quizQuestion.checkAnswer(question, userAnswer)).toBeTruthy();
        
    })
});

describe('Test checkAnswer method', () => {

    it("Should return result false for user answer -> 'Venusaur' ", async () => {
        // Given
        const pokemonIds = [1, 2, 3, 4];
        const userAnswer = 'Venusaur';

        // When
        const question = await quizQuestion.getQuestion(pokemonIds, WHO_IS_THAT_POKEMON);

        // Then
        expect(quizQuestion.checkAnswer(question, userAnswer)).toBeFalsy();
        
    })
});