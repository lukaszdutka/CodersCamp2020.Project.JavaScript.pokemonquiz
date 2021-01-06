import { showStartingPage } from './showStartingPage.js';
import { showAPopUpScreen } from './showAPopUpScreen';
import { addHelpScreenTemplate } from "./addHelpScreenTemplate.js";
import { renderQuizPage } from './quizPage.js'

export const App = ({options}) => { 

   showStartingPage();
   addHelpScreenTemplate();

   //add event listener to the help button 
   document.querySelector('#helpOption').addEventListener('click', () => {
      showAPopUpScreen(document.querySelector('#helpScreen'))
   });

   // will be replaced with impoert from service/modes
   const mode = {  
      name: 'WHO_IS_THAT_POKEMON',
      title: "Who's that pokemon?",
      questionType: "image",
      answerType: "text",
      answersNumber: 6,
  }
  const mode2 = {
   name: 'WHAT_DOES_THIS_POKEMON_LOOK_LIKE',
   title: "What does this pokemon look like?",
   questionType: "text",
   answerType: "image",
   answersNumber: 4
}
  document.querySelector("#startGameButton").addEventListener("click", function() {
     renderQuizPage(mode2);
   });

  
}
