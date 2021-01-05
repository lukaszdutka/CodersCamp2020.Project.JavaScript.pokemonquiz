export const showStartingPage = () => {
    const appScreen = document.querySelector('#pokequiz-app');
    const startingPageTemplate = 
    `<div id="headerWithLogo" class="firstColumn spanInPortrait desableWithPopUpScreen">
        <img src="./static/assets/ui/logo.png" alt='Pokemon' id='pokemonLogo'/>
        <p id='quizLogo' class='fancyFontStyle'>Quiz</p>
    </div>

    <ul id="selectModeMenu" class="firstColumn spanInPortrait desableWithPopUpScreen">
        <li id='whoIsThatPokemonOption' class="buttonWithText">Who's that pokemon?</li>
        <li id='whatItLooksLikeOption' class="buttonWithText">What it looks like?</li>
        <li id='guessTheTypeOption' class="buttonWithText">Guess the type!</li>
    </ul>

    <div id='enterNameAndPlayMenu' class="secondColumn spanInPortrait desableWithPopUpScreen">
        <p id='enterYourName' class='fancyFontStyle'>ENTER YOUR NAME</p>
        <div id='enterYourNameArea'>
            <img src='https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png' alt='playerIcon' id='playerIcon'/>
            <input type='text' id='enterYourNameInput'>
        </div>
    </div>

    <div id='startGame' class="secondColumn spanInPortrait desableWithPopUpScreen">
        <input type='button' id='startGameButton' class="buttonWithText" value='PLAY'>
    </div>

    <ul class='bottomOfThePageOptions firstColumn desableWithPopUpScreen'>
        <li id='helpOption'>?</li>
        <li id='leaderboard'><i class="fa fa-trophy"></i></li>
    </ul>

    <img src='./static/assets/ui/pikach1.png' alt='Pikachu' id='pikachuImg' class="secondColumn desableWithPopUpScreen"/>
    `
    appScreen.innerHTML = startingPageTemplate;
}