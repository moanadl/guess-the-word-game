// ----- Creating constant for the HTML element -----
const restartButton = document.querySelector('.restart-button');

// ----- Click event for the button 'restart' calling the function 'restart' -----
restartButton.onclick = restart;

// ----- Restarts the game with full life and a new secret word -----
function restart () {

    input.disabled = false;
    errors = 0;

    if (chosenLevel === 'Hard') {
        hearts.innerHTML = `
        <img src="./images/full-heart-life.png" class="guesses-left"></img>
        <img src="./images/full-heart-life.png" class="guesses-left"></img>
        <img src="./images/full-heart-life.png" class="guesses-left"></img>
        `
    } else {
        hearts.innerHTML = `
        <img src="./images/full-heart-life.png" class="guesses-left"></img>
        <img src="./images/full-heart-life.png" class="guesses-left"></img>
        <img src="./images/full-heart-life.png" class="guesses-left"></img>
        <img src="./images/full-heart-life.png" class="guesses-left"></img>
        <img src="./images/full-heart-life.png" class="guesses-left"></img>
        `
    }

    gameOver.innerHTML = '';
    wordCode.innerHTML = ''
    infoArea.innerHTML = `<p class='info-text'></p>`
    box = [];
    lettersBox();
    sortSecretWord();

    if (speakButton.className.includes('speak-active')) {
        speakButton.innerHTML = 'Speak';
        speakButton.classList.toggle('speak-active');
    }

}