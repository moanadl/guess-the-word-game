// ----- Resets the section with the letters to be guessed and adds 'blank spaces' for each letter of the secret word defined -----
// ----- If a letter of the word is '-', the content of <p> is empty. If not, the content is ' ' -----
function renderGame (secretWord) {

    wordCode.innerHTML = '';

    for (let i = 0; i < secretWord.length; i++) {
        if (secretWord[i] === '-') {
            wordCode.innerHTML += `
            <p class='guessed-letters space'> </p>`
        } else {
            wordCode.innerHTML += 
            `<p class='guessed-letters'></p>`
        }
    }
    
    // ----- Displays the word code, the section for information about the guesses and the input area on the screen -----
    wordCode.style.display = 'flex';
    infoArea.style.display = 'block';
    input.style.display = 'inline-block';

    // ----- Creates a constant for the <p> element rendered for each letter of the secret word -----
    const lettersSpots = document.querySelectorAll('.guessed-letters');

    // ----- Responsivity of the dimensions of the letters for bigger words -----
    if (secretWord.length <= 19 && secretWord.length >= 6) {

        for ( let i = 0; i < lettersSpots.length; i++) {
            lettersSpots[i].style.height = '50px';
            lettersSpots[i].style.width = '40px';
            lettersSpots[i].style.fontSize = '3em';
        }

    } else if (secretWord.length >= 20) {

        for ( let i = 0; i < lettersSpots.length; i++) {
            lettersSpots[i].style.height = '23px';
            lettersSpots[i].style.width = '15px';
            lettersSpots[i].style.fontSize = '1.3em';

        }
    }

    // ----- Rendering the hearts accordingly to the chosen level (3 or 5) -----
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

}