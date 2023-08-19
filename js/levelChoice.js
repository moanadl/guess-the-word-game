// ----- Creating constants for the HTML elements -----
const levelButton = Array.from(document.querySelectorAll('.level'));
const nextButton = document.querySelector('.next-button');
const levelChoice = document.querySelector('.level-choice');
const startButton = document.querySelector('.start-button');
const themeArea = document.querySelector('.theme-choice');
const levelHeader = document.querySelector('.level-header');


// ----- Click event for every button of level choice calling the function 'chooseLevel' -----
levelButton.forEach(e => e.onclick = chooseLevel);

// ----- Control variables -----
let choiceControl = false;
let chosenLevel;

// ----- If a level is selected, the code does not allow another selection -----
// ----- Whenever a level is selected a class 'selected' (with other style) is added to the element -----
// ----- The chosen level of difficulty is stored in the variable chosenLevel -----
function chooseLevel () {

    if (this.className.includes('selected')) {
        this.classList.toggle('selected');
        choiceControl = false;
        chosenLevel = '';
    } else {

        if (choiceControl) {
            alert('Select only one option!');
            return;
        } else {
            this.classList.toggle('selected');
            choiceControl = true;
            chosenLevel = this.innerHTML;
        }

    }

}

// ----- Click event for the 'next' button calling the function 'nextPreference' -----
nextButton.addEventListener('click', nextPreference);

// ----- The level options dissapears and the theme options appears -----
// ----- The choiceControl variable is reset and the chosen level is displayed on the header -----
// ----- If the user has not selected a level, an alert pops up -----
function nextPreference () {

    if (choiceControl) {
        levelChoice.style.display = 'none';
        nextButton.style.display = 'none';
        themeArea.style.display = 'block';
        startButton.style.display = 'inline-block';
        choiceControl = false;
        levelHeader.innerHTML = `${chosenLevel}`

    } else {
        alert('You should choose a level!');
        return
    }
    
}