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