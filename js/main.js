// constants
let player = []
let currentGame = []
let round = 0
const countValue = document.getElementById("count")
const startGameBtn = document.querySelector('.start')
const resetGameBtn = document.querySelector('.reset')
const result = document.querySelector("#result")
const yellow = document.getElementById('yellow')
const green = document.getElementById('green')
const blue = document.getElementById('blue')
const red = document.getElementById('red')
let possibilities = [green, blue, red, yellow]
const rounds = document.getElementById('counter')

// // possibilities: ['#A', '#B', '#C', '#D', '#E', '#F', '#G', '#H', '#I', '#J', '#K', '#L', '#M', '#N', '#O', '#P', '#Q', '#R', '#S', '#T', '#U', '#V', '#W', '#X', '#Y', '#Z'],

// Event listeners
startGameBtn.addEventListener('click', newGame)
resetGameBtn.addEventListener('click', clearGame)


function enableClicks() {
    yellow.addEventListener('click', yellowPush)

    green.addEventListener('click', greenPush)

    blue.addEventListener('click', bluePush)

    red.addEventListener('click', redPush)
}

function disableClicks() {

    yellow.removeEventListener('click', yellowPush)

    green.removeEventListener('click', greenPush)

    blue.removeEventListener('click', bluePush)

    red.removeEventListener('click', redPush)

}


function yellowPush() {
    player.push(yellow)
    playerTurn();
    console.log(player.length)
}
function greenPush() {
    player.push(green)
    playerTurn();
    console.log(player.length)
}
function bluePush() {
    player.push(blue)
    playerTurn();
    console.log(player.length)
}
function redPush() {
    player.push(red)
    playerTurn();
    console.log(player.length)
}


// Game functionality
// Functions when CPU is creating a new item to the sequence

function newGame() {
    clearGame();
    generateMove()
    startGameBtn.removeEventListener('click', newGame)
    addRound()
}


function clearGame() {
    currentGame = [];
    round = 0;
    rounds.innerText = round
    player = []
    startGameBtn.addEventListener('click', newGame)
}

function addRound() {
    round++;
    rounds.innerText = round
}

// Generates a random move/color
function generateMove() {
    currentGame.push(possibilities[(Math.floor(Math.random() * possibilities.length))]);
    showSequence();
    disableClicks()
    console.log(currentGame)
}


function showSequence() {
    let i = 0;
    let sequence = setInterval(function () {
        gamePlay(currentGame[i]);
        i++;
        if (i >= currentGame.length) {
            clearInterval(sequence);
        } enableClicks()
    }, 600)
    clearPlayer();
}


function gamePlay(sequence) {
    sequence.classList.add('active');
    setTimeout(function () {
        sequence.classList.remove('active');
    }, 300);
}

function clearPlayer() {
    player = [];
}


// Functions for checking players moves

function playerTurn() {
    if (player[player.length - 1] !== currentGame[player.length - 1]) {
        console.log('game over!')
        disableClicks()
        clearGame();
    } else {
        console.log('nice!');
        if (player.length === currentGame.length) {
            if (round == 10) {
                console.log('Congrats! You win!!');
            } else {
                console.log('Next round!');
                nextLevel();
            }
        }
    }
}

function nextLevel() {
    generateMove()
    addRound()
}












