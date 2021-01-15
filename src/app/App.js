import { showStartingPage } from './showStartingPage.js';
import { showAPopUpScreen } from './showAPopUpScreen';
import { renderQuizPage } from './quizPage.js';
import { WHO_IS_THAT_POKEMON, WHAT_DOES_THIS_POKEMON_LOOK_LIKE, WHO_IS_THAT_POKEMON_HARD_MODE } from "../service/modes.js";

export const App = ({options}) => { 

   let SELECTED_MODE = WHO_IS_THAT_POKEMON;

   showStartingPage();

   //add event listener to the help button 
   document.querySelector('#helpOption').addEventListener('click', () => {
      showAPopUpScreen(document.querySelector('#helpScreen'), 'initial');
   });

   //add event listener to the select mode menu button 
   const help=document.querySelector('#helpScreen')
   const style = getComputedStyle(help);
   document.querySelector('#whoIsThatPokemonOption').addEventListener('click',()=>{
      if(style.display=='none'||help.style.display == 'none')
         console.log("Who's that Pokemon?");
         SELECTED_MODE = WHO_IS_THAT_POKEMON;
   });
   document.querySelector('#whatItLooksLikeOption').addEventListener('click',()=>{
      if(style.display=='none'||help.style.display == 'none')
         console.log("What it looks like?");
         SELECTED_MODE = WHAT_DOES_THIS_POKEMON_LOOK_LIKE;
   });
   document.querySelector('#whoIsThatPokemonHardModeOption').addEventListener('click',()=>{
      if(style.display=='none'||help.style.display == 'none')
         console.log("Who's that Pokemon? (hard mode)");
         SELECTED_MODE = WHO_IS_THAT_POKEMON_HARD_MODE;
   });

   //ad event listener to the leaderboard button
   document.querySelector('#leaderboard').addEventListener('click',()=>{
      if(style.display=='none'||help.style.display == 'none') {
         console.log("Hall of Fame");
         showAPopUpScreen(document.querySelector('#leaderboardScreen'), 'initial')
      }  
   });

   // start the game
   document.querySelector("#startGameButton").addEventListener("click", () => {
      const userName = document.querySelector('#enterYourNameInput').value;
      renderQuizPage(SELECTED_MODE, userName, options.quizMaxTime)
   });
}

