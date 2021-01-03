// import { App } from "../app/App"
// import { getPokemonById, getTypeById } from "../api/pokemon"


// example result of calling getPokemonById(1):
// { id: 1, name: 'Bulbasaur', photoUrl: 'someurl', types: [ { id: 3, name: 'grass' }, { id: 6, name: 'poison' } ] }
// example result of calling getTypeById(3):
// { id: 3, name: 'grass' }

class Question {

    //Random nr 1-151
    randomPokemonId() {
        const firstGenPokemonLimit = 152
        let randomId = Math.floor(Math.random() * firstGenPokemonLimit)
        return randomId;
    }

    // getNextQuestion() {

    // }

    // checkAnswer() {

    // }
}


const quziQestion = new Question();

console.log(quziQestion.randomPokemonId())