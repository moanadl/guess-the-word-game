// ----- The game only accepts letters as input. Special characters, letters and space are not accepted and the user will be alerted -----
function validateInput (input, infoArea, arrayOfWord) {

    // ----- Numbers and special characters are not valid -----
    if (input.value.match(/[\!\@\#\$\%\^\&\*\)\(\+\=\.\,\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-\/]/g) || input.value.match(/[0-9]/g)) {
        infoArea.innerHTML = `<p class='info-text'>The character <span class='info-letter'>${input.value}</span> is not valid!</p>`;
        input.value = '';
        return
    }

    // ----- Space is not valid -----
    if (input.value == ' ') {
        infoArea.innerHTML = `<p class='info-text'>Invalid character!</p>`;
        input.value = '';
        return                  
    }

    // ----- Verifies if the letter has already been tried -----
    if (box.toString().toUpperCase().includes(input.value.toUpperCase()) || arrayOfWord.toString().toUpperCase().includes(input.value.toUpperCase())) {
        infoArea.innerHTML = `<p class='info-text'>You've already tried the letter <span class='info-letter'>${input.value.toUpperCase()}!</span></p>`;
        input.value = '';
        return
    }

}