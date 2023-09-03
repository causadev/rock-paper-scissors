const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");
const result = document.querySelector("#result");

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
  } else {
    result.textContent = `You Win! ${computerSelection} beats ${playerSelection}`;
  }
}

