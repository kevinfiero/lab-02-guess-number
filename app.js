import { resetGame, startGame, compareNumbers } from './utils.js';

const startButton = document.getElementById('start-button');
const resetButton = document.getElementById('reset-button');
const guessButton = document.getElementById('guess-button');


guessButton.addEventListener('click', () => {
    compareNumbers();

});

startButton.addEventListener('click', () => {
    startGame();

});

resetButton.addEventListener('click', () => {
    resetGame();
});

