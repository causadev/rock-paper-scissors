const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");
const result = document.querySelector("#result");
const result1 = document.querySelector("#result1");
const result2 = document.querySelector("#result2");
const result3 = document.querySelector("#result3");
const restartBtn = document.querySelector("#restartBtn");
setTimeout(() => {
  let userInput = prompt("Enter your username:").toLowerCase();
}, 100);
let playerWins = 0;
let playerScore = 0;
let computerScore = 0;
let round = 0;
const rounds = 5;

rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorsBtn.addEventListener("click", () => playRound("scissors"));

function getComputerChoice() {
  const hands = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * hands.length);
  return hands[randomNumber];
}

function playRound(playerSelection) {
  if (round <= rounds) {
    const computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
      result.textContent = `It's a draw! ${playerSelection} can't beat ${computerSelection}`;
    } else if (
      (playerSelection === "rock" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "rock")
    ) {
      result.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
      computerScore++;
    } else {
      result.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
      playerScore++;
    }

    round++;
    updateScore();

    if (round > rounds) {
      displayFinalScores();
    }
  }

  updateScore();
}

function updateScore() {
  result1.textContent = `${userInput}: ${playerScore}`;
  result2.textContent = `computer: ${computerScore}`;
}

function displayFinalScores() {
  result3.textContent = `Game Over! Final Scores - ${userInput}: ${playerScore}, computer: ${computerScore}`;
}

restartBtn.addEventListener("click", () => {
  round = 0;
  playerScore = 0;
  computerScore = 0;
  result.textContent = "";
  result1.textContent = "";
  result2.textContent = "";
  result3.textContent = "";
  setTimeout(() => {
    userInput = prompt("Enter your username:").toLowerCase();
  }, 100);
});
