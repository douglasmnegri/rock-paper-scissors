            

    // Initialize scores
            let playerScore = 0;   
            let computerScore = 0;
    // This function is responsible for the number of times the game is played, and it loops every part of the game.
    //We could have also used console.log() five times instead using the loop.
    function playGame() {

                for(let i = 0; i < 5; i++) { 
                    
                
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
             let player = prompt("Rock, Paper or Scissors?");
             const playerSelection = player.toLowerCase();
             const computerSelection = getComputerChoice();
             const playRoundResult = playRound(playerSelection, computerSelection);
             console.log(`Computer input: ${computerSelection}`);
             console.log(`Player input: ${playerSelection}`);
             console.log(playRoundResult);    
     }
  }


playGame();
// Why does it need to divide it by 2? Is it because of the flawed loop?
// We fixed the variable outside the scope. It was incrementing 2 instead of 1.
console.log("Computer: " + computerScore);
console.log("Player: " + playerScore);



