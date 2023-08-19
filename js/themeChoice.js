// ----- Creating constants for the HTML elements -----
const themeButton = Array.from(document.querySelectorAll('.theme'));
const themeHeader = document.querySelector('.theme-header');
const chancesSection = document.querySelector('.chances');
const letterBoxSection = document.querySelector('.letter-box');

// ----- Click event for every button of theme choice calling the function 'chooseTheme' -----
themeButton.forEach(e => e.onclick = chooseTheme);

// ----- Control variable -----
let chosenTheme;

// ----- If a theme is selected, the code does not allow another selection -----
// ----- Whenever a theme is selected a class 'selected' (with other style) is added to the element -----
// ----- The chosen theme is stored in the variable chosenTheme -----
function chooseTheme () {

    if (this.className.includes('selected')) {
        this.classList.toggle('selected');
        choiceControl = false;
        chosenTheme = '';
    } else {

        if (choiceControl) {
            alert('Select only one option!');
            return;
        } else {
            this.classList.toggle('selected');
            choiceControl = true;
            chosenTheme = this.innerHTML;
        }
    }
    
}

// ----- Click event for the 'start' button calling the function 'prepareGame' -----
startButton.onclick = prepareGame;

// ----- The theme options dissapears and the game starts to get prepared, calling the function 'sortSecretWord' -----
// ----- The life section (based on the chosen level) and the letter box section are displayed -----
// ----- The chosen theme is displayed on the header -----
// ----- If the user has not selected a theme, an alert pops up -----
function prepareGame () {

    if (choiceControl) {
        themeArea.style.display = 'none';
        startButton.style.display = 'none';
        chancesSection.style.display = 'flex';
        letterBoxSection.style.display = 'flex';
        restartButton.style.display = 'inline-block';
        themeHeader.innerHTML = `${chosenTheme}`;
        sortSecretWord();
    } else {
        alert('You must choose a theme!');
        return
    }

}
