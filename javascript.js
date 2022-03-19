// First, setup function computerPlay that chooses R P or S randomly

function computerPlay() {
    // returns random number from 0 to 3, which is then mapped to either rock, paper, or scissors (1, 2, and 3 respectively).
    let result = Math.floor(Math.random() * 2.99999999);
    const compare = result.toString(); 

    if(compare == "0"){
        let choice = "Rock";
        return choice;
    }else if(compare == "1"){
        let choice = "Paper";
        return choice;
    }else if(compare == "2"){
        let choice = "Scissors";
        return choice;
    }else{
        let choice = "Something went wrong..";
        return choice;
    }
}

function singleRound(playerSelection, computerSelection){

    let result = 0; //initializing result variable
    let capsPlayerSelection = playerSelection.toUpperCase();

    if(capsPlayerSelection == "ROCK" && computerSelection == "Rock"){
        let result = 2;     
        return[result,"It's a tie! Choose again"];   
    }else if(capsPlayerSelection == "ROCK" && computerSelection == "Paper"){
        let result = 1;
        return[result,"You Lose! Paper beats Rock"];
    }else if(capsPlayerSelection == "ROCK" && computerSelection == "Scissors"){
        let result = 0;
        return[result,"You Win! Rock beats Scissors"];
    }else if(capsPlayerSelection == "PAPER" && computerSelection == "Rock"){
        let result = 0;
        return[result,"You Win! Paper beats Rock"];
    }else if(capsPlayerSelection == "PAPER" && computerSelection == "Paper"){
        let result = 2;
        return[result,"It's a tie! Choose again"];
    }else if(capsPlayerSelection == "PAPER" && computerSelection == "Scissors"){
        let result = 1;
        return[result, "You Lose! Scissors beat Paper"];
    }else if(capsPlayerSelection == "SCISSORS" && computerSelection == "Rock"){
        let result = 1;
        return[result,"You Lose! Rock beats Paper"];
    }else if(capsPlayerSelection == "SCISSORS" && computerSelection == "Paper"){
        let result = 0;
        return[result, "You Win! Scissors beat Paper"];
    }else if(capsPlayerSelection == "SCISSORS" && computerSelection == "Scissors"){
        let result = 2;
        return[result,"It's a tie! Choose again"];
    }else
    console.log("Something went wrong...make sure you spelled your choice correctly!");
}

function game(){ //plays 5 rounds of RPS, keeps track of score
    var score = 0; //initializing global score variable
    for(let i = 0; i < 5; i++){

        let userChoice = window.prompt("Choose your fighter! Rock, paper, or scissors.","Enter your choice here");
        let outcome = singleRound(userChoice,computerPlay());
        console.log(outcome[1])
        if(outcome[0] == 0){
            score = ++score
        }else if(outcome[0] == 2){
            i = --i;
        }else if(outcome[0] == 1){
            
        }else
        console.log("Something went wrong...")
    }

    if(score >= 3){
        return `Congratulations! You have won with a score of ${score}!`;
    }else
        return `We're so sorry, but a score of ${score} means you are the loser`;
}