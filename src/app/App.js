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
   
   const changeColorOfClickedButton = (querySelector) => {

      const whoIsThatPokemonOption = document.querySelector('#whatItLooksLikeOption')
      const whatItLooksLikeOption = document.querySelector('#guessTheTypeOption')
      const guessTheTypeOption = document.querySelector('#whoIsThatPokemonOption')

      whoIsThatPokemonOption.style.backgroundColor="#3762AC"
      whoIsThatPokemonOption.style.color="#FFCB05"
      whatItLooksLikeOption.style.backgroundColor="#3762AC"
      whatItLooksLikeOption.style.color="#FFCB05"
      guessTheTypeOption.style.backgroundColor="#3762AC"
      guessTheTypeOption.style.color="#FFCB05"

      querySelector.style.backgroundColor='#FFCB05'
      querySelector.style.color='#3762AC'
    }
    
   document.querySelector('#whoIsThatPokemonOption').addEventListener('click',()=>{
      if(style.display=='none'||help.style.display == 'none')
         console.log("Who's that Pokemon?");
         SELECTED_MODE = WHO_IS_THAT_POKEMON;
         changeColorOfClickedButton(document.querySelector('#whoIsThatPokemonOption'))             
   });
   document.querySelector('#whatItLooksLikeOption').addEventListener('click',()=>{
      if(style.display=='none'||help.style.display == 'none')
         console.log("What it looks like?");
         SELECTED_MODE = WHAT_DOES_THIS_POKEMON_LOOK_LIKE;       
         changeColorOfClickedButton(document.querySelector('#whatItLooksLikeOption'))
   });
   document.querySelector('#guessTheTypeOption').addEventListener('click',()=>{
      if(style.display=='none'||help.style.display == 'none')
         console.log("Guess the type!");        
         changeColorOfClickedButton(document.querySelector('#guessTheTypeOption'))        
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

