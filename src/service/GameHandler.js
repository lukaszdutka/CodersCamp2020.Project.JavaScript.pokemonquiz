
export class GameHandler {
    constructor(name, totalTime) {
        this.name = name;
        this.totalTime = totalTime; //seconds
        this.score = 0;
        this.answers = [];
    }

    addAnswers(correctAnswer, answer, isCorrect) {
        this.answers.push({
            answer: answer,
            correctAnswer: correctAnswer,
            isCorrect: isCorrect,
        })
        if (this.isCorrect) {
            this.score++;
        }
    }

    // Subtruct time left from total time
    // returns time of the game
    calculateTime(timeLeft) {
        return this.totalTime - timeLeft
    }

    getResults(timeLeft) {
        return {
            name: this.name,
            time: this.calculateTime(timeLeft),
            score: this.score,
            answers: this.answers,
        }
    }
}