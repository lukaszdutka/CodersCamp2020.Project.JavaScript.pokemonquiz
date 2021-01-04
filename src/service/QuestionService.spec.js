import { WHO_IS_THAT_POKEMON } from "./modes";
import {
    QuestionService
} from "./questionService";

const quizQuestion = new QuestionService(WHO_IS_THAT_POKEMON);

describe('Test getNextQuestion method', () => {

    it("Should return question object - example output for mode 1: question: 'Bulbasaur' , answers: [ 'answer1', 'answer2', 'answer3', 'answer4', 'answer5-forTypes', 'answer6-forTypes', ], correctAnswer: 'Bulbasaur'  ", async () => {
        // Given
        const pokomonIds = [1, 2, 3, 4];

        // When
        const question = await quizQuestion.getNextQuestion(pokomonIds);

        // Then
        expect(question).toHaveAttribute('question');
        expect(question.question).toEqual('bulbasaur');

        expect(question).toHaveAttribute('answers');
        expect(question.answers).toHaveLength(4);
        expect(question.answers).toEqual(expect.arrayContaining(['bulbasaur', 'ivysaur', 'venusaur', 'charmander'])); //In any order
        
        expect(question).toHaveAttribute('correctAnswer');
        expect(question.correctAnswer).toHaveAttribute('name');
        expect(question.correctAnswer.name).toEqual('bulbasaur');
        expect(question.correctAnswer).toHaveAttribute('index');
        
        expect(question.answers[question.correctAnswer.index]).toEqual(question.correctAnswer.name);
    })
});