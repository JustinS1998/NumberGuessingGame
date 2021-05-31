let randomNumber = Math.floor(Math.random() * 100) + 1;

const result = document.querySelector('.result');
const button = document.querySelector('button');
const guessField = document.querySelector('.guessField');

function checkGuess() {
    let guess = Number(guessField.value);
    if (guess === randomNumber) {
        result.textContent = 'Correct';
    } else if (guess > randomNumber) {
        result.textContent = 'Too high';
    } else if (guess < randomNumber) {
        result.textContent = 'Too low';
    }
}

button.addEventListener('click', checkGuess);