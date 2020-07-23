/*
GAME FUNCTIONS:
- Players must guess a number between 0 and 10
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loss
- Let player choose to play again
*/

const form = document.querySelector('form');
const playerInput = document.querySelector('#guess-input');
const guessButton = document.querySelector('#guess-value');
const minNumberSpan = document.querySelector('.min-num');
const maxNumberSpan = document.querySelector('.max-num');
const results = document.querySelector('.message');

const minNumber = 0;
const maxNumber = 10;
let numberToGuess;
let guessCount = 3;

// Init game values
gameSetup();

form.addEventListener('submit', game);

// When game ends, we add play-again to guess button. So when we click the 'Play again' button, this reloads the window
form.addEventListener('mousedown', function (e) {
  if (e.target.className === 'play-again') {
    window.location.reload();
  }
});

function gameSetup(e) {
  numberToGuess = Math.floor(Math.random() * 10 + 1);
  minNumberSpan.textContent = minNumber;
  maxNumberSpan.textContent = maxNumber;
  results.textContent = '';
  results.style.color = 'black';
}

function game(e) {
  e.preventDefault();

  guessCount -= 1;

  // Get the player's guess
  const guess = Number(playerInput.value);
  if (!validateInput(guess)) {
    alert(`Please enter a number between ${minNumber} and ${maxNumber}`);
    playerInput.value = '';
    return;
  }

  if (guess === numberToGuess) {
    endGame(true, `${guess} is correct!`);
  } else {
    if (guessCount > 0) {
      setMessage(
        `Sorry, ${guess} was not the number. You have ${guessCount} ${
          guessCount === 1 ? 'guess' : 'guesses'
        } left`,
        'red'
      );
    } else {
      endGame(
        false,
        `Game over! You are out of guesses. The number was ${numberToGuess}`
      );
    }
  }

  playerInput.value = '';
}

function validateInput(guess) {
  if (guess > maxNumber || guess < minNumber) {
    return false;
  } else {
    return true;
  }
}

function endGame(won, msg) {
  console.assert('Game over');
  playerInput.disabled = true;
  if (won) {
    setMessage(msg, 'green');
  } else {
    setMessage(msg, 'red');
  }

  guessButton.value = 'Play again';
  guessButton.className += 'play-again';
}

function setMessage(msg, color) {
  results.style.color = color;
  results.textContent = msg;
}
