const rockBtn = document.querySelector("#rock")
const paperBtn = document.querySelector("#paper")
const scissorsBtn = document.querySelector("#scissors")

const scorePlayer = document.querySelector("#scorePlayer")
const playerScoreCount = document.createElement("p")
const scoreComputer = document.querySelector("#scoreComputer")
const computerScoreCount = document.createElement("p")


const winner = document.querySelector("#winner")
const winnerText = document.createElement("p")


rockBtn.addEventListener("click", () => playRound(rockBtn, computerPlay()))
paperBtn.addEventListener("click", () => playRound(paperBtn, computerPlay()))
scissorsBtn.addEventListener("click", () => playRound(scissorsBtn, computerPlay()))


function computerPlay() {

    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";
    let number = Math.floor(Math.random() * 3)

    if (number == 0) {
        return rock;
    }

    if (number == 1) {
        return paper;
    }
    return scissors;
}



function playRound(playerSelection, computerSelection) {

    let youWin = "You win!";
    let youLose = "You lose!";
    let tieGame = "It's a tie!";



    if (playerSelection == rockBtn && computerSelection == "rock") {
        return game(tieGame);
    }
    if (playerSelection == rockBtn && computerSelection == "paper") {
        return game(youLose);
    }
    if (playerSelection == rockBtn && computerSelection == "scissors") {
        return game(youWin);
    }
    if (playerSelection == paperBtn && computerSelection == "rock") {
        return game(youWin);
    }
    if (playerSelection == paperBtn && computerSelection == "paper") {
        return game(tieGame);
    }
    if (playerSelection == paperBtn && computerSelection == "scissors") {
        return game(youLose);
    }
    if (playerSelection == scissorsBtn && computerSelection == "rock") {
        return game(youLose);
    }
    if (playerSelection == scissorsBtn && computerSelection == "paper") {
        return game(youWin);
    }

    return game(tieGame);
}


//const scorePlayer = document.querySelector("scorePlayer")
//const playerScoreCount = document.createElement("p")
//const scoreComputer = document.querySelector("scoreComputer")
//const computerScoreCount = document.createElement("p")


//const winner = document.querySelector("#winner")
//const winnerText = document.createElement("p")

let playerScore = 0
let computerScore = 0

function game(match) {



    let matchScore = match;

    let youWin = "You win!";
    let youLose = "You lose!";
    let tieGame = "It's a tie!";

    if (matchScore == youWin) {
        playerScore++;
        playerScoreCount.textContent = playerScore
        scorePlayer.appendChild(playerScoreCount)

        computerScoreCount.textContent = computerScore
        scoreComputer.appendChild(computerScoreCount)

    }
    if (matchScore == youLose) {
        computerScore++;
        playerScoreCount.textContent = playerScore
        scorePlayer.appendChild(playerScoreCount)

        computerScoreCount.textContent = computerScore
        scoreComputer.appendChild(computerScoreCount)
    }
    if (matchScore == tieGame) {
        playerScoreCount.textContent = playerScore
        scorePlayer.appendChild(playerScoreCount)

        computerScoreCount.textContent = computerScore
        scorecomputer.appendChild(computerScoreCount)
    }
    if (playerScore == 5) {
        playerScore = 0
        computerScore = 0
        playerScoreCount.textContent = playerScore
        computerScoreCount.textContent = computerScore
        winnerText.textContent = "You Win!"
        winner.appendChild(winnerText)
        return;
    }
    if (computerScore == 5) {
        playerScore = 0
        computerScore = 0
        playerScoreCount.textContent = playerScore
        computerScoreCount.textContent = computerScore

        winnerText.textContent = "Computer Wins!"
        winner.appendChild(winnerText)
        return;
    }



}