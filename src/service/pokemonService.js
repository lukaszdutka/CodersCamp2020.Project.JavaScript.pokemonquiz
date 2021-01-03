// import { App } from "../app/App"
// import { getPokemonById, getTypeById } from "../api/pokemon"


// example result of calling getPokemonById(1):
// { id: 1, name: 'Bulbasaur', photoUrl: 'someurl', types: [ { id: 3, name: 'grass' }, { id: 6, name: 'poison' } ] }
// example result of calling getTypeById(3):
// { id: 3, name: 'grass' }


// example of getNextQuestion('guessName')
// { 
//     question: { pokemonName: 'Bulbasaur', pokemonUrl: 'someUrl', }, 
//     answers: [ 'answer1', 'answer2', 'answer3', 'answer4', 'answer5-forTypes', 'answer6-forTypes', ], 
//     correctAnswer: 'Bulbasaur' 
// }

class Question {

    //Random nr 1-151
    randomPokemonId() {
        const firstGenPokemonLimit = 152
        let randomId = Math.floor(Math.random() * firstGenPokemonLimit)
        return randomId;
    }

    answers(numOfAnswers = 4) {
        let answersArr = [];
        for (let i = 1; i <= numOfAnswers; i++) {
            answersArr.push(this.randomPokemonId());
        }
        return answersArr
    }

    correctAnswer(numOfAnswers = 4) {
        return Math.floor(Math.random() * numOfAnswers) + 1;
    }

    // getNextQuestion() {
    //     currentId = randomPokemonId();

    // }

    // checkAnswer() {

    // }
}


const quizQestion = new Question();

//console.log(quizQestion.randomPokemonId())
//console.log(quizQestion.answers())
console.log(quizQestion.correctAnswer())