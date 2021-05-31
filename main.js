let randomNumber = Math.floor(Math.random() * 100) + 1;

const result = document.querySelector('.result');
const button = document.querySelector('button');
const guessField = document.querySelector('.guessField');
const prevGuesses = document.querySelector('.previous-guesses');

let guessCount = 0;
function checkGuess() {
    guessCount++;
    if (guessCount > 10) {
        result.textContent = 'Too many guesses';
        return;
    }

    let guess = Number(guessField.value);
    prevGuesses.textContent += guess + ' ';

    if (guess === randomNumber) {
        result.textContent = 'Correct';
    } else if (guess > randomNumber) {
        result.textContent = 'Too high';
    } else if (guess < randomNumber) {
        result.textContent = 'Too low';
    }
}

button.addEventListener('click', checkGuess);