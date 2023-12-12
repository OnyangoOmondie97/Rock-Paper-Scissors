const playerScoreElem = document.getElementById('playerScore');
const computerScoreElem = document.getElementById('computerScore');
const playerSignElem = document.getElementById('playerSign');
const computerSignElem = document.getElementById('computerSign');
const scoreInfoElem = document.getElementById('scoreInfo');
const modal = document.getElementById('endgameModal');
const overlay = document.getElementById('overlay');
const endgameMsgElem = document.getElementById('endgameMsg');
const resultElem = document.getElementById('roundResult');
const runningScoreElem = document.getElementById('runningScore');
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['✊', '✋', '✌'];
    return choices[Math.floor(Math.random() * 3)];
}

function updateScore() {
    runningScoreElem.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
    if (playerScore === 5 || computerScore === 5) {
        endGame();
    }
}

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    if (playerChoice === computerChoice) {
        resultElem.textContent = 'It’s a tie!';
    } else {
        if (
            (playerChoice === '✊' && computerChoice === '✌') ||
            (playerChoice === '✋' && computerChoice === '✊') ||
            (playerChoice === '✌' && computerChoice === '✋')
        ) {
            playerScore++;
            resultElem.textContent = 'You win this round!';
        } else {
            computerScore++;
            resultElem.textContent = 'Computer wins this round!';
        }
        updateScore();
    }
    playerSignElem.textContent = playerChoice;
    computerSignElem.textContent = computerChoice;
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
    resultElem.textContent = '';
    overlay.style.display = 'none';
    modal.style.display = 'none';
});
