import { showStartingPage } from './showStartingPage.js';
import { showAPopUpScreen } from './showAPopUpScreen';
import { renderQuizPage } from './quizPage.js'
import { WHO_IS_THAT_POKEMON, WHAT_DOES_THIS_POKEMON_LOOK_LIKE } from "../service/modes.js"

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
   
   //checked box colors
   const checkedFont="#3762AC"
   const bgBoxColor="#FFCB05"


   const changeColorOfClickedButton = (currQuerySelector) => {
      const currSelected = document.querySelector(currQuerySelector)
      const whoIsThatPokemonOption = document.querySelector('#whoIsThatPokemonOption')
      const whatItLooksLikeOption = document.querySelector('#whatItLooksLikeOption')
      const guessTheTypeOption = document.querySelector('#guessTheTypeOption')

      whoIsThatPokemonOption.style.backgroundColor=checkedFont
      whoIsThatPokemonOption.style.color=bgBoxColor
      whatItLooksLikeOption.style.backgroundColor=checkedFont
      whatItLooksLikeOption.style.color=bgBoxColor
      guessTheTypeOption.style.backgroundColor=checkedFont
      guessTheTypeOption.style.color=bgBoxColor

      currSelected.style.backgroundColor=bgBoxColor
      currSelected.style.color=checkedFont
    }
    
   document.querySelector('#whoIsThatPokemonOption').addEventListener('click',()=>{
      if(style.display=='none'||help.style.display == 'none')
         console.log("Who's that Pokemon?");
         SELECTED_MODE = WHO_IS_THAT_POKEMON;
         changeColorOfClickedButton('#whoIsThatPokemonOption')             
   });
   document.querySelector('#whatItLooksLikeOption').addEventListener('click',()=>{
      if(style.display=='none'||help.style.display == 'none')
         console.log("What it looks like?");
         SELECTED_MODE = WHAT_DOES_THIS_POKEMON_LOOK_LIKE;       
         changeColorOfClickedButton('#whatItLooksLikeOption')
   });
   document.querySelector('#guessTheTypeOption').addEventListener('click',()=>{
      if(style.display=='none'||help.style.display == 'none')
         console.log("Guess the type!");        
         changeColorOfClickedButton('#guessTheTypeOption')    
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

