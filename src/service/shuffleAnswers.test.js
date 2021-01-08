import { shuffleAnswers } from "./shuffleAnswers";

describe('Test shuffeAnswers function', () => {

    it("Should return question object with answers shuffled and assigned new correct index", () => {
        // Given
        const exampleQuestion = {
            question: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png', 
            answers: ['bulbasaur', 'ivysaur', 'venusaur', 'charmander'], 
            correctAnswer: { value: 'bulbasaur', index: 0}
        }

        // When
        const questionShuffled = shuffleAnswers(exampleQuestion);

        // Then
        expect(questionShuffled).toHaveProperty('question');
        expect(questionShuffled.question).toEqual('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png');

        expect(questionShuffled).toHaveProperty('answers');
        expect(questionShuffled.answers).toHaveLength(4);
        expect(questionShuffled.answers).toEqual(expect.arrayContaining(['bulbasaur', 'ivysaur', 'venusaur', 'charmander'])); //In any order
        
        expect(questionShuffled).toHaveProperty('correctAnswer');
        expect(questionShuffled.correctAnswer).toHaveProperty('value');
        expect(questionShuffled.correctAnswer.value).toEqual('bulbasaur');
        expect(questionShuffled.correctAnswer).toHaveProperty('index');
        
        expect(questionShuffled.answers[questionShuffled.correctAnswer.index]).toEqual(questionShuffled.correctAnswer.value);
    });

    it("Should return an arrow if receives an empty object", () => {
        // Given
        const exampleQuestion = {};

        // When
        const questionShuffled = () => {shuffleAnswers(exampleQuestion)};

        // Then
        expect(questionShuffled).toThrowError(`Incorrect argument! The argument has to be a question object with properties question, anwers, correctAnswers.Argument received: ${exampleQuestion}`);
    });

    it("Should return an arrow if receives not an object", () => {
        // Given
        const exampleQuestion = 'pokemon';

        // When
        const questionShuffled = () => {shuffleAnswers(exampleQuestion)};

        // Then
        expect(questionShuffled).toThrowError(`Incorrect argument! The argument has to be a question object with properties question, anwers, correctAnswers.Argument received: ${exampleQuestion}`);
    });

    it("Should return an error if receives an incorrect object", () => {
        // Given
        const exampleQuestion = {
            answers: ['bulbasaur', 'ivysaur', 'venusaur', 'charmander'], 
            correctAnswer: { value: 'bulbasaur', index: 0}
        };

        // When
        const questionShuffled = () => {shuffleAnswers(exampleQuestion)};

        // Then
        expect(questionShuffled).toThrowError(`Incorrect argument! The argument has to be a question object with properties question, anwers, correctAnswers.Argument received: ${exampleQuestion}`);
    });
});