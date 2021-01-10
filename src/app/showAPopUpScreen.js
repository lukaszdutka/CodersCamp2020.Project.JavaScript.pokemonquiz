export const showAPopUpScreen = (screenToDisplay) => {
   // display the help screen
    screenToDisplay.style.display = 'initial';
    // add blur to the rest of the page
    document.querySelectorAll('.disableWithPopUpScreen').forEach(e => e.style.filter = 'blur(4px)');
   // function which gets called when the exit button is clicked
   if (screenToDisplay.querySelector('.exitPopUpScreen')) {
        const exitPopUpFunction = () => {
            //hide the screen
            screenToDisplay.style.display = 'none';
            // remove the blur
            document.querySelectorAll('.disableWithPopUpScreen').forEach(e => e.style.filter = 'blur(0)');
            // remove the event listener
            screenToDisplay.querySelector('.exitPopUpScreen').removeEventListener('click', exitPopUpFunction);
    };
    // add event listener to the exit button;
    screenToDisplay.querySelector('.exitPopUpScreen').addEventListener('click', exitPopUpFunction);
    }
 };