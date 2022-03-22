//this part makes the images light up/revert on mouseover

let playerScore = 0;
let AIScore = 0;

const rockButtonManager = document.getElementById("rock-button");
rockButtonManager.addEventListener("mouseover",lightup);
rockButtonManager.addEventListener("mouseout",revert);
rockButtonManager.addEventListener("click",playGame);

const paperButtonManager = document.getElementById("paper-button");
paperButtonManager.addEventListener("mouseover",lightup);
paperButtonManager.addEventListener("mouseout",revert);
paperButtonManager.addEventListener("click",playGame);

const scissorButtonManager = document.getElementById("scissor-button");
scissorButtonManager.addEventListener("mouseover",lightup);
scissorButtonManager.addEventListener("mouseout",revert);
scissorButtonManager.addEventListener("click",playGame);

function lightup(e){
    const target = document.querySelector(`#${e.target.id}`);
    target.classList.add('moused-over');
};

function revert(e){
    const target = document.querySelector(`#${e.target.id}`);
    target.classList.remove('moused-over');
}

function playGame(e){
    const target = document.querySelector(`#${e.target.id}`)

    if(playerScore == 3 || AIScore == 3){
        return
    }else{

        const result = singleRound(userParse(e),computerPlay());
        if(result[0] == 0){ //on win

            playerScore = playerScore + 1;

            if(playerScore == 3){
                //add game over text
                const gameOver = document.querySelector(".game-over");
                const content = document.createElement('div');
                content.classList.add('content');
                content.textContent = `Well done! You have beaten the fearsome AI. Refresh the page to play again!`
                gameOver.replaceChildren(content);
            }
            //Creating middle outcome text
            const textPlace = document.querySelector(".outcome-text");
            const content = document.createElement('div');
            content.classList.add('content');
            content.textContent = result[1];
            textPlace.replaceChildren(content)

            //Update player score
            const scorePlace = document.querySelector(".player-score");
            const score = document.createElement('div');
            score.classList.add('content');
            score.textContent = `Player Score: ${playerScore}`
            scorePlace.replaceChildren(score)

        }else if(result[0] == 1){ //on loss

            AIScore = AIScore + 1;

            if(AIScore == 3){
                const gameOver = document.querySelector(".game-over");
                const content = document.createElement('div');
                content.classList.add('content');
                content.textContent = `Unfortunately, you have failed. Refresh the page to try again!`
                gameOver.replaceChildren(content)
            }
            //Creating middle outcome text
            const textPlace = document.querySelector(".outcome-text");
            const content = document.createElement('div');
            content.classList.add('content')
            content.textContent = result[1];
            textPlace.replaceChildren(content)

            //Update AI Score
            const scorePlace = document.querySelector(".ai-score");
            const score = document.createElement('div');
            score.classList.add('content');
            score.textContent = `AI Score: ${AIScore}`
            scorePlace.replaceChildren(score)

        }else if(result[0] == 2){ //on tie
            
            //Creating middle outcome text
            const textPlace = document.querySelector(".outcome-text");
            const content = document.createElement('div');
            content.classList.add('content');
            content.textContent = result[1];
            textPlace.replaceChildren(content)

            //don't update either score in this case

        }else{ //for errors
            console.log("unexpected result from singleRound");
            console.log(result)
        };
    };
};

function userParse(e){
    if(e.target.id == "rock-button"){
        return "ROCK"
    }else if(e.target.id == "paper-button"){
        return "PAPER"
    }else if(e.target.id == "scissor-button"){
        return "SCISSORS"
    }else{
        console.log("Issue in userParse function")
        return
    };
};




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
        return[result,"It was a tie. Choose again!"];   
    }else if(capsPlayerSelection == "ROCK" && computerSelection == "Paper"){
        let result = 1;
        return[result,"You lost...Paper beats Rock"];
    }else if(capsPlayerSelection == "ROCK" && computerSelection == "Scissors"){
        let result = 0;
        return[result,"You won! Rock beats Scissors"];
    }else if(capsPlayerSelection == "PAPER" && computerSelection == "Rock"){
        let result = 0;
        return[result,"You won! Paper beats Rock"];
    }else if(capsPlayerSelection == "PAPER" && computerSelection == "Paper"){
        let result = 2;
        return[result,"It was a tie. Choose again!"];
    }else if(capsPlayerSelection == "PAPER" && computerSelection == "Scissors"){
        let result = 1;
        return[result, "You lost...Scissors beat Paper"];
    }else if(capsPlayerSelection == "SCISSORS" && computerSelection == "Rock"){
        let result = 1;
        return[result,"You lost...Rock beats Scissors"];
    }else if(capsPlayerSelection == "SCISSORS" && computerSelection == "Paper"){
        let result = 0;
        return[result, "You Won! Scissors beats Paper"];
    }else if(capsPlayerSelection == "SCISSORS" && computerSelection == "Scissors"){
        let result = 2;
        return[result,"It's a tie. Choose again!"];
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