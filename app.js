import { resetGame, startGame, submitGuess } from './utils.js';

const startButton = document.getElementById('start-button');
const resetButton = document.getElementById('reset-button');
const guessButton = document.getElementById('guess-button');


guessButton.addEventListener('click', () => {submitGuess();});

startButton.addEventListener('click', () => {startGame();});

resetButton.addEventListener('click', () => {resetGame();});

