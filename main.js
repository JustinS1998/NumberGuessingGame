function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

const randomNumber = getRandomInt(100);

const result = document.querySelector('.result');
const button = document.querySelector('button');

function checkGuess() {
    alert('Placeholder');
}

button.addEventListener('click', checkGuess);