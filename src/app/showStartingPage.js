import { START_PAGE_STYLES } from "./appSettings.js"

export const showStartingPage = () => {
    const appScreen = document.querySelector('#pokequiz-app');
    appScreen.classList.add(START_PAGE_STYLES.startPageClass)
    const startingPageTemplate = 
    `<div id="headerWithLogo" class="firstColumn spanInPortrait disableWithPopUpScreen">
        <img src="./static/assets/ui/logo.png" alt='Pokemon' id='pokemonLogo'/>
        <p id='quizLogo' class='fancyFontStyle'>Quiz</p>
    </div>

    <ul id="selectModeMenu" class="firstColumn spanInPortrait disableWithPopUpScreen">
        <li id='whoIsThatPokemonOption' class="buttonWithText">Who's that pokemon?</li>
        <li id='whatItLooksLikeOption' class="buttonWithText">What it looks like?</li>
        <li id='guessTheTypeOption' class="buttonWithText">Guess the type!</li>
    </ul>

    <div id='enterNameAndPlayMenu' class="secondColumn spanInPortrait disableWithPopUpScreen">
        <p id='enterYourName' class='fancyFontStyle'>ENTER YOUR NAME</p>
        <div id='enterYourNameArea'>
            <img src='https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png' alt='playerIcon' id='playerIcon'/>
            <input type='text' id='enterYourNameInput'>
        </div>
    </div>

    <div id='startGame' class="secondColumn spanInPortrait disableWithPopUpScreen">
        <input type='button' id='startGameButton' class="buttonWithText" value='PLAY'>
    </div>

    <ul class='bottomOfThePageOptions firstColumn disableWithPopUpScreen'>
        <li id='helpOption'>?</li>
        <li id='leaderboard'><i class="fa fa-trophy"></i></li>
    </ul>

    <img src='./static/assets/ui/pikach1.png' alt='Pikachu' id='pikachuImg' class="secondColumn disableWithPopUpScreen"/>
    `
    appScreen.innerHTML = startingPageTemplate;

}