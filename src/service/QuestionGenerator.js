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
        console.log("this.askedQuestionsCount: " + this.askedQuestionsCount)

        const correctAnswerIndex = randomNumberInRange(0, 3);
        questionService.correctAnswerIndex = correctAnswerIndex;

        const currentQuestionsArray = []
        for (let i = 1; i <= 4; i++) {
            currentQuestionsArray.push(randomNumberInRange(this.minPokeId, this.maxPokeId, currentQuestionsArray));
        }

        let questionObj = await questionService.getQuestion(currentQuestionsArray, this.mode);

        return questionObj
    }
};


const questionGene = new QuestionGenerator(WHO_IS_THAT_POKEMON);

console.log("Question counter (max 30): " + questionGene.askedQuestionsCount)

const run = async () => {
    const question1 = await questionGene.getNextQuestion()
    console.log("Question: " + question1.question)
    console.log("Ansewr: " + question1.answers)
    console.log("Correct answer: " + question1.correctAnswer.value + ", Correct answer index: " + question1.correctAnswer.index)
}

run()