let resetBtn = document.getElementById('reset');
const randomNum = Math.floor(Math.random() * (100 - 1) + 1);
let turn = 1;
resetBtn.style.display = 'none';

function guessNumber() {
    let guess = document.querySelector("input").value;

    if (isNaN(guess) || isNaN(parseInt(guess))) {
    } else {
        if (guess === randomNum) {
            document.getElementById('wrongCorrect').textContent = 'You discovered the right number! Well done';
            resetBtn.style.display = 'inline';
            document.getElementById('prevGuesses').parentNode.removeChild(prevGuesses);
            document.getElementById('highLow').parentNode.removeChild(highLow);
        } else if (turn < 10) {
            document.getElementById('prevGuesses').textContent = "Previous Guesses: " + turn;
            document.getElementById('wrongCorrect').textContent = 'Wrong, Try Again';
            if (guess < randomNum) {
                document.getElementById('highLow').textContent = 'Number is too low';
            } else if (guess > randomNum) {
                document.getElementById('highLow').textContent = 'Number is too high';
            }
        } else {
            document.getElementById('wrongCorrect').textContent = "You have no more turns, Game over!";
            resetBtn.style.display = 'inline';
            document.getElementById('prevGuesses').parentNode.removeChild(prevGuesses);
            document.getElementById('highLow').textContent = 'The number was ' + randomNum;
            document.getElementById('guessNumBtn').disabled = true;
        }
        turn++;
    };
}

function reset() {
    document.location.reload();
}
