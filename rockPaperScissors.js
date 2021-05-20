const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getUserChoice = (userInput) => {
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("Not a valid choice");
  }
};

function getComputerChoice() {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      return "rock";
    case 1:
      return "scissors";
    case 2:
      return "paper";
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

rl.question(`Rock, papper or Scissors?`, (input) => {
  playGame(input);
  rl.close();
});
