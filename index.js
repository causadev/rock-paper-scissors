function getComputerChoice() {
  const hands = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * hands.length);
  return hands[randomNumber];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `It's a draw! ${playerSelection} cant't beat ${computerSelection}`;
  }
  if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }

  if (
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "rock" && computerSelection === "scissors")
  ) {
    return `You Won! ${playerSelection} beats ${computerSelection}`;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Pick your choose: rock, paper, scissors");
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    console.log(result);

    if (playerSelection === computerSelection) {
      playerScore = computerScore;
    }
    if (
      (playerSelection === "rock" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "rock")
    ) {
      computerScore++;
    }

    if (
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper") ||
      (playerSelection === "rock" && computerSelection === "scissors")
    ) {
      playerScore++;
    }
  }

  if (playerScore > computerScore) {
    console.log(
      `You won the game! Final Score: You ${playerScore} - Computer ${computerScore}`
    );
  } else if (computerScore > playerScore) {
    console.log(
      `You lost the game! Final Score: You ${playerScore} - Computer ${computerScore}`
    );
  } else {
    console.log(
      `It's a draw! Final Score: You ${playerScore} - Computer ${computerScore}`
    );
  }
}

game();
