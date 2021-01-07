export const addHelpScreenTemplate = () => {
    const appScreen = document.querySelector('#pokequiz-app');
    const helpScreenTemplate = 
   `<div class='popUpScreen' id='helpScreen'>
        <div class='popUpTitleArea'>
        <h1 class='popUpTitle'>HELP</h1>
        <p class='exitPopUpScreen'>&#10005;</p>
        </div>
        <ul class='mainHelpTextSection'>
            <li><span class='helpTitle'>Who's that pokemon?</span> During the quiz, you will have to quess the name of the pokemon displayed in the picture. The game ends after 2 minutes or after you answer 30 questions.</li>
            <li><span class='helpTitle'>What it looks like?</span> During the quiz, you will have to select the correct picture of the pokemon whose name is displayed on the screen. The game ends after 2 minutes or after you answer 30 questions.</li>
            <li><span class='helpTitle'>Guess the type!</span> During the quiz, you will have to select all the pokemon types that the pokemon displayed on the screen belongs to (multiple choice is possible). The game ends after 2 minutes or after you answer 30 questions.</li>
        </ul>
        <div class='popUpImgArea'>
            <img src='../static/assets/ui/pikachu2.png' alt='Pikachu' id='littlePikachu' class='popUpImg'/>
        </div>
    </div>`
    appScreen.innerHTML += helpScreenTemplate;
}