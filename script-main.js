//Added these globally for further usage although getElementByID would be more efficient
let startButton = document.getElementById('startButton');
let rockButton = document.createElement('button');
let paperButton = document.createElement('button');
let scissorButton = document.createElement('button');
let playerScore = document.createElement('div');
let computerScore = document.createElement('div');
let playerScoreCount = 0;
let computerScoreCount = 0;

startButton.addEventListener('click', () => {
    rockButton.setAttribute('id', 'rock');
    paperButton.setAttribute('id','paper');
    scissorButton.setAttribute('id','scissior');
    playerScore.setAttribute('id','score');
    computerScore.setAttribute('id','score');

    rockButton.innerText = "Rock";
    paperButton.innerText = 'Paper';
    scissorButton.innerText = 'Scissor';
    playerScore.innerText = "Player Score: 0";
    computerScore.innerText = "Computer Score: 0";

    startButton.remove();
    document.body.append(playerScore);
    document.body.append(computerScore);
    document.body.appendChild(scissorButton);
    document.body.appendChild(paperButton);
    document.body.appendChild(rockButton);
});

rockButton.addEventListener('click', () =>{
    playGame(1);
})
paperButton.addEventListener('click', () =>{
    playGame(2);
})
scissorButton.addEventListener('click', () =>{
    playGame(3);
})

function endGame(name){
    computerScore.remove();
    scissorButton.remove();
    paperButton.remove();
    rockButton.remove();
    playerScore.innerText = name + ' wins!';
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



function playGame(player){
    const rps = ["Rock", "Paper", "Scissors"]
    let computer = getRandomInt(1,3)
    if( player == computer){
        console.log("The match is a tie!")
        
    } else if(player == 1 && computer == 3){
        console.log("You win the match!")
        playerScoreCount = playerScoreCount + 1;
    } else if(player == 2 && computer ==1){
        console.log("You win the match!")
        playerScoreCount = playerScoreCount + 1;
    } else if(player == 3 && computer == 2){
        playerScoreCount = playerScoreCount + 1;
        console.log("You win the match!")
    } else {
        console.log("You lose the match!")
        computerScoreCount = computerScoreCount + 1;
    }

    playerScore.innerText = 'Player Score: '+ playerScoreCount;
    computerScore.innerText = 'Computer Score: ' + computerScoreCount;
    console.log("Your choice: " + rps[player-1] + ", Computer choice: " + rps[computer-1])

    if(playerScoreCount == 5){
        endGame('You')
    } else if(computerScoreCount == 5){
        endGame('Computer');
    }
}


































// function playRound(){
//     let points = 0;
//     for(let i = 1; i <= 5; i++){
//         console.log("Round: " + i)
//         points = points + playGame()
//         if(i >= 3){
//             if(points - (5-i)<= 0){
//                 console.log("You lost the game :(")
//                 break;
//             } else if(points - (5-i)>=0){
//                 console.log("You won the game!")
//                 break;
//             }
//         }
//     }
//     if (points < 0) {
//         console.log("You lost the game :(");
//     } else if (points > 0) {
//         console.log("You won the game!")
//     }
    
    
//}