function getUserChoice(userInput) {
  if (userInput == "rock" || "papper" || "scissors") {
    return userInput;
  } else {
    console.log("Not a valid choice");
  }
}

function getComputerChoice() {
  computerChoice = Math.random(Math.random() * 3);
  if (computerChoice === 0) {
    return "rock";
  } else if (computerChoice == 1) {
    return "scissors";
  } else {
    return "papper";
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  } else if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer wins!";
    } else {
      return "You win!";
    }
  } else if (userChoice === "paper") {
    if (compterChoice === "scissors") {
      return "Computer wins!";
    } else {
      return "You win!";
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer wins!";
    } else {
      return "You win!";
    }
  }
}

function playGame(input) {
  let userChoice = getUserChoice(input.toLowerCase());
  let computerChoice = getComputerChoice();
  console.log(`You threw ${userChoice}!`);
  console.log(`Computer threw ${computerChoice}!`);
  console.log(determineWinner(userChoice, computerChoice));
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Rock, papper or Scissors?`, (input) => {
  playGame(input);
  rl.close();
});
