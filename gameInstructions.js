// ----- Creating constants for the HTML elements -----
const instructionsButton = document.querySelector('.instructions-button');
const closeButton = document.querySelector('.instructions-close-button');
const instructionsArea = document.querySelector('.game-instructions');

// Click events for the instruction button and for the close instruction button calling 'openInstructions' and 'closeInstructions' -----
instructionsButton.onclick = openInstructions;
closeButton.onclick = closeInstructions;

// ----- Removes the class 'close-instructions' from the HTML element and displays the instruction box -----
function openInstructions () {

    instructionsArea.classList.remove('close-instructions');

}

// ----- Adds the class 'close-instructions' from the HTML element and the 'display: block' is now 'display: none' -----
function closeInstructions () {

    instructionsArea.classList.add('close-instructions');
    
}