import{GameHandler} from "./GameHandler"

describe('Store user choosen and statistic during game', () => {
    it('Should update game statistic', () => {
        //given
        const gameHandler = new GameHandler("Ala", 120);
        const question = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png";
        const correctAnswer = "pikachu";
        const answer = "charmander";
        const isCorrect = false;
        //when
        gameHandler.addAnswer(correctAnswer, answer, isCorrect, question)
        //then
        expect(gameHandler.getResults(15)).toEqual({
            name: "Ala",
            time: 105,
            score: 0,
            answers: [{
                correctAnswer:"pikachu", 
                answer: "charmander",
                isCorrect: false,
                question: question
            }]
        })
    })
})
