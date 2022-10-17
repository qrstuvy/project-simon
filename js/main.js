// const
let player = []
let currentGame = []
let count = 0;
let possibilities = ['green', 'blue', 'red', 'yellow']
const countValue = document.getElementById("count")
const startGameBtn = document.querySelector('.start').addEventListener('click', newGame)
const result = document.querySelector("#result")

const green = document.getElementById('green')
const blue = document.getElementById('blue')
const red = document.getElementById('red')
const yellow = document.getElementById('yellow')

// // possibilities: ['#A', '#B', '#C', '#D', '#E', '#F', '#G', '#H', '#I', '#J', '#K', '#L', '#M', '#N', '#O', '#P', '#Q', '#R', '#S', '#T', '#U', '#V', '#W', '#X', '#Y', '#Z'],


// Game functionality
// Functions when CPU is creating a new item to the sequence

function newGame() {
    clearGame();
    generateMove()
}


function clearGame() {
    currentGame = [];
    count = 0;
}

// Generates a random move/color
function generateMove() {
    currentGame.push(possibilities[(Math.floor(Math.random() * possibilities.length))]);
    startSequence();
    console.log(currentGame)
}


function startSequence() {
    let i = 0;
    let sequence = setInterval(function () {
        gamePlay(currentGame[i]);
        i++;
        if (i >= currentGame.length) {
            clearInterval(sequence);
        }
    }, 1000)
    clearPlayer();
}


function gamePlay(event) {
    event.target.classList.add('active');
    setTimeout(function () {
        event.target.classList.remove('active');
    }, 500);
}

function clearPlayer() {
    player = [];
}




// Functions for player to repeat the pattern

// function playerTurn(){
//     - Waits for player input and check to see if the correct choice has been clicked
// }

// function nextLevel(){
//     - Calls on function to add to counter
// }

// function addToCounter(){
//     - Adds the number of clicks to the counter to allow player to know what round they are on
//     - Calls on generateMoves function to repeat pattern and create a new move at the end
// }
