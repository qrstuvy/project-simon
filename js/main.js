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
    yellow.addEventListener('click', function () {
        player.push(yellow)
        playerTurn();
        console.log(player.length)
    })
    green.addEventListener('click', function () {
        player.push(green)
        playerTurn();
        console.log(player.length)
    })
    blue.addEventListener('click', function () {
        player.push(blue)
        playerTurn();
        console.log(player.length)
    })
    red.addEventListener('click', function () {
        player.push(red)
        playerTurn();
        console.log(player.length)
    })
}

function disableClicks() {
    yellow.removeEventListener('click', function () {
        player.push(yellow)
        console.log(player.length)
    })
    green.removeEventListener('click', function () {
        player.push(green)
        console.log(player.length)
    })
    blue.removeEventListener('click', function () {
        player.push(blue)
        console.log(player.length)
    })
    red.removeEventListener('click', function () {
        player.push(red)
        console.log(player.length)
    })
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
        clearGame();
    } else {
        console.log('nice!');
        let check = player.length === currentGame.length;
        if (check) {
            if (round == 10) {
                console.log('Congrats!');
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






