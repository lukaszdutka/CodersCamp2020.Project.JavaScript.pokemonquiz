import{GameHandler} from "./GameHandler"

describe('Store user choosen and statistic during game', () => {
    it('Should update game statistic', () => {
        //given
        const gameHandler = new GameHandler("Ala", 120);
        const correctAnswer = "pikachu";
        const answer = "charmander";
        const isCorrect = false;
        //when
        gameHandler.addAnswers(correctAnswer, answer, isCorrect)
        //then
        expect(gameHandler.getResults(15)).toEqual({
            name: "Ala",
            time: 105,
            score: 0,
            answers: [{
                correctAnswer:"pikachu", 
                answer: "charmander",
                isCorrect: false}]
        })
    })
})
