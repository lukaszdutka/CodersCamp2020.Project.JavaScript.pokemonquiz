import { START_PAGE_STYLES } from "./appSettings.js"

export const showStartingPage = () => {
    const appScreen = document.querySelector('#pokequiz-app');
    appScreen.classList.add(START_PAGE_STYLES.startPageClass)
    
    // render starting page
    const startingPageTemplate =  document.querySelector('#starting-page-template');
    appScreen.innerHTML = startingPageTemplate.innerHTML;

    // add help modal 
    const helpScreenTemplate = document.querySelector('#help-modal-template'); 
    appScreen.innerHTML += helpScreenTemplate.innerHTML;

}