let playerScore = 0;
let computerScore = 0;
const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorsButton = document.querySelector('.scissors')
const outcomeDiv = document.querySelector('.outcome')
const playerScoreSpan = document.querySelector('.player-score')
const computerScoreSpan = document.querySelector('.computer-score')

const getComputerChoice = () => {
    const arrOfChoices = ["rock", "paper", "scissors"]
    const randomNum = Math.floor(Math.random() * arrOfChoices.length)
    return arrOfChoices[randomNum]  
}

const playRound = (playerSelection, computerSelection) => {
    const outcomeDiv = document.querySelector('.outcome')
    if (playerSelection === computerSelection) {
        const p = document.createElement("p")
        p.textContent = `Tie! You both picked ${playerSelection}`
        outcomeDiv.appendChild(p)
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore += 1
        const p = document.createElement("p")
        p.textContent = "You win! Rock smashes scissors."
        outcomeDiv.appendChild(p)
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore += 1
        const p = document.createElement("p")
        p.textContent = "You win! Paper covers rock."
        outcomeDiv.appendChild(p)
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore += 1
        const p = document.createElement("p")
        p.textContent = "You win! Scissors cuts paper."
        outcomeDiv.appendChild(p)
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore += 1
        const p = document.createElement("p")
        p.textContent = "You lost! Scissors covers rock."
        outcomeDiv.appendChild(p)
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore += 1
        const p = document.createElement("p")
        p.textContent = "You lost! Scissors cuts paper."
        outcomeDiv.appendChild(p)
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore += 1
        const p = document.createElement("p")
        p.textContent = "You lost! Rock smashes scissors."
        outcomeDiv.appendChild(p)
    }
}

const checkForWinner = (playerScore, computerScore) => {
    if (playerScore === 5) {
        const h2 = document.createElement("h2")
        h2.classList.add("player-won")
        h2.textContent = `YOU WON! ${playerScore} to ${computerScore}`
        outcomeDiv.append(h2)
    } else if (computerScore === 5) {
        const h2 = document.createElement("h2")
        h2.classList.add("computer-won")
        h2.textContent = `YOU LOST! ${playerScore} to ${computerScore}`
        outcomeDiv.append(h2)
    }
}

const updateScores = (playerScore, computerScore) => {
    playerScoreSpan.textContent = `Player Score: ${playerScore}             `
    computerScoreSpan.textContent = `Computer Score: ${computerScore}               `
}


rockButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const playerSelection = "rock";
    playRound(playerSelection, computerSelection);
    updateScores(playerScore, computerScore);
    checkForWinner(playerScore, computerScore);
})

paperButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const playerSelection = "paper";
    playRound(playerSelection, computerSelection);
    updateScores(playerScore, computerScore);
    checkForWinner(playerScore, computerScore);
})

scissorsButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const playerSelection = "scissors";
    playRound(playerSelection, computerSelection);
    updateScores(playerScore, computerScore);
    checkForWinner(playerScore, computerScore);
})

////////////////////////////////////////////////////

// const game = () => {
//     for (let i = 0; i < 5; i++) {
//         const playerSelection = prompt("Choose your weapon:", "rock, paper, or scissors").toLowerCase()
//         const computerSelection = getComputerChoice();
//     }

//     if (playerScore > computerScore) {
//         return "YOU WIN"
//     } else if (computerScore > playerScore) {
//         return "YOU LOSE"
//     } else {
//         return "TIE GAME"
//     }
// }

// console.log(game());