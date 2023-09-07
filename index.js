let playerScore = 0;
let computerScore = 0;
let playerSelection = "";
const rock = document.querySelector("#rockBtn");
const paper = document.querySelector("#paperBtn");
const scissors = document.querySelector("#scissorsBtn");
const restart = document.querySelector("#restartBtn");
const result = document.querySelector("#result");
const userChoice = document.querySelector("#userChoice");
const computerChoice = document.querySelector("#computerChoice");
const computerScoreDisplay = document.querySelector("#computerScoreDisplay");
const playerScoreDisplay = document.querySelector("#playerScoreDisplay");
const computerSelection = getComputerChoice();
computerChoice.textContent = `Computer chose:`;
userChoice.textContent = `You chose: `;
rock.addEventListener("click", () => playRound("rock"));
paper.addEventListener("click", () => playRound("paper"));
scissors.addEventListener("click", () => playRound("scissors"));
restart.addEventListener("click", restartGame);

function getComputerChoice() {
  const hands = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * hands.length);
  computerChoice.textContent = hands[randomNumber];
  return hands[randomNumber];
}

function playRound(playerSelection) {
  const computerSelection = getComputerChoice();
  userChoice.textContent = `You chose: ${playerSelection}`;
  computerChoice.textContent = `Computer chose: ${computerSelection}`;
  if (playerSelection === computerSelection) {
    result.textContent = `It's a draw! ${playerSelection} can't beat ${computerSelection}`;
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    computerScore++;
    result.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else {
    playerScore++;
    result.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
  }

  updateScore();
}

function restartGame() {
  playerScore = 0;
  computerScore = 0;
  playerSelection = "";
  result.textContent = "";
  computerChoice.textContent = `Computer chose:`;
  userChoice.textContent = `You chose: `;
  playerScoreDisplay.textContent = `Player: ${playerScore}`;
  computerScoreDisplay.textContent = `Computer: ${computerScore}`;
}

function updateScore() {
  playerScoreDisplay.textContent = `Player: ${playerScore}`;
  computerScoreDisplay.textContent = `Computer: ${computerScore}`;
}

updateScore();
