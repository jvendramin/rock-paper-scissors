window.onload = myMain;
let round = 1
let result;
let playerChoice;
let compChoice;
let cscore = 0;
let pscore = 0;
let blurb;
let insultChoice;
const sndtrack = new Audio("soundtrack.mp3");
const loserSound = new Audio("loser.mp3");
const winnerSound = new Audio("winner.mp3");
let output = document.getElementById("output");
let replay = document.getElementById("replay");
actionbutton = document.getElementById("actionbutton");
actionbutton.addEventListener("click", game);

resetbutton = document.getElementById("reset");
resetbutton.addEventListener("click", refreshPage);

function refreshPage(){
    window.location.reload();
} 

function myMain() {
    document.getElementById("emojiButtons").onclick = button;
};

// function decides what button user clicked
function button(e) {

    if (e.target.tagName == 'BUTTON') {

        playerChoice = e.target.id;

        result = playRound(compChoice,playerChoice);

        if (result == 'Computer Wins! 👎') {

            loserSound.play();
        }

        if (result == 'Player Wins! 🎉') {

            winnerSound.play();
            startConfetti();
            stopConfetti();
        }

        document.getElementById("replay").style.display = "block";
        output.innerHTML = result;
        replay.innerHTML = blurb;

        document.getElementById("emojiButtons").style.display = "none";

        setTimeout(()=> {
            reset(result);
         },2000)

    };

};

// function to make computer choice
function getComputerChoice() {
    const options = ['rock','paper','scissors'];
    replay.innerHTML = "Computer has made their pick...";
    return options[(Math.floor(Math.random() * options.length))];
};

// function to start the game
function game() {

    sndtrack.play();

    setTimeout(()=> {

    output.innerHTML = "~ Round: " + round + ' ~';
    document.getElementById("emojiButtons").style.display = "flex";
    
    // make computer choice and update screen
    compChoice = getComputerChoice()
    document.getElementById("actionbutton").style.display = "none";

    },200)

};

// function to play round, decide winner, update score
function playRound(comp,player) {

    if (comp == 'rock' && player == 'scissors') {
        result = 'Computer Wins! 👎'
        cscore = cscore += 1
        blurb = 'Rock beats Scissors'


    } else if (comp == 'scissors' && player == 'paper') {
        result = 'Computer Wins! 👎'
        cscore = cscore += 1
        blurb = 'Scissors beats Paper'

    }  else if (comp == 'paper' && player == 'rock') {
        result = 'Computer Wins! 👎'
        cscore = cscore += 1
        blurb = 'Paper beats Rock'

    } else if (player == 'rock' && comp == 'scissors') {
        result = 'Player Wins! 🎉'
        pscore = pscore += 1
        blurb = 'Rock beats Scissors'


    } else if (player == 'scissors' && comp == 'paper') {
        result = 'Player Wins! 🎉'
        pscore = pscore += 1
        blurb = 'Scissors beats Paper'

    }  else if (player == 'paper' && comp == 'rock') {
        result = 'Player Wins! 🎉'
        pscore = pscore += 1
        blurb = 'Paper beats Rock'

    } else if (comp == player) {
        result = 'Draw!'
        blurb = 'No Winner This Time'
    }
    return result;
};

//  for starting the confetti
const startConfetti = () => {
    setTimeout(function() {
        confetti.start()
    }, 0);
};

//  for stopping the confetti 
const stopConfetti = () => {
    setTimeout(function() {
        confetti.stop()
    }, 2000);
};

// print score, advance to next round, reset buttons
function reset(res) {

    round += 1;
    let scoreboard = 'Computer: ' + cscore + ' <> Player: ' + pscore;

    if (res != 'Draw!') {
        output.innerHTML = blurb;
    };


    if (cscore > pscore) {
        insultPlayer()
    } else {
        output.innerHTML = res;
    }
    
    
    document.getElementById("replay").style.display = "block";
    replay.innerHTML = scoreboard;

    // delay for 3s and continue
    setTimeout(()=> {
        //document.getElementById("replay").style.display = "none";
        document.getElementById("emojiButtons").style.display = "flex";
        output.innerHTML = '~ Round: ' + round + ' ~';
     },3500)

    // delay for another 3s and start next round
    setTimeout(()=> {
        game()
     },3000)

};

function insultPlayer() {

    const insults = [
        "You're horrible at this",
        "I'm not even real...",
        "I'd hit restart if I were you",
        "Quit while you're ahead...too late"
    ];
    insultChoice = insults[(Math.floor(Math.random() * insults.length))];

    output.innerHTML = insultChoice;

};