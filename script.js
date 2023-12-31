'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉Correct Number'

document.querySelector('.number').textContent = 7;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let SecretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    // No number of zero
    if (!guess) {
        document.querySelector('.message').textContent = '⛔No Number!';
    }

    // When player wins...
    else if (guess === SecretNumber) {
        document.querySelector('.message').textContent = '🎉Correct Number!';
        document.querySelector('.number').textContent = SecretNumber;
        score++;
        document.querySelector('.score').textContent = score;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }

    // when guess is to high
    else if (guess > SecretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📈Too high!';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = '💥You lost the game';
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = 'red';
        }
    }

    // when guess is to high
    else if (guess < SecretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📉Too low!';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = '💥You lost the game';
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = 'red';
        }
    }

});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    SecretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
})

