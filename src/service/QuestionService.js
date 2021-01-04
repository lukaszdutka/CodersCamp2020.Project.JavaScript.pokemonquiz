import {
    getPokemonById,
    //getTypeById
} from "../api/pokemons";
import { WHO_IS_THAT_POKEMON } from "./modes";


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
        const answersList = this.answers();
        const correctAnswerId = answersList[this.correctAnswer() - 1];
        console.log("Correct answer ID value " + correctAnswerId);

        // Created to see what will be print
        // getPokemonById(correctAnswerId).then(meta => {
        //     const correctAnswerPoke = meta;
        //     console.log(correctAnswerPoke);
        // });

        console.log("answersList: " + answersList)
        console.log("Is Array: " + Array.isArray(answersList))

        const pokePromises = answersList.map( id => getPokemonById(id))
        console.log("Promises: " + pokePromises)

        const answersObj = await Promise.all(pokePromises);

        console.log("Answer 1: " + answersObj[0].name);
        
        if (this.mode === WHO_IS_THAT_POKEMON) {
            var currQuestion = {
                pokemonUrl: getPokemonById(correctAnswerId).photoUrl
            };

            var answers = answersList.map( (id) => getPokemonById(id).name);
            var correctAnswer = getPokemonById(correctAnswerId).name;

        } else if (this.mode === 2) {
            var currQuestion = {
                pokemonName: getPokemonById(correctAnswerId).name
            };

            var answers = answersList.map( (id) => getPokemonById(id).photoUrl);
            var correctAnswer = getPokemonById(correctAnswerId).photoUrl;
        };
        
        const question = {
            question: currQuestion,
            answers: answers, 
            correctAnswer: correctAnswer 
        };

        return question;

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