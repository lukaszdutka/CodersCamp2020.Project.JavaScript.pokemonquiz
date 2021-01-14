import { WHAT_DOES_THIS_POKEMON_LOOK_LIKE, WHO_IS_THAT_POKEMON } from "../service/modes";

export const rankingService = (mode, user) => {
  const PokemonApiRanking = checkLocalStorage(); //update from localStorage
  let currentMode; //path to scores array for current mode
  switch(mode) {
    case WHO_IS_THAT_POKEMON:
      currentMode = PokemonApiRanking.mode1.scores;
    break;
    case WHAT_DOES_THIS_POKEMON_LOOK_LIKE:
      currentMode = PokemonApiRanking.mode2.scores;
    break;
    case GUESS_THE_TYPE:
      currentMode = PokemonApiRanking.mode3.scores;
    break;
    default:
      throw new Error('Wrong game mode!');
  }
  currentMode.push(user);
  currentMode.sort( (a,b) => {
    const scoreCompare = b.score - a.score;
    if(scoreCompare != 0) { // compare scores
      return scoreCompare;
    } else { // scores are the same => compare times
      return b.time - a.time;
    }
   } );
  if(currentMode.length > 3) {
    currentMode.pop();
  }

  localStorage.setItem('PokemonApiRanking', JSON.stringify(PokemonApiRanking)); //save in localStorage
}

export const checkLocalStorage = () => {
  const PokemonApiRanking = JSON.parse(localStorage.getItem('PokemonApiRanking')) || {
    mode1: {
      name : "Whos that pokemon?",
      scores : []
    },
    mode2: {
      name : "What it looks like?",
      scores : []
    },
    mode3: {
      name : "Guess the type!",
      scores : []
    }
  }
  return PokemonApiRanking;
}