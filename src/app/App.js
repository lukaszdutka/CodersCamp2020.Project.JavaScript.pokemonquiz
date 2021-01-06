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
   //add event listener to the select mode menu button 
   const help=document.querySelector('#helpScreen')
   const style = getComputedStyle(help);
   document.querySelector('#whoIsThatPokemonOption').addEventListener('click',()=>{
      if(style.display=='none'||document.querySelector('#helpScreen').style.display == 'none')
         console.log("Who's that Pokemon?");
   });
   document.querySelector('#whatItLooksLikeOption').addEventListener('click',()=>{
      if(style.display=='none'||document.querySelector('#helpScreen').style.display == 'none')
         console.log("What it looks like?");
   });
   document.querySelector('#guessTheTypeOption').addEventListener('click',()=>{
      if(style.display=='none'||document.querySelector('#helpScreen').style.display == 'none')
         console.log("Guess the type!");
   });
   //ad event listener to the leaderboard button
   document.querySelector('#leaderboard').addEventListener('click',()=>{
      if(style.display=='none'||document.querySelector('#helpScreen').style.display == 'none')
         console.log("Hall of Fame");
   });
}


