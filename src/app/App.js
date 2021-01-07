import { showStartingPage } from './showStartingPage.js';
import { showAPopUpScreen } from './showAPopUpScreen';
import { addHelpScreenTemplate } from "./addHelpScreenTemplate.js";
import { renderQuizPage } from './quizPage.js'
import { WHO_IS_THAT_POKEMON, WHAT_DOES_THIS_POKEMON_LOOK_LIKE } from "../service/modes.js"

export const App = ({options}) => { 

   let SELECTED_MODE = WHO_IS_THAT_POKEMON;

   showStartingPage();
   addHelpScreenTemplate();

   //add event listener to the help button 
   document.querySelector('#helpOption').addEventListener('click', () => {
      showAPopUpScreen(document.querySelector('#helpScreen'))
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
   document.querySelector('#guessTheTypeOption').addEventListener('click',()=>{
      if(style.display=='none'||help.style.display == 'none')
         console.log("Guess the type!");
   });
   //ad event listener to the leaderboard button
   document.querySelector('#leaderboard').addEventListener('click',()=>{
      if(style.display=='none'||help.style.display == 'none')
         console.log("Hall of Fame");
   });

   // start the game
   document.querySelector("#startGameButton").addEventListener("click", () => renderQuizPage(SELECTED_MODE));
}

