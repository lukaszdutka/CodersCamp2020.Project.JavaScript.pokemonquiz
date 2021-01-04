import {
    getPokemonById,
    //getTypeById
} from "../api/pokemons";
import { WHAT_DOES_THIS_POKEMON_LOOK_LIKE, WHO_IS_THAT_POKEMON } from "./modes";


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

export class QuestionService {

    constructor(mode) {
        this.mode = mode;
    }

    async getNextQuestion(pokemonIds) {
        
        if (!pokemonIds || pokemonIds.length != 4) {
            throw new Error('pokemonIds is not an array of 4 elements')
        }
        
        const pokePromises = pokemonIds.map( id => getPokemonById(id))
        const answersObj = await Promise.all(pokePromises);
        
        if (this.mode === WHO_IS_THAT_POKEMON) {
            return {
                question: answersObj[0].photoUrl , 
                answers: [ answersObj[0].name, answersObj[1].name, answersObj[2].name, answersObj[3].name ], 
                correctAnswer: { value: answersObj[0].name, index: 0}
            }
        } else if (this.mode === WHAT_DOES_THIS_POKEMON_LOOK_LIKE ) {
            return {
                question: answersObj[0].name , 
                answers: [ answersObj[0].photoUrl, answersObj[1].photoUrl, answersObj[2].photoUrl, answersObj[3].photoUrl ], 
                correctAnswer: { name: answersObj[correctAnswer.index].photoUrl, index: 0 }
            }
        };
    }

    checkAnswer(question, userAnswer) {
        let result = false;
        if ( userAnswer == question.correctAnswer ) {
            result = true;
        };
        
        return result;
    }
}


const quizQuestion = new QuestionService();