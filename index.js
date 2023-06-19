
 
 function getComputerChoice () {
    const computerPick = ['rock', 'paper', 'scissors'];
        return computerPick[Math.floor(Math.random() * computerPick.length)];
 }

 function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a tie! You both chose ${playerSelection}`;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You won! Your paper COVERED the rock!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You won! Your rock SMASHED the scissors";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You won! Your scissors SLICED the paper";
    } else {
        return `YOU LOST! ${computerSelection} BEATS ${playerSelection}`;
    }
  }


  for (let i = 0; i < 5; i++) {
  const playerSelection = prompt('Choose your weapon: "rock", "paper", or "scissors".').toLowerCase();
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  }