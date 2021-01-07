import { QuestionGenerator } from './QuestionGenerator';
import { WHO_IS_THAT_POKEMON } from "./modes";

const generatedQuestion = new QuestionGenerator(WHO_IS_THAT_POKEMON);

describe('Test QuestionGenerator class', () => {

    it('Should return undefined if number of asked questions is bigger than 30', () => {

        //given
        const numberOfAskedQuestions = 31;

        //when 
        generatedQuestion.askedQuestionsCount = numberOfAskedQuestions

        //then 
        expect(generatedQuestion.getNextQuestion()).toBeUndefined;
        
    });
});