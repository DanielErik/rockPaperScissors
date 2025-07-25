let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    const counter = Math.round(Math.random() * 100);
    

    console.log(counter);

    if(counter <= 33){
        rps_Com = "Rock";
        return rps_Com.toLowerCase();
    }else if (counter <= 66 && counter > 33){
        rps_Com = "Paper";
        return rps_Com.toLowerCase();
    }else{
        rps_Com = "Scissors";
        return rps_Com.toLowerCase();
    }
}

function getHumanChoice(){
    console.log("Rock, Paper or Scissors?");
    let choice = prompt("Choose your weapon: ");
    choice = choice.toLowerCase();

    return choice;
}

function playRound(){
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    
    const winnerTable = {
        "rock-rock": "Draw!",
        "rock-paper": "You loose! Paper beats Rock",
        "rock-scissors": "You win! Stone beats Scissors",
        "paper-rock": "You win! Paper beats Rock",
        "paper-paper": "Draw!",
        "paper-scissors": "You loose! Scissors beat Paper",
        "scissors-rock": "You loose! Rock beats Scissors",
        "scissors-paper": "You win! Scissors beat Paper",
        "scissors-scissors": "Draw!"
    };

    let winnerKey = `${humanChoice}-${computerChoice}`;

    if(winnerTable[winnerKey]){
        console.log(winnerTable[winnerKey]);

        if(winnerTable[winnerKey].startsWith("You win!")){
            humanScore = humanScore +1;
        }
        else if(winnerTable[winnerKey].startsWith("You loose!")){
            computerScore = computerScore + 1;
        }
    }
    else{
        console.log("Wrong input!");
    }

    console.log(humanScore);
    console.log(computerScore);
}

function fullGame(){
    while (humanScore != 5 && computerScore != 5){
        playRound();
    }

    if(humanScore == 5){
        console.log("You won the Match!");
    }
    else{
        console.log("You lost this Match!");
    }
}
