const uhOh = "So for some reason my audio and everything else cut out :/ but heres my discord so feel free to send me a friend request so we can keep working on it/keep up with each other! Kiko#8306"

const rps = ["rock", "paper", "scissors"];

let AIChoice = "";

// testing AI
document.getElementById("submit").addEventListener("click", getUserChoice);
const userScore = document.querySelector("#userScore");
const computerScore = document.querySelector("#computerScore");

function getUserChoice() {
  let val = document.getElementById("playerchoice").value.toLowerCase();
  playRPS(val);
}

function playRPS(playerchoice) {
  const choices = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * 3);
  let playerScore = +userScore.innerHTML;
  let aiScore = +computerScore.innerHTML;
  AIChoice = choices[randomNum];
  //playerchoice = document.getElementById("playerchoice").value.toLowerCase();
  console.log(AIChoice, playerchoice);
  if (
    (playerchoice == "rock" && AIChoice == "scissors") ||
    (playerchoice == "paper" && AIChoice == "rock") ||
    (playerchoice == "scissors" && AIChoice == "paper")
  ) {
    alert("The player wins!");
    playerScore++;
    userScore.innerHTML = playerScore;
  } else if (
    (playerchoice == "paper" && AIChoice == "scissors") ||
    (playerchoice == "rock" && AIChoice == "paper") ||
    (playerchoice == "scissors" && AIChoice == "rock")
  ) {
    alert("The computer wins...");
    aiScore++;
    computerScore.innerHTML = aiScore;
  } else {
    alert("Draw");
  }
}
