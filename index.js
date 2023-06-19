 let playerScore = 0;
 let computerScore = 0;
 
 function getComputerChoice () {
    let computerPick = ['rock', 'paper', 'scissors'];
        return computerPick[Math.floor(Math.random() * computerPick.length)];
 }

 function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a tie! You both chose ${playerSelection}. The score is ${playerScore} : ${computerScore}`;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore += 1
        return `You won! Your paper COVERED the rock! The score is ${playerScore} : ${computerScore}`;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore += 1
        return `You won! Your rock SMASHED the scissors. The score is ${playerScore} : ${computerScore}`;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore += 1
        return `You won! Your scissors SLICED the paper. The score is ${playerScore} : ${computerScore}`;
    } else {
        computerScore += 1
        return `YOU LOST! ${computerSelection} BEATS ${playerSelection}. The score is ${playerScore} : ${computerScore}`;
    }
  }

  for (let i = 0; i < 5; i++) {
  const playerSelection = prompt('Choose your weapon: "rock", "paper", or "scissors".').toLowerCase();
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  }

  if (playerScore > computerScore) {
        console.log('YOU WIN THE GAME! CONGRATULATIONS');
       alert('You WON')
  } else if (playerScore < computerScore) {
        console.log('YOU LOST THE GAME. YOU SUCK');
        alert('You LOST')
  } else {
        console.log('IT\'S A TIE?! WOW');
        alert('You TIED.')
  }