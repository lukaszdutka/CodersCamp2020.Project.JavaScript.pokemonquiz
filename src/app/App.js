import { showStartingPage } from './showStartingPage.js';
import { showAPopUpScreen } from './showAPopUpScreen';
import { renderQuizPage } from './quizPage.js'
import { WHO_IS_THAT_POKEMON, WHAT_DOES_THIS_POKEMON_LOOK_LIKE } from "../service/modes.js"

export const App = ({options}) => { 

   let SELECTED_MODE = WHO_IS_THAT_POKEMON;

   showStartingPage();

   //add event listener to the help button 
   const leader = document.querySelector('#leaderboardScreen');
   const styleL = getComputedStyle(leader);
   document.querySelector('#helpOption').addEventListener('click', () => {
      if(styleL.display=='none')
         showAPopUpScreen(document.querySelector('#helpScreen'), 'initial');
   });

   //add event listener to the select mode menu button 
   const help = document.querySelector('#helpScreen');
   const styleH = getComputedStyle(help);
   document.querySelector('#whoIsThatPokemonOption').addEventListener('click',()=>{
      if(styleH.display=='none' && styleL.display=='none'){
         console.log("Who's that Pokemon?");
         SELECTED_MODE = WHO_IS_THAT_POKEMON; 
      }
   });
   document.querySelector('#whatItLooksLikeOption').addEventListener('click',()=>{
      if(styleH.display=='none' && styleL.display=='none'){
         console.log("What it looks like?");
         SELECTED_MODE = WHAT_DOES_THIS_POKEMON_LOOK_LIKE;
      }
   });
   document.querySelector('#guessTheTypeOption').addEventListener('click',()=>{
      if(styleH.display=='none' && styleL.display=='none'){
         console.log("Guess the type!");
      }
   });

   //ad event listener to the leaderboard button
   document.querySelector('#leaderboard').addEventListener('click',()=>{
      if(styleH.display=='none') {
         console.log("Hall of Fame");
         showAPopUpScreen(document.querySelector('#leaderboardScreen'), 'initial')
      }  
   });

   
   //input (disabled "play" button when input name is empty)
   const inputName = document.querySelector('#enterYourNameInput');
   const playButton = document.querySelector("#startGameButton");
   
   inputName.addEventListener("keyup", () =>{
      if(inputName.value.length > 0){
         playButton.disabled = false;
      }
      else{
         playButton.disabled = true;
      }
   })

   // start the game
   playButton.addEventListener("click", () => {
      const userName = inputName.value;
      renderQuizPage(SELECTED_MODE, userName, options.quizMaxTime)
   });
}

