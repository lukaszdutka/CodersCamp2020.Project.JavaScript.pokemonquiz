export const showStartingPage = () => {
    const appScreen = document.querySelector('#pokequiz-app');
    const startingPageTemplate = 
    `<div id="headerWithLogo">
        <img src="https://static.wikia.nocookie.net/logo-timeline/images/8/8c/Pok%C3%A9mon.svg/revision/latest/scale-to-width-down/300?cb=20181024042907" alt='Pokemon' id='pokemonLogo'/>
        <p id='quizLogo' class='fancyFontStyle'>Quiz</p>
    </div>

        <ul id="selectModeMenu">
            <li id='whoIsThatPokemonOption'>Who's that pokemon?</li>
            <li id='whatItLooksLikeOption'>What it looks like?</li>
            <li id='guessTheTypeOption'>Guess the type!</li>
        </ul>

    <div id='enterNameAndPlayMenu'>
        <p id='enterYourName' class='fancyFontStyle'>ENTER YOUR NAME</p>
        <div id='enterYourNameArea'>
            <img src='https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png' alt='playerIcon' id='playerIcon'/>
            <input type='text' id='enterYourNameInput'>
        </div>
        <input type='button' id='startGameButton' value='PLAY'>
    </div>

    <ul class='bottomOfThePageOptions'>
        <li id='helpOption'>?</li>
        <li id='leaderboard'><img src="https://img.icons8.com/ios/452/crown.png" alt='leaderboard' id='leaderboardImg'/></li>
    </ul>

    <img src='https://static.wikia.nocookie.net/pokemon/images/e/e1/025Pikachu_OS_anime_4.png/revision/latest/scale-to-width-down/1000?cb=20150101100259' alt='Pikachu' id='pikachuImg'/>`
    appScreen.innerHTML = startingPageTemplate;
}