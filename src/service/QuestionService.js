import {
    getPokemonById
} from "../api/pokemons";
import { WHAT_DOES_THIS_POKEMON_LOOK_LIKE, WHO_IS_THAT_POKEMON, WHO_IS_THAT_POKEMON_HARD_MODE } from "./modes";
import { shuffleAnswers } from "./shuffleAnswers"

export class QuestionService {

    constructor() {
        this.correctAnswerIndex = 0; // range 0-3
    }

    async getQuestion(pokemonIds, mode) {
        
        if (!pokemonIds || pokemonIds.length != 4) {
            throw new Error('pokemonIds is not an array of 4 elements')
        }
        
        const pokePromises = pokemonIds.map( id => getPokemonById(id))
        const answersObj = await Promise.all(pokePromises);
        
        if (mode === WHO_IS_THAT_POKEMON || mode === WHO_IS_THAT_POKEMON_HARD_MODE) {
            return shuffleAnswers({
                question: answersObj[this.correctAnswerIndex].photoUrl , 
                answers: [ answersObj[0].name, answersObj[1].name, answersObj[2].name, answersObj[3].name ], 
                correctAnswer: { value: answersObj[this.correctAnswerIndex].name, index: this.correctAnswerIndex}
            })
        } else if (mode === WHAT_DOES_THIS_POKEMON_LOOK_LIKE ) {
            return shuffleAnswers({
                question: answersObj[this.correctAnswerIndex].name , 
                answers: [ answersObj[0].photoUrl, answersObj[1].photoUrl, answersObj[2].photoUrl, answersObj[3].photoUrl ], 
                correctAnswer: { value: answersObj[this.correctAnswerIndex].photoUrl, index: this.correctAnswerIndex }
            })
        };
    }

    checkAnswer(questionObj, userAnswer) {
        let result = false;
        if ( userAnswer == questionObj.correctAnswer.value ) {
            result = true;
        };
        return result;
    }
}