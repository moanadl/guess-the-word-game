// ----- Creating constants for the HTML elements -----
const hearts = document.querySelector('.hearts');
const gameOver = document.querySelector('.game-over');
const wordCode = document.querySelector('.word-code');
const infoArea = document.querySelector('.info-area');
const input = document.querySelector('.input-letter');

// ----- Main function of the game -----
function startGame (secretWord) {

    // ----- Calls the function to render the game (life, score, input and letters) -----
    renderGame(secretWord);

    // ----- Creating an array to store the <p> elements created to display the letters guessed and to be guessed -----
    const guessedLetters = document.querySelectorAll('.guessed-letters')

    // ----- Creating an array to control if there is still letters to be guessed -----
    let arrayOfWord = [];

    // ----- Control variable -----
    let letters = 0;

    // ----- For every letter of the secret word the arrayOfWord will have a element in the array -----
    // ----- Those elements will be replaced by the letters guessed throughout the game -----
    // ----- If the 'letter' is '-', it won't be considered as an array element -----
    for (let i = 0; i < secretWord.length; i++) {

        if (secretWord[i] != '-') {
            arrayOfWord[letters] = ''
            letters++
        } 

    }

    // ----- Creating the constant with the heart (life) element -----
    const guessesLeft = document.querySelectorAll('.guesses-left');

    // ----- Control variables of the guesses left -----
    let errors = 0;
    let halfHeartCount = 0;
    let emptyHeartCount = 1;
    
    // ----- On input event for the input calling the function "guessTheLetters" -----
    input.oninput = guessTheLetters;

    // ----- This function will verify which letters have been guessed and will control the guesses left -----
    function guessTheLetters () {

        // ----- Calls the function that will control if the input is a letter -----
        validateInput(input, infoArea, arrayOfWord);

        // ----- The games only continues (or starts) if 'arrayOfWords' still has empty elements in it -----
        // ----- Once all the elements are replaced by letters of the secret word the game finishes and the user wins -----
        if (arrayOfWord.includes('') && input.value != '') {

            // ----- Does the secret word includes the input letter? -----
            if (secretWord.includes(input.value.toUpperCase())) {
                
                infoArea.innerHTML = `<p class='info-text'>Jackpot! The letter <span class='info-letter'>${input.value.toUpperCase()}</span> is in the secret word!</p>`

                // ----- Render the letter guessed on the screen in the right position -----
                // ----- Replaces the empty element of the arrayOfWord by the guessed letter -----
                for (let i = 0; i <= secretWord.length; i++) {

                    if (input.value.toUpperCase() === secretWord[i]){
                        guessedLetters[i].innerHTML = input.value;
                        arrayOfWord[i] = input.value;
                    }

                }

                // ----- All elements of 'arrayOfWord' match their correspondent letter of the secret word? -----
                // ----- If yes, game over and the user wins! -----
                if (arrayOfWord.toString().toUpperCase().replace(/,/g, "") === secretWord.replace(/-/g, "")) {
                    wordCode.innerHTML = `<p class='info-text'>Congrats! You guessed the word!<br><br>
                    The secret word was <span class='info-letter'>${secretWord.replace(/-/g, " ")}</span>`;
                    input.value = '';
                    input.disabled = true;
                }

            // ----- If the secret word does not include the input letter, the code enters in the guesses control -----
            // ----- Each chosen level has a number of guesses (10, 5 or 3) -----
            } else {
                // --- Medium: 5 guesses ---
                if (chosenLevel === 'Medium') {

                    // ----- If the user has already tried 4 wrong letters, this is the last one and the game is over -----
                    if (errors >= 4) {

                        // ----- The user already tried this letter? -----
                        // ----- Every wrong guess calls the function 'letterBox' to store the letters the have already been tried -----
                        if (box.includes(input.value.toUpperCase())) {
                            infoArea.innerHTML = `<p class='info-text'>You've already tried the letter <span class='Area-letter'>${input.value.toUpperCase()}!</span>!!</p>`
                        } else {
                            guessesLeft[errors].src = './images/empty-heart-life.png';
                            infoArea.innerHTML = `<p class='info-text'>Too bad! The letter <span class='info-letter'>${input.value.toUpperCase()}</span> is not in the secret word!</p>`
                            gameOver.innerHTML = 'Game Over!';
                            lettersBox();
                            input.value = '';
                            input.disabled = true;
                            wordCode.innerHTML = 'Game over! You lost! =(';
                        }

                    // ----- If the user still has chances left... -----
                    } else {

                        if (box.includes(input.value.toUpperCase())) {
                            infoArea.innerHTML = `<p class='info-text'>You've already tried the letter <span class='info-letter'>${input.value.toUpperCase()}</span>!!</p>`
                        } else {
                            infoArea.innerHTML = `<p class='info-text'>Too bad! The letter <span class='info-letter'>${input.value.toUpperCase()}</span> is not in the secret word!</p>`
                            guessesLeft[errors].src = './images/empty-heart-life.png';
                            lettersBox();
                            errors++;
                        }

                    }
                // --- Easy: 10 guesses ---
                } else if (chosenLevel === 'Easy') {

                    if (errors >= 9) {

                        if (box.includes(input.value.toUpperCase())) {
                            infoArea.innerHTML = `<p class='info-text'>You've already tried the letter <span class='Area-letter'>${input.value.toUpperCase()}!</span>!!</p>`
                        } else {
                            guessesLeft[errors - emptyHeartCount].src = './images/empty-heart-life.png';
                            infoArea.innerHTML = `<p class='info-text'>Too bad! The letter <span class='info-letter'>${input.value.toUpperCase()}</span> is not in the secret word!</p>`
                            gameOver.innerHTML = 'Game Over!';
                            lettersBox();
                            input.value = '';
                            input.disabled = true;
                            wordCode.innerHTML = 'Game over! You lost! =(';
                        }

                    } else {

                        if (box.includes(input.value.toUpperCase())) {
                            infoArea.innerHTML = `<p class='info-text'>You've already tried the letter <span class='Area-letter'>${input.value.toUpperCase()}!</span>!!</p>`
                        } else {
                            infoArea.innerHTML = `<p class='info-text'>Too bad! The letter <span class='info-letter'>${input.value.toUpperCase()}</span> is not in the secret word!</p>`
                            if (errors % 2 === 0) {
                            guessesLeft[errors - halfHeartCount].src = './images/half-heart-life.png';
                            lettersBox();
                            errors++;
                            halfHeartCount = halfHeartCount + 1;
                            } else {
                                guessesLeft[errors - emptyHeartCount].src = './images/empty-heart-life.png';
                                lettersBox();
                                errors++;
                                emptyHeartCount = emptyHeartCount + 1;
                            }
                        }

                    }
                // --- Hard: 3 guesses ---
                } else if (chosenLevel === 'Hard') {

                        if (errors >= 2) {
        
                            if (box.includes(input.value.toUpperCase())) {
                                infoArea.innerHTML = `<p class='info-text'>Você já tentou a letra <span class='info-letter'>${input.value.toUpperCase()}</span>!!</p>`
                            } else {
                                guessesLeft[errors].src = './images/empty-heart-life.png';
                                infoArea.innerHTML = `<p class='info-text'>Too bad! The letter <span class='info-letter'>${input.value.toUpperCase()}</span> is not in the secret word!</p>`
                                gameOver.innerHTML = 'Game Over!';
                                input.value = '';
                                input.disabled = true;
                                wordCode.innerHTML = 'Game over! You lost! =(';
                            }
        
                        } else {
        
                            if (box.includes(input.value.toUpperCase())) {
                                infoArea.innerHTML = `<p class='info-text'>Você já tentou a letra <span class='info-letter'>${input.value.toUpperCase()}</span>!!</p>`
                            } else {
                                infoArea.innerHTML = `<p class='info-text'>Too bad! The letter <span class='info-letter'>${input.value.toUpperCase()}</span> is not in the secret word!</p>`
                                guessesLeft[errors].src = './images/empty-heart-life.png';
                                lettersBox();
                                errors++;
                            }
        
                        }
                }
            }

        }

        input.value = '';
    }

}



/*
    1. levelChoice;
    2. themeChoice;
    3. sortWord;
    4. script;
    5. renderGame;
    6. validateInput;
*/
