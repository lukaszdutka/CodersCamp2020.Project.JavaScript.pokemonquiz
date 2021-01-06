import { doc } from "prettier";
import { showStartingPage } from './showStartingPage.js';
import { showAPopUpScreen } from './showAPopUpScreen';
import { addHelpScreenTemplate } from "./addHelpScreenTemplate.js";

export const App = ({options}) => { 

   showStartingPage();
   addHelpScreenTemplate();

   //add event listener to the help button 
   document.querySelector('#helpOption').addEventListener('click', () => {
      showAPopUpScreen(document.querySelector('#helpScreen'))
   });
   document.querySelector('#whoIsThatPokemonOption').addEventListener('click',()=>{
      console.log("Who's that Pokemon?");
   });
   document.querySelector('#whatItLooksLikeOption').addEventListener('click',()=>{
      console.log("What it looks like?");
   });
   document.querySelector('#guessTheTypeOption').addEventListener('click',()=>{
      console.log("Guess the type!");
   });
   document.querySelector('#leaderboard').addEventListener('click',()=>{
      console.log("Hall of Fame");
   });
}


