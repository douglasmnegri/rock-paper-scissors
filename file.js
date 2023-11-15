function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * (4-1) + 1);
    if(randomNumber === 1) {
        return "rock";
    }
    else if(randomNumber === 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playGame(playerSelection, computerSelection) {
    let promptChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
    playerSelection = promptChoice;
    computerSelection = getComputerChoice();
    
    if(playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats Scissors";
    }
    else if(playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats Rock";
    }
    else if(playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beats Paper";
    }
    else if(playerSelection === computerSelection) {
        return "It's a Draw! Play again!"
    }

    else {
        return `You Lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`;
    }
}