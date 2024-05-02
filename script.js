// Variables and Arrays
let options = ["Rock", "Paper", "Scissors"];
let humanScore = 0;
let computerScore = 0;
console.log("Welcome to the game");
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// Let the computer select randomly from 'options'

function getComputerChoice() {
  return options[Math.floor(Math.random() * options.length)];
}

// Let the player input choice

function getHumanChoice() {
  let choice = prompt("Rock, paper or Scissors? (r, p, or s)");
  if (choice === "r" || choice === "p" || choice === "s") {
    return choice;
  } else {
    console.log("Invalid input!! Reload with f5");
  }
}

// Game flow conditionals

function playRound(humanChoice, computerChoice) {
  if (humanSelection == "r" && computerSelection == "Paper") {
    console.log("Computer: ", computerSelection);
    console.log("You: Rock");
    console.log("The computer wins!!");
    computerScore++;
  } else if (humanSelection == "p" && computerSelection == "Rock") {
    console.log("Computer: ", computerSelection);
    console.log("You: Paper");
    console.log("You win!!");
    humanChoice++;
  } else if (humanSelection == "r" && computerSelection == "Rock") {
    console.log("Computer: ", computerSelection);
    console.log("You: Rock");
    console.log("Same answer!");
  }

  if (humanSelection == "p" && computerSelection == "Scissors") {
    console.log("Computer: ", computerSelection);
    console.log("You: Paper");
    console.log("The computer wins!!");
    computerScore++;
  } else if (humanSelection == "s" && computerSelection == "Paper") {
    console.log("Computer: ", computerSelection);
    console.log("You: Scissors");
    console.log("You win!!");
    humanScore++;
  } else if (humanSelection == "p" && computerSelection == "Paper") {
    console.log("Computer: ", computerSelection);
    console.log("You: Paper");
    console.log("Same answer!");
  }

  if (humanSelection == "s" && computerSelection == "Rock") {
    console.log("Computer: ", computerSelection);
    console.log("You: Scissors");
    console.log("The computer wins!!");
    computerScore++;
  } else if (humanSelection == "r" && computerSelection == "Scissors") {
    console.log("Computer: ", computerSelection);
    console.log("You: Rock");
    console.log("You win!!");
    humanScore++;
  } else if (humanSelection == "s" && computerSelection == "Scissors") {
    console.log("Computer: ", computerSelection);
    console.log("You: Scissors");
    console.log("Same answer!");
  }
}
// Game play

function playGame() {
  playRound();
  humanScore;
  computerScore;
}

