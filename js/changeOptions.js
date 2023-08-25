// ----- Creating constant for the HTML element -----
const changeOptionsButton = document.querySelector('.change-options-button');

// ----- Click event for the button 'Change Options' button calling the function 'changeOptions' -----
changeOptionsButton.onclick = changeOptions;

// ----- Restarts the game to the point of chosing new difficulty levels and new theme -----
function changeOptions () {

    if (input.style.display === 'inline-block') {
        restartButton.style.display = 'none';
        speakButton.style.display = 'none';
    }
    wordCode.innerHTML = '';
    infoArea.innerHTML = '';
    input.disabled = false;
    box = [];
    lettersUsed.innerHTML = ''
    input.style.display = 'none';
    levelChoice.style.display = 'block';
    nextButton.style.display = 'inline-block';
    choiceControl = false;

    levelButton.forEach (e => {
        if(e.className.includes('selected')) {
            e.classList.toggle('selected')
        }
    })

    themeButton.forEach (e => {
        if(e.className.includes('selected')) {
            e.classList.toggle('selected')
        }
    })
    
    levelButton.forEach(e => e.onclick = chooseLevel);
}