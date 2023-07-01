window.onload = myMain;
let round = 1
let result;
let playerChoice;
let compChoice;
let cscore = 0;
let pscore = 0;
let output = document.getElementById("output");
let replay = document.getElementById("replay");
actionbutton = document.getElementById("actionbutton");
actionbutton.addEventListener("click", game);

function myMain() {
    document.getElementById("emojiButtons").onclick = button;
};

// function decides what button user clicked
function button(e) {

    if (e.target.tagName == 'BUTTON') {

        playerChoice = e.target.id;

        result = playRound(compChoice,playerChoice);

        output.innerHTML = result;
        let roundResult = 'Computer Selected: ' + compChoice.toUpperCase() + ' & ' + 'Player Selected: ' + playerChoice.toUpperCase();
        replay.innerHTML = roundResult;
        document.getElementById("emojiButtons").style.display = "none";

        reset();

    };

};

// function to make computer choice
function getComputerChoice() {
    const options = ['rock','paper','scissors'];
    return options[(Math.floor(Math.random() * options.length))];
};

// function to start the game
function game() {

    output.innerHTML = "Round" + round;
    document.getElementById("emojiButtons").style.display = "flex";
    compChoice = getComputerChoice()
    output.innerHTML = "Computer has selected...";
    document.getElementById("actionbutton").style.display = "none";

};

// function to play round, decide winner, update score
function playRound(comp,player) {

    if (comp == 'rock' && player == 'scissors') {
        result = 'Computer Wins! 👎'
        cscore = cscore += 1

    } else if (comp == 'scissors' && player == 'paper') {
        result = 'Computer Wins! 👎'
        cscore = cscore += 1

    }  else if (comp == 'paper' && player == 'rock') {
        result = 'Computer Wins! 👎'
        cscore = cscore += 1

    } else if (comp == player) {
        result = 'Draw!'

    } else {
        result = 'Player Wins! 🎉'
        pscore = pscore += 1
    }

    return result;
};

// print score, advance to next round, reset buttons
function reset() {

    round += 1;
    document.getElementById("replay").style.display = "block";
    let scoreboard = 'Computer: ' + cscore + ' <> Player: ' + pscore;
    replay.innerHTML = scoreboard;

    // delay for 1.5s and continue
    setTimeout(()=> {
        document.getElementById("replay").style.display = "none";
        document.getElementById("emojiButtons").style.display = "flex";
        output.innerHTML = 'Round: ' + round;
     },1500)

    // delay for another 1.5s and start next round
    setTimeout(()=> {
        game()
     },1500)

};