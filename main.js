let randomNumber = Math.floor(Math.random() * 100) + 1;

const result = document.querySelector('.result');
const button = document.querySelector('button');
const guessField = document.querySelector('.guessField');

function checkGuess() {
    result.textContent = Number(guessField.value);
}

button.addEventListener('click', checkGuess);