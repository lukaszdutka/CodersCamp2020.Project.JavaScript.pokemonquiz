let user =  {
  name: 'Player1',
  score: 15,
  timeInSeconds: 93
};
// check localStorage for current Top scores
// if empty create object with objects mode1, mode2, and mode3
// PokemonApiRanking - data from/to localStorage
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
};

export const rankingService = (mode, score) => {
    
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
      trow `Wrong mode`;
  }
  currentMode.push(user);
  currentMode.sort( (a,b) => b.timeInSeconds - a.timeInSeconds );
  currentMode.sort( (a,b) => b.score - a.score );
  if(currentMode.length > 3) {
    currentMode.length = 3; 
  }

  printTopUsers(currentMode, htmlList); //print to HTML
  localStorage.setItem('PokemonApiRanking', JSON.stringify(PokemonApiRanking)); //save in localStorage
}

// ^ powyższa funkcjia dodawanie wyniku do PokemonApiRanking ver.1 - nie korzysta z argumentu score (pod funkcja printTopUsers wersja druga dla rankingService)

// PRINT TO HTML // only print without adding player
// htmlList - html ul (or whatever) where we want to put Top scores
// users - array with top players (scores)  
export const printTopUsers = (users = [], htmlList) => {
  htmlList.innerHTML = users.map((user, i) => {
    return `
      <li>
        <label for="item${i}"><strong>${user.name}</strong>: ${user.score}points in ${user.timeInSeconds}seconds</label>  
      </li>
    `;
  }).join('');
}

//funkcjia dodawanie wyniku do PokemonApiRanking ver.2 - korzysta z argumentu score jeśli w Top jest już 3 graczy
export const rankingServiceV2 = (mode, score) => {
  let currentMode; // path to scores array for current mode
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
      trow `Wrong mode`;
  }
  if(currentMode.length < 3){
    currentMode.push(user);
    currentMode.sort( (a,b) => b.timeInSeconds - a.timeInSeconds );
    currentMode.sort( (a,b) => b.score - a.score );
  } else {
    for(let i = 0; i < 3; i++) {
      if(score >= currentMode[i].score) {
        currentMode.push(user);
        currentMode.sort( (a,b) => b.timeInSeconds - a.timeInSeconds );
        currentMode.sort( (a,b) => b.score - a.score );
        currentMode.length = 3;
      } 
    }
  }
  
  printTopUsers(currentMode, htmlList); //print to HTML
  localStorage.setItem('PokemonApiRanking', JSON.stringify(PokemonApiRanking)); //save in localStorage
}