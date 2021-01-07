
import { randomNumberInRange } from './randomNumberInRange'


export class QuestionGenerator {
    
    //Ids range for I gen pokemons
    minPokeId = 1;
    maxPokeId = 152;

    constructor(mode) {
        this.mode = mode;
    };

    randomIds() {
        const usedIds = [];
        return randomNumberInRange(this.minPokeId, this.maxPokeId, usedIds);

    }
};

