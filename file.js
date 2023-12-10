// This function closes the pop-up and remove the blur from the background
function closePopup(){
    popup.classList.remove('open-popup');
    let blur = document.querySelector('#blur');
    blur.classList.toggle('active');
}

// Initialize scores
 let playerScore = 0; 
 let computerScore = 0;

 //This function is reponsible for the player choice.
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

function getPlayerChoice() {
rock.onclick = function () {
    playerSelection = "rock";
}

paper.onclick = function () {
    playerSelection = "paper";
}

scissors.onclick = function () {
    playerSelection = "scissors";
}
}
getPlayerChoice();

// This function is responsible for the number of times the game is played, and it loops every part of the game.
const buttons = document.querySelectorAll('.playgame');
buttons.forEach((button) => {
button.addEventListener('click', () => {

// This function is responsible for the computer choice.
function getComputerChoice() {
let randomNumber = Math.floor(Math.random() * (4-1) + 1);
if(randomNumber === 1) {
computerSelection = "rock";
}
else if(randomNumber === 2) {
computerSelection = "paper";
}
else {
computerSelection = "scissors";
}
}
getComputerChoice();

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
     //This part of the code is reponsible for showing the result of each match between the player and the computer.
     const playRoundResult = playRound(playerSelection, computerSelection);
    
     const playerInput = document.querySelector('#playerInput');
     playerInput.textContent =  `Player input: ${playerSelection[0].toUpperCase() + playerSelection.slice(1)}`;

     const computerInput = document.querySelector('#computerInput');
     computerInput.textContent = `Computer input: ${computerSelection[0].toUpperCase() + computerSelection.slice(1)}`

     const roundResult = document.querySelector('#roundResult');
     roundResult.textContent = `Result: ${playRoundResult}`;

     const computerPoints = document.querySelector('#computerScore');
     const playerPoints = document.querySelector('#playerScore');

     showResult(computerScore, playerScore);

//We're no longer using an alert, we've created a pop-up that informs the result of the game, and that match is finished.
    function showResult(computerScore, playerScore) {
if (computerScore > 4) {
        function openPopup() {
            popup.classList.add('open-popup');

        }
        function toggle() {
            let blur = document.querySelector('#blur');
            blur.classList.toggle('active');
        }

        let message = document.querySelector('#message')
        message.textContent = (`Computer Victory! ${playerScore} - ${computerScore} `);        
        openPopup();
        toggle();
        
    }
else if(playerScore > 4) {
        function openPopup() {
            popup.classList.add('open-popup');
        }
        function toggle() {
            let blur = document.querySelector('#blur');
            blur.classList.toggle('active');
        }

        let message = document.querySelector('#message');
        message.textContent = (`Player Victory! ${playerScore} - ${computerScore}`);

        openPopup();
        toggle();
    }
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

