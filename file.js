// Initialize scores
 let playerScore = 0; 
 let computerScore = 0;

 //This function is reponsible for the player choice.

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.onclick = function () {
    playerSelection = "rock";
}

paper.onclick = function () {
    playerSelection = "paper";
}

scissors.onclick = function () {
    playerSelection = "scissors";
}
// This function is responsible for the number of times the game is played, and it loops every part of the game.

const buttons = document.querySelectorAll('.playgame');
buttons.forEach((button) => {
button.addEventListener('click', () => {

// This function is responsible for the computer choice.
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

// playRound intent is to run a match between the computer and the user.
function playRound(playerSelection, computerSelection) {
    
     const win = (playerSelection === "rock" && computerSelection === "scissors") ||
     (playerSelection === "paper" && computerSelection === "rock") ||
     (playerSelection === "scissors" && computerSelection === "paper");
     if(playerSelection === computerSelection) {
        return "It's a tie!";
    }
     if(win) {
        playerScore++;
        return "You win!";
     }

     else {
        computerScore++;
        return "You Lose!";
     }
 
 } 
     

//We could make a new function and store the values of playerSelection inside of it, just like we did with computerChoice();

     const computerSelection = getComputerChoice();
     const playRoundResult = playRound(playerSelection, computerSelection);
    
     const playerInput = document.querySelector('#playerInput');

     playerInput.textContent =  `Player input: ${playerSelection[0].toUpperCase() + playerSelection.slice(1)}`;

     const computerInput = document.querySelector('#computerInput');
     computerInput.textContent = `Computer input: ${computerSelection[0].toUpperCase() + computerSelection.slice(1)}`

     const roundResult = document.querySelector('#roundResult');
     roundResult.textContent = `Result: ${playRoundResult}`;

     const computerPoints = document.querySelector('#computerScore');
     const playerPoints = document.querySelector('#playerScore');


//We used an alert to inform the game is over after playerScore or computerScore reaches 5;
     if (computerScore > 4) {
        alert(`Computer Victory! ${computerScore} - ${playerScore}`);
    }
    else if(playerScore > 4) {
        alert(`Player Victory! ${playerScore} - ${computerScore}`);
    }

     if(computerScore < 5 && playerScore < 5 ) {
    computerPoints.textContent = `${computerScore}`;

     playerPoints.textContent = `${playerScore}`;
    }
    else if (computerScore >= 5 || playerScore >= 5) {
        computerPoints.textContent = `0`;
        playerPoints.textContent = `0`;
        computerScore = 0;
        playerScore = 0;
    }
    });
    
});

