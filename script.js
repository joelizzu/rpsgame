// Variables and Arrays

let humanScore = 0;
let computerScore = 0;
console.log("Welcome to the game");
let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

// Let the computer select randomly from 'options'

function getComputerChoice() {
  let options = ["Rock", "Paper", "Scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

// Let the player input choice

function getHumanChoice() {
  let validChoice = prompt("Rock, paper or Scissors? (r, p, or s)");
  if (validChoice === "r" || validChoice === "p" || validChoice === "s") {
    return validChoice;
  } else {
    console.log("Invalid choice!! Reload with f5");
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
    console.log("Computer: ", computerChoice);
    console.log("You: ", humanChoice);
    console.log("Draw!");
  }
}

// Scoring
function winnerSelection() {
  if (humanScore > computerScore) {
    console.log("You won the game!!!");
  } else {
    console.log("The computer won the game!!!");
  }
}

// Play five times and display winner

function playGame() {
  playRound(humanSelection, computerSelection);
}
playGame();
winnerSelection();
