const rockBtn = document.querySelector("#rock")
const paperBtn = document.querySelector("#paper")
const scissorsBtn = document.querySelector("#scissors")

const scorePlayer = document.querySelector("#scorePlayer")
const playerScoreCount = document.createElement("p")
const scoreComputer = document.querySelector("#scoreComputer")
const computerScoreCount = document.createElement("p")


const winner = document.querySelector("#winner")
const winnerText = document.createElement("p")

const playInput = document.querySelector("#playerInput")
const playerOutput = document.createElement("p")
const computerInput = document.querySelector("#computerInput")
const computerOutput = document.createElement("p")


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
        playerOutput.textContent = "Rock"
        playInput.appendChild(playerOutput)
        computerOutput.textContent = "Rock"
        computerInput.appendChild(computerOutput)
        return game(tieGame);
    }
    if (playerSelection == rockBtn && computerSelection == "paper") {
        playerOutput.textContent = "Rock"
        playInput.appendChild(playerOutput)
        computerOutput.textContent = "Paper"
        computerInput.appendChild(computerOutput)
        return game(youLose);
    }
    if (playerSelection == rockBtn && computerSelection == "scissors") {
        playerOutput.textContent = "Rock"
        playInput.appendChild(playerOutput)
        computerOutput.textContent = "Scissors"
        computerInput.appendChild(computerOutput)
        return game(youWin);
    }
    if (playerSelection == paperBtn && computerSelection == "rock") {
        playerOutput.textContent = "Paper"
        playInput.appendChild(playerOutput)
        computerOutput.textContent = "Paper"
        computerInput.appendChild(computerOutput)
        return game(youWin);
    }
    if (playerSelection == paperBtn && computerSelection == "paper") {
        playerOutput.textContent = "Paper"
        playInput.appendChild(playerOutput)
        computerOutput.textContent = "Paper"
        computerInput.appendChild(computerOutput)
        return game(tieGame);
    }
    if (playerSelection == paperBtn && computerSelection == "scissors") {
        playerOutput.textContent = "Paper"
        playInput.appendChild(playerOutput)
        computerOutput.textContent = "Scissors"
        computerInput.appendChild(computerOutput)
        return game(youLose);
    }
    if (playerSelection == scissorsBtn && computerSelection == "rock") {
        playerOutput.textContent = "Scissors"
        playInput.appendChild(playerOutput)
        computerOutput.textContent = "Rock"
        computerInput.appendChild(computerOutput)
        return game(youLose);
    }
    if (playerSelection == scissorsBtn && computerSelection == "paper") {
        playerOutput.textContent = "Scissors"
        playInput.appendChild(playerOutput)
        computerOutput.textContent = "Paper"
        computerInput.appendChild(computerOutput)
        return game(youWin);
    }

    playerOutput.textContent = "Scissors"
    playInput.appendChild(playerOutput)
    computerOutput.textContent = "Scissors"
    computerInput.appendChild(computerOutput)
    return game(tieGame);
}




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
        scoreComputer.appendChild(computerScoreCount)
    }
    if (playerScore == 5) {
        playerScore = 5

        playerScoreCount.textContent = playerScore
        computerScoreCount.textContent = computerScore
        winnerText.textContent = "You Win!"
        winner.appendChild(winnerText)
        playerScore = 0
        computerScore = 0

        return;
    }
    if (computerScore == 5) {

        computerScore = 5
        playerScoreCount.textContent = playerScore
        computerScoreCount.textContent = computerScore

        winnerText.textContent = "Computer Wins!"
        winner.appendChild(winnerText)
        playerScore = 0
        computerScore = 0

        return;
    }

    winnerText.textContent = "Who will win?"
    winner.appendChild(winnerText)


}