const gameValues = ["ROCK", "PAPER", "SCISSORS"];
let playerMove = null;
let playerScore = 0;
let computerScore = 0;

function computerPlay(){    
    return gameValues[Math.floor(Math.random()* gameValues.length)];    
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toUpperCase();
    let result = "";
    if (playerSelection == computerSelection) {
        result = "Tie!"
    } else if (playerSelection == "ROCK") {
        if (computerSelection == "PAPER"){
            result = "You Lose! Paper beats Rock";
        }
        if (computerSelection == "SCISSORS"){
            result = "You win! Rock beats Scissors";
        }
    } else if (playerSelection == "PAPER"){
        if (computerSelection == "ROCK"){
            result = "You win! Paper beats Rock";
        }
        if (computerSelection == "SCISSORS"){
            result = "You Lose! Scissors beats Paper";
        }
    } else if (playerSelection == "SCISSORS"){
        if (computerSelection == "PAPER"){
            result = "You win! Scissors beats Paper";
        }
        if (computerSelection == "ROCK"){
            result = "You Lose! Scissors beats Rock";
        }
    }
    return result;
}
const btns = document.querySelectorAll("button");
const result = document.querySelector("#result");
Array.from(btns).forEach((btn) => {
    btn.addEventListener("click", (e) => {        
        result.textContent = playRound(e.target.id,computerPlay());
    })
})

// function game(){
//     for (let index = 0; index < 5; index++) {
//         let playerSelection = "";
//         while (!gameValues.includes(playerSelection.toUpperCase())) {
//             playerSelection = prompt("Rock, Paper or Scissors?");
//         }
//         let computerSelection = computerPlay();
//         console.log(playRound(playerSelection, computerSelection));
//     }
// }
