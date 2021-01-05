export const addHelpScreenTemplate = () => {
    const appScreen = document.querySelector('#pokequiz-app');
    const helpScreenTemplate = 
   `<div class='popUpScreen' id='helpScreen'>
        <div class='popUpTitleArea'>
        <h1 class='popUpTitle'>HELP</h1>
        <p class='exitPopUpScreen'>&#10005;</p>
        </div>
        <ul class='mainHelpTextSection'>
            <li><span class='helpTitle'>Who's that pokemon?</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia, arcu vel accumsan rhoncus, sapien dolor commodo purus, gravida rhoncus massa leo eu quam. Etiam pulvinar bibendum gravida. Aliquam eu augue arcu. Sed lacus dui, tempus sed libero non, posuere mattis ex. Suspendisse dictum metus et laoreet ultricies. Praesent ac pharetra risus. Maecenas risus diam, eleifend non dolor id, tristique facilisis urna.</li>
            <li><span class='helpTitle'>What it looks like?</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia, arcu vel accumsan rhoncus, sapien dolor commodo purus, gravida rhoncus massa leo eu quam. Etiam pulvinar bibendum gravida. Aliquam eu augue arcu. Sed lacus dui, tempus sed libero non, posuere mattis ex. Suspendisse dictum metus et laoreet ultricies. Praesent ac pharetra risus. Maecenas risus diam, eleifend non dolor id, tristique facilisis urna.</li>
            <li><span class='helpTitle'>Guess the type!</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia, arcu vel accumsan rhoncus, sapien dolor commodo purus, gravida rhoncus massa leo eu quam. Etiam pulvinar bibendum gravida. Aliquam eu augue arcu. Sed lacus dui, tempus sed libero non, posuere mattis ex. Suspendisse dictum metus et laoreet ultricies. Praesent ac pharetra risus. Maecenas risus diam, eleifend non dolor id, tristique facilisis urna.</li>
        </ul>
        <div class='popUpImgArea'>
            <img src='../static/assets/ui/pikachu2.png' alt='Pikachu' id='littlePikachu' class='popUpImg'/>
        </div>
    </div>`
    appScreen.innerHTML += helpScreenTemplate;
}