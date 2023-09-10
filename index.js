const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const buttons = document.querySelectorAll("#choiceBtn");
const restart = document.querySelector("#restartBtn");
let computerChoice;
let playerChoice;

restart.addEventListener("click", restartGame);
buttons.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    playerChoice = e.target.textContent;
    computerChoice = getComputerChoice();
    playerText.textContent = `Player: ${playerChoice}`;
    computerText.textContent = `Computer: ${computerChoice}`;
    playRound(playerChoice, computerChoice);
  })
);

function getComputerChoice() {
  const hands = ["Rock", "Paper", "Scissors"];
  const randomChoice = Math.floor(Math.random() * hands.length);
  return hands[randomChoice];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    resultText.textContent = `Result: TIE!`;
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    resultText.textContent = `Result: YOU LOST!`;
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    resultText.textContent = `Result: YOU LOST!`;
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    resultText.textContent = `Result: YOU LOST!`;
  } else {
    resultText.textContent = `Result: YOU WIN!`;
  }
}

function restartGame() {
  playerChoice = "";
  computerChoice = "";
  playerText.textContent = `Player: ${playerChoice}`;
  computerText.textContent = `Computer: ${computerChoice}`;
  resultText.textContent = `Result:`;
}
