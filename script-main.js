function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



function getPlayerSelection(){
    let answer = parseInt(prompt("Pick an option: 1. Rock 2. Paper 3. Scissors"))
    return answer
}

function playGame(){
    let points = 0;
    const rps = ["Rock", "Paper", "Scissors"]
    let computer = getRandomInt(1,3)
    let player = getPlayerSelection()
    if( player == computer){
        console.log("The match is a tie!")
        
    } else if(player == 1 && computer == 3){
        console.log("You win the match!")
        points += 1;
    } else if(player == 2 && computer ==1){
        console.log("You win the match!")
        points += 1;
    } else if(player == 3 && computer == 2){
        points += 1;
        console.log("You win the match!")
    } else {
        console.log("You lose the match!")
        points -= 1
    }
    console.log("Your choice: " + rps[player-1] + ", Computer choice: " + rps[computer-1])
    return points
}

function playRound(){
    let points = 0;
    for(let i = 1; i <= 5; i++){
        console.log("Round: " + i)
        points = points + playGame()
        if(i >= 3){
            if(points - (5-i)<= 0){
                console.log("You lost the game :(")
                break;
            } else if(points - (5-i)>=0){
                console.log("You won the game!")
                break;
            }
        }
    }
    if (points < 0) {
        console.log("You lost the game :(");
    } else if (points > 0) {
        console.log("You won the game!")
    }
    
    
}