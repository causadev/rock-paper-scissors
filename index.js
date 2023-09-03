const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");
const result = document.querySelector("#result");
const result1 = document.querySelector("#result1");
const result2 = document.querySelector("#result2");
let userInput = "joel";
let playerWins = 0;
let playerScore = 0;
let computerScore = 0;

rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorsBtn.addEventListener("click", () => playRound("scissors"));

function getComputerChoice() {
  const hands = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * hands.length);
  return hands[randomNumber];
}

function playRound(playerSelection) {
  const computerSelection = getComputerChoice();
  if (playerSelection === computerSelection) {
    result.textContent = `It's a draw! ${playerSelection} cant't beat ${computerSelection}`;
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    result.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    computerScore++;
    result2.textContent = `Computer: ${computerScore}`;
  } else {
    result.textContent = `You Win! ${computerSelection} beats ${playerSelection}`;
    playerScore++;
  }

  updateScore();
}

function updateScore() {
  result1.textContent = `${userInput}: ${playerScore}`;
  result2.textContent = `Computer: ${computerScore}`;
}
