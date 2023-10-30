const playerScoreElem = document.getElementById('playerScore');
const computerScoreElem = document.getElementById('computerScore');
const playerSignElem = document.getElementById('playerSign');
const computerSignElem = document.getElementById('computerSign');
const scoreInfoElem = document.getElementById('scoreInfo');
const modal = document.getElementById('endgameModal');
const overlay = document.getElementById('overlay');
const endgameMsgElem = document.getElementById('endgameMsg');
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['✊', '✋', '✌'];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    if (playerChoice === computerChoice) {
        scoreInfoElem.textContent = 'It’s a tie!';
    } else {
        if ((playerChoice === '✊' && computerChoice === '✌') ||
            (playerChoice === '✋' && computerChoice === '✊') ||
            (playerChoice === '✌' && computerChoice === '✋')) {
            playerScore++;
            scoreInfoElem.textContent = 'You win this round!';
        } else {
            computerScore++;
            scoreInfoElem.textContent = 'Computer wins this round!';
        }
    }
    playerSignElem.textContent = playerChoice;
    computerSignElem.textContent = computerChoice;
    playerScoreElem.textContent = `Player: ${playerScore}`;
    computerScoreElem.textContent = `Computer: ${computerScore}`;

    if (playerScore === 5 || computerScore === 5) {
        endGame();
    }
}

function endGame() {
    overlay.style.display = 'block';
    modal.style.display = 'block';
    if (playerScore === 5) {
        endgameMsgElem.textContent = 'Congratulations! You won the game.';
    } else {
        endgameMsgElem.textContent = 'Computer won the game. Better luck next time!';
    }
}

document.getElementById('rockBtn').addEventListener('click', () => playRound('✊'));
document.getElementById('paperBtn').addEventListener('click', () => playRound('✋'));
document.getElementById('scissorsBtn').addEventListener('click', () => playRound('✌'));

document.getElementById('restartBtn').addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    playerScoreElem.textContent = `Player: ${playerScore}`;
    computerScoreElem.textContent = `Computer: ${computerScore}`;
    playerSignElem.textContent = '❔';
    computerSignElem.textContent = '❔';
    scoreInfoElem.textContent = 'Choose your weapon';
    overlay.style.display = 'none';
    modal.style.display = 'none';
});
