import { randomNumberInRange } from './randomNumberInRange';
import {QuestionService} from './QuestionService';
import { WHO_IS_THAT_POKEMON } from "./modes";

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
        }
        this.askedQuestionsCount++;

        const correctAnswerIndex = randomNumberInRange(1, 4);
        questionService.correctAnswerIndex = correctAnswerIndex;

        const currentQuestionsArray = []

        for (let i = 1; i <= 4; i++) {
            currentQuestionsArray.push(randomNumberInRange(this.minPokeId, this.maxPokeId, currentQuestionsArray));
        }
        // console.log("Random array of questions: " + currentQuestionsArray)

        const questionPromise = await questionService.getQuestion(currentQuestionsArray, this.mode);
        console.log("Promises: " + questionPromise)
        const questionObj = questionPromise.then((result) => console.log("Result: " + result));
        console.log("Question obj: " + questionObj)
        // const questionObj = await Promise.all(questionPromise);

        return questionObj
        // return currentQuestionsArray;
    }
};


const questionGener = new QuestionGenerator(WHO_IS_THAT_POKEMON);

console.log(questionGener.getNextQuestion());