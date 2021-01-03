export const showStartingPage = () => {
    const appScreen = document.querySelector('#pokequiz-app');
    const startingPageTemplate = 
    `<div id="headerWithLogo">
        <img src="https://flarrow.pl/wp-content/uploads/2019/07/International_Pok%C3%A9mon_logo.svg_.png" alt='Pokemon' id='pokemonLogo'/>
        <p id='quizLogo' class='fancyFontStyle'>Quiz</p>
    </div>

        <ul id="selectModeMenu">
            <li id='whoIsThatPokemonOption' class="buttonWithText">Who's that pokemon?</li>
            <li id='whatItLooksLikeOption' class="buttonWithText">What it looks like?</li>
            <li id='guessTheTypeOption' class="buttonWithText">Guess the type!</li>
        </ul>

    <div id='enterNameAndPlayMenu'>
        <p id='enterYourName' class='fancyFontStyle'>ENTER YOUR NAME</p>
        <div id='enterYourNameArea'>
            <img src='https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png' alt='playerIcon' id='playerIcon'/>
            <input type='text' id='enterYourNameInput'>
        </div>
        <input type='button' id='startGameButton' class="buttonWithText" value='PLAY'>
    </div>

    <ul class='bottomOfThePageOptions'>
        <li id='helpOption'>?</li>
        <li id='leaderboard'><i class="fa fa-trophy"></i></li>
    </ul>

    <img src='https://assets.pokemon.com//assets/cms2/img/video-games/_tiles/pokemon-sword-shield/distributions/pikachu/inline/world.png' alt='Pikachu' id='pikachuImg'/>`
    appScreen.innerHTML = startingPageTemplate;
}