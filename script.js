const gameValues = ["ROCK", "PAPER", "SCISSORS"];
let playerMove = null;

function computerPlay(){    
    return gameValues[Math.floor(Math.random()* gameValues.length)];    
}

function addPoint(player){
    const scoreElement = player ? document.querySelector("#player") :
                                  document.querySelector("#computer");
    const result = document.querySelector("#result");
    score = Number(scoreElement.textContent) +1;
    scoreElement.textContent = score;
    if (score == 5) {
        result.textContent = `Winner: ${scoreElement.id}`;
        resetGame();
    }
}

function resetGame(){
    const scores = document.querySelectorAll(".scoreValue");
    scores.forEach(score => {
        score.firstElementChild.textContent = "0";
    });
}

function playRound(playerSelection, computerSelection){
    const result = document.querySelector("#result");
    playerSelection = playerSelection.toUpperCase();    

    if (playerSelection == computerSelection) {
        result.textContent = "Tie!"
    } else if (playerSelection == "ROCK") {
        if (computerSelection == "PAPER"){
            result.textContent = "You Lose! Paper beats Rock";
            addPoint(false);
        }
        if (computerSelection == "SCISSORS"){
            result.textContent = "You win! Rock beats Scissors";
            addPoint(true);
        }
    } else if (playerSelection == "PAPER"){
        if (computerSelection == "ROCK"){
            result.textContent = "You win! Paper beats Rock";
            addPoint(true);
        }
        if (computerSelection == "SCISSORS"){
            result.textContent = "You Lose! Scissors beats Paper";
            addPoint(false);
        }
    } else if (playerSelection == "SCISSORS"){
        if (computerSelection == "PAPER"){
            result.textContent = "You win! Scissors beats Paper";
            addPoint(true);
        }
        if (computerSelection == "ROCK"){
            result.textContent = "You Lose! Rock beats Scissors";
            addPoint(false);
        }
    }
}
const btns = document.querySelectorAll("button");
Array.from(btns).forEach((btn) => {
    btn.addEventListener("click", (e) => {        
        playRound(e.target.id,computerPlay());
    })
})

