// Variables and Array

let humanScore = 0;
let computerScore = 0;
let drawScore = 0;
let invalidInputs = 0;
let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

// Let the computer select randomly from 'options'

function getComputerChoice() {
  let options = ["Rock", "Paper", "Scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

// Let the player input choice

function getHumanChoice() {
  let validChoice = prompt("Rock, paper or Scissors? [f12 for progress]", "input [r] [p] or [s]");
  if (validChoice === "r" || validChoice === "p" || validChoice === "s") {
    return validChoice;
  } else if (
    validChoice !== "r" ||
    validChoice !== "p" ||
    validChoice !== "s"
  ) {
    console.log("Invalid choice!! Reload with f5");
    invalidInputs++;
  }
}

// Game flow for a single round

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice == "r" && computerChoice == "Paper") ||
    (humanChoice == "p" && computerChoice == "Scissors") ||
    (humanChoice == "s" && computerChoice == "Rock")
  ) {
    console.log("Computer: ", computerChoice);
    console.log("You: ", humanChoice);
    console.log("The computer wins!!");
    computerScore++;
  } else if (
    (humanChoice == "p" && computerChoice == "Rock") ||
    (humanChoice == "s" && computerChoice == "Paper") ||
    (humanChoice == "r" && computerChoice == "Scissors")
  ) {
    console.log("Computer: ", computerChoice);
    console.log("You: ", humanChoice);
    console.log("You win!!");
    humanScore++;
  } else if (
    (humanChoice == "r" && computerChoice == "Rock") ||
    (humanChoice == "p" && computerChoice == "Paper") ||
    (humanChoice == "s" && computerChoice == "Scissors")
  ) {
    console.log("Computer:", computerChoice);
    console.log("You:", humanChoice);
    console.log("Draw!");
    drawScore++;
  }
}

// Scoring

function winnerSelection() {
  console.log("Draws:", drawScore);
  console.log("Invalid inputs:", invalidInputs);
  console.log("Computer:", computerScore, "of 5");
  console.log("You:", humanScore, "of 5");

  if (humanScore > computerScore) {
    console.log("YOU WON THE GAME!!!");
  } else if (computerScore > humanScore) {
    console.log("THE COMPUTER WON THE GAME!!!");
  } else {
    console.log("A DRAW GAME!!!");
  }
}

// Play five times and display winner

function playGame() {
  playRound(humanSelection, computerSelection);
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  winnerSelection();
}

// Call playGame function

playGame();
