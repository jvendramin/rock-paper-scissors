window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.display = "block";
        },
        1
    )
});

document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
});

document.querySelector("#start").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
});

// function to make computer choice
function getComputerChoice() {

    const options = ['ROCK','PAPER','SCISSORS'];
    
    return options[(Math.floor(Math.random() * options.length))];
};

// function to keep score and play round
function playRound(player,pscore,cscore) {

    let comp = getComputerChoice();
    console.log('👀 Computer Choice: ' + comp);
    
    comp = comp.toLowerCase()
    let result;

    if (comp == 'rock' && player == 'scissors') {

        result = 'Computer Wins! 👎'
        cscore = cscore + 1

    } else if (comp == 'scissors' && player == 'paper') {

        result = 'Computer Wins! 👎'
        cscore = cscore + 1

    }  else if (comp == 'paper' && player == 'rock') {

        result = 'Computer Wins! 👎'
        cscore = cscore + 1

    } else if (comp == player) {

        result = 'Draw!'

    } else {

        result = 'Player Wins! 🎉'
        pscore = pscore + 1
    };
    
    return [result,pscore,cscore];
};

let playerScore = 0;
let compScore = 0;
let roundResult;
let scores;

// initial prompt and game setup
// playerChoice = prompt("What's your choice?");
console.log('ROUND 1');
console.log('🗿 Rock...');
console.log('📄 Paper...');
console.log('🗡️ Scissors!');
console.log('=============================');

// round 1
roundResult = playRound(playerChoice.toLowerCase(),playerScore,compScore);
console.log('=============================');
console.log(roundResult[0])
console.log('=============================');
playerScore = roundResult[1];
compScore = roundResult[2];
console.log('Player Score: ' + String(playerScore));
console.log('Computer Score: ' + String(compScore));
console.log('=============================');

// round 2
console.log('ROUND 2');
playerChoice = prompt("What's your choice?");
roundResult = playRound(playerChoice.toLowerCase(),playerScore,compScore);
console.log('=============================');
console.log(roundResult[0])
console.log('=============================');
playerScore = roundResult[1];
compScore = roundResult[2];
console.log('Player Score: ' + String(playerScore));
console.log('Computer Score: ' + String(compScore));
console.log('=============================');

// round 3
console.log('ROUND 3');
playerChoice = prompt("What's your choice?");
roundResult = playRound(playerChoice.toLowerCase(),playerScore,compScore);
console.log('=============================');
console.log(roundResult[0])
console.log('=============================');
playerScore = roundResult[1];
compScore = roundResult[2];
console.log('Player Score: ' + String(playerScore));
console.log('Computer Score: ' + String(compScore));
console.log('=============================');

// round 4
console.log('ROUND 4');
playerChoice = prompt("What's your choice?");
roundResult = playRound(playerChoice.toLowerCase(),playerScore,compScore);
console.log('=============================');
console.log(roundResult[0])
console.log('=============================');
playerScore = roundResult[1];
compScore = roundResult[2];
console.log('Player Score: ' + String(playerScore));
console.log('Computer Score: ' + String(compScore));
console.log('=============================');

// round 5
console.log('ROUND 5');
playerChoice = prompt("What's your choice?");
roundResult = playRound(playerChoice.toLowerCase(),playerScore,compScore);
console.log('=============================');
console.log(roundResult[0])
playerScore = roundResult[1];
console.log('=============================');
playerScore = roundResult[1];
compScore = roundResult[2];
console.log('Player Score: ' + String(playerScore));
console.log('Computer Score: ' + String(compScore));
console.log('=============================');

// print final score
console.log('FINAL SCORE... Player: ' + String(playerScore) + ' - Computer: ' + String(compScore));
console.log('=============================');