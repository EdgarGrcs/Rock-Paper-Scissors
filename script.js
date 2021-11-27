/*Needs to be operated through a console in a web browser */


/**
 * 
 * @returns random number between 1 and 3
 */

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

    let input = playerSelection;
    let playerText = input.toLowerCase();

    if (playerText == "rock" && computerSelection == "rock") {
        return tieGame;
    }
    if (playerText == "rock" && computerSelection == "paper") {
        return youLose;
    }
    if (playerText == "rock" && computerSelection == "scissors") {
        return youWin;
    }
    if (playerText == "paper" && computerSelection == "rock") {
        return youWin;
    }
    if (playerText == "paper" && computerSelection == "paper") {
        return tieGame;
    }
    if (playerText == "paper" && computerSelection == "scissors") {
        return youLose;
    }
    if (playerText == "scissors" && computerSelection == "rock") {
        return youLose;
    }
    if (playerText == "scissors" && computerSelection == "paper") {
        return youWin;
    }

    return tieGame;
}

let playerScore = 0;
let computerScore = 0;

function game() {

    const computerSelection = computerPlay();
    let playerSelection = window.prompt("choose between rock, paper, scissors: ");
    let matchScore = playRound(playerSelection, computerSelection);


    let youWin = "You win!";
    let youLose = "You lose!";
    let tieGame = "It's a tie!";

    if (matchScore == youWin) {
        playerScore++;
        console.log("Your score is: " + playerScore);
        console.log("Computer's score is: " + computerScore);

    }
    if (matchScore == youLose) {
        computerScore++;
        console.log("Computer's score is: " + computerScore);
        console.log("Your score is: " + playerScore);

    }

    if (matchScore == tieGame) {
        console.log("Computer's score is: " + computerScore);
        console.log("Your score is: " + playerScore);
    }

    if (playerScore == 5) {
        console.log("Player Wins");
        return;
    }

    if (computerScore == 5) {
        console.log("ComputerWins");
        return;
    }

    return game();
}