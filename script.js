function computerPlay() {

    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";

    let number = Math.floor(Math.random());

    if (number == 0) {
        return rock;
    }

    if (number == 1) {
        return paper;
    }
    return scissors;
}