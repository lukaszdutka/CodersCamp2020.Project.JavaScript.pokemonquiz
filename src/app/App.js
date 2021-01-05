import { doc } from "prettier";
import { showStartingPage } from './showStartingPage.js';
import { showAPopUpScreen } from './showAPopUpScreen';
import { addHelpScreenTemplate } from "./addHelpScreenTemplate.js";

export const App = ({options}) => { 

   showStartingPage();
   addHelpScreenTemplate();

   //add event listener to the help button 
   document.querySelector('#helpOption').addEventListener('click', () => {
      showAPopUpScreen(document.querySelector('#helpSceen'))
   });
}


