// ----- Creating constants for the HTML elements -----
const lettersUsed = document.querySelector('.letters-used');

// ----- Creating an array to store the wrong letters that have already been tried -----
let box = [];

// ----- Every new wrong letter is stored in the array 'box' and displayed on the screen for the user -----
function lettersBox () {
    if (box.includes(input.value.toUpperCase())) {
        return
    } else {
        if (box[0] === '') {
            box.push(input.value.toUpperCase());
            box.shift();
            lettersUsed.innerHTML = `${box}`
        } else {
        box.push(input.value.toUpperCase());
        lettersUsed.innerHTML = `${box}`
        }
    }

}