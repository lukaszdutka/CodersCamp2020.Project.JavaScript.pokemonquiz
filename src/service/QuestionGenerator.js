import { randomNumberInRange } from './randomNumberInRange';
import {QuestionService} from './QuestionService';

const questionService = new QuestionService()
export class QuestionGenerator {

    constructor(mode) {
        this.mode = mode;
        this.minPokeId = 1;
        this.maxPokeId = 152;
        this.askedQuestions = [];
        this.askedQuestionsCount = 0;
    };

    async getNextQuestion() {
        if (this.askedQuestionsCount === 30) {
            return undefined;
        };
        this.askedQuestionsCount++;

        const answerPokeId = randomNumberInRange(this.minPokeId, this.maxPokeId, this.askedQuestions);
        this.askedQuestions.push(answerPokeId);

        const currentQuestionsArray = [answerPokeId];
        for (let i = 1; i <= 3; i++) {
            currentQuestionsArray.push(randomNumberInRange(this.minPokeId, this.maxPokeId, currentQuestionsArray));
        };

        let questionObj = await questionService.getQuestion(currentQuestionsArray, this.mode);

        return questionObj
    };
};