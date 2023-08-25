// ----- Creating constant for speak button -----
const speakButton = document.querySelector('.web-speech-button')

// ----- To allow for both prefixed properties and unprefixed versions that be supported in future -----
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;

// ----- Instance to control de speech recognition for the site -----
const guessRecognition = new SpeechRecognition();

// ----- Defining the language of the recognition -----
guessRecognition.lang = 'en-US';

// ----- The speech recognition will start when the button "speak" is clicked (script.js) -----

// ----- An 'result' event will be fired when the speech recognition service return a result. This event will call 'onSpeak' -----
guessRecognition.addEventListener('result', onSpeak);

// ----- It will capture the sentence said by the user (letter + 'a', 'b', 'c'...) and store in the const 'guess' -----
// ----- Then it will assign the 8th element of the string (just the letter) to the input value -----
function onSpeak (e) {
    const guess = e.results[0][0].transcript;

    if (Object.keys(guess).length != 8 || !guess) {
        speakButton.innerHTML = 'Speak';
        infoArea.innerHTML = `<p class='info-text'>Sorry! I didn't get that. Please try again!</p>`
        speakButton.classList.toggle('speak-active');
        return
    } else {
        input.value = guess[7].toUpperCase();
    }
}
