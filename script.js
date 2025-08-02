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

function playRound(humanChoiceButton){
    const humanChoice = humanChoiceButton;
    const computerChoice = getComputerChoice();
    document.getElementById("comWeapon").innerText = String(computerChoice).charAt(0).toUpperCase() + 
        String(computerChoice).slice(1);
    document.getElementById("userWeapon").innerText = String(humanChoice).charAt(0).toUpperCase() + 
        String(humanChoice).slice(1);
    
    const winnerTable = {
        "rock-rock": "Draw!",
        "rock-paper": "You loose! Paper beats Rock",
        "rock-scissors": "You win! Rock beats Scissors",
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

    document.getElementById("winLooseMessage").innerText = winnerTable[winnerKey];
    document.getElementById("userPoints").innerText = "Points: " + humanScore;
    document.getElementById("comPoints").innerText = "Points: " + computerScore;

    if(humanScore == 5){
        alert("You won this Match");
        document.getElementById("winLooseMessage").innerText = "You won this Match!";
        humanScore = 0;
        computerScore = 0;
    }
    if(computerScore == 5){
        alert("You lost this Match");
        document.getElementById("winLooseMessage").innerText = "You lost this Match!";
        humanScore = 0;
        computerScore = 0;
    }
}


    
 
