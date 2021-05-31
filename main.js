function getRandomInt(max) {
    return Math.ceil(Math.random() * max);
}

const myNum = getRandomInt(100);
console.log(myNum);

const button = document.querySelector('button');
const result = document.querySelector('.result');
button.onclick = function() {
    result.textContent = myNum;
}