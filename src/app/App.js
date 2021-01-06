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
      answersNumber: 4,
      totalQuestions: 20
  }

   const startBtn = document.querySelector("#startGameButton");
   startBtn.addEventListener("click", function(){renderQuizPage(mode)});
}


