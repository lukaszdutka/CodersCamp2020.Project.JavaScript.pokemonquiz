export const showAPopUpScreen = (screenToDisplay) => {
    screenToDisplay.style.display = 'initial';
    // add blur to the rest of the page
    document.querySelectorAll('.desableWithPopUpScreen').forEach(e => e.style.filter = 'blur(4px)');
    // add event listener to the exit button;
    screenToDisplay.querySelector('.exitPopUpScreen').addEventListener('click', () => {
       //hide the screen
       screenToDisplay.style.display = 'none';
       // remove the blur
       document.querySelectorAll('.desableWithPopUpScreen').forEach(e => e.style.filter = 'blur(0)');
    });
 };