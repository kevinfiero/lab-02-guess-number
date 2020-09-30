
const startButton = document.getElementById('start-button');
const inputBox = document.getElementById('input-box');
const resetButton = document.getElementById('reset-button');
const guessButton = document.getElementById('guess-button');
const guessFeedback = document.getElementById('guess-feedback');
const guessCounterDiv = document.getElementById('guess-counter');
const quad3Div = document.getElementById('quad3');
const quad4Div = document.getElementById('quad4');
const topText = document.getElementById('text-top');
const bottomText = document.getElementById('text-bottom');

let svgImage = document.getElementById('svg');
let targetGuess;
let guessCounter = 0;

export function compareNumbers(){
    let userGuess = Number(inputBox.value);
    guessCounter++;
    guessCounterDiv.textContent = 4 - guessCounter; 
    if (userGuess === targetGuess) {
        success();
    } else if (userGuess > targetGuess){
        svgImage.src = 'assets/arrow.svg';
        svgImage.style.transform = 'rotate(180deg)';
        guessFeedback.textContent = 'You need to guess lower!';
    } else if (userGuess < targetGuess){
        svgImage.src = 'assets/arrow.svg';
        svgImage.style.transform = 'rotate(0deg)';
        guessFeedback.textContent = 'You need to guess higher!';
    }
    if (guessCounter === 4){
        if (!(userGuess === targetGuess)) {
            fail();
        } else {
            success();
        }
        return;
    }
}

export function startGame() {
    targetGuess = Math.floor(Math.random() * 20) + 1;
    inputBox.style.visibility = 'visible';
    guessButton.style.visibility = 'visible';
    guessFeedback.style.visibility = 'visible';
    startButton.style.visibility = 'hidden';
    quad3Div.style.visibility = 'visible';
    quad4Div.style.visibility = 'visible';
    guessFeedback.textContent = 'Guess a number!';
    return;
}

export function resetGame() {
    svgImage.src = 'assets/question.svg';
    svgImage.style.transform = 'rotate(0deg)';
    guessCounter = 0;
    targetGuess = 0;
    guessCounterDiv.textContent = 4;
    inputBox.value = '';
    inputBox.style.visibility = 'hidden';
    guessButton.style.visibility = 'hidden';
    guessFeedback.style.visibility = 'hidden';
    startButton.style.visibility = 'visible';
    resetButton.style.visibility = 'hidden';
    guessFeedback.textContent = 'Guess a number!';
    return;
}


function success(){
    svgImage.src = 'assets/star.svg';
    svgImage.style.transform = 'rotate(0deg)';
    guessFeedback.textContent = `Congrats! You guessed the correct value of ${targetGuess}!`;
    guessButton.style.visibility = 'hidden';
    inputBox.style.visibility = 'hidden';
    resetButton.style.visibility = 'visible';
    topText.textContent = 'You guessed correctly with';
    guessCounterDiv.textContent = guessCounter;
    bottomText.textContent = 'attempts!';
    return;
}

function fail(){
    svgImage.src = 'assets/wrong.svg';
    svgImage.style.transform = 'rotate(0deg)';
    guessFeedback.textContent = `Sorry, you did not guess the correct value of ${targetGuess}.`;
    guessButton.style.visibility = 'hidden';
    inputBox.style.visibility = 'hidden';
    resetButton.style.visibility = 'visible';
    return;
}