// const
let player = []
let currentGame = []
let count = 0;
const countValue = document.getElementById("count")
const startGameBtn = document.querySelector('.start')
const resetGameBtn = document.querySelector('.reset')
const result = document.querySelector("#result")
const green = document.getElementById('green')
const blue = document.getElementById('blue')
const red = document.getElementById('red')
const yellow = document.getElementById('yellow')
let possibilities = [green, blue, red, yellow]

// // possibilities: ['#A', '#B', '#C', '#D', '#E', '#F', '#G', '#H', '#I', '#J', '#K', '#L', '#M', '#N', '#O', '#P', '#Q', '#R', '#S', '#T', '#U', '#V', '#W', '#X', '#Y', '#Z'],

// Event listeners
startGameBtn.addEventListener('click', newGame)
resetGameBtn.addEventListener('click', clearGame)


// Game functionality
// Functions when CPU is creating a new item to the sequence
// newGame() -> clearGame() -> addCount() -> generateMove() -> showSequence() -> gamePlay -> clearPlayer()


function newGame() {
    clearGame();
    generateMove()
    startGameBtn.removeEventListener('click', newGame)
}


function clearGame() {
    currentGame = [];
    count = 0;
    player = []
    startGameBtn.addEventListener('click', newGame)
}

// function addCount() {
//     game.count++;
//     $('#clickNumber').addClass('animated fadeOutDown');

//     setTimeout(function(){
//       $('#clickNumber').removeClass('fadeOutDown').html(game.count).addClass('fadeInDown');
//     }, 200);

//     generateMove();
//   }

// Generates a random move/color
function generateMove() {
    currentGame.push(possibilities[(Math.floor(Math.random() * possibilities.length))]);
    showSequence();
    console.log(currentGame)
}


function showSequence() {
    let i = 0;
    let sequence = setInterval(function () {
        gamePlay(currentGame[i]);
        i++;
        if (i >= currentGame.length) {
            clearInterval(sequence);
        }
    }, 600)
    clearPlayer();
}


function gamePlay(possibilities) {
    possibilities.classList.add('active');
    setTimeout(function () {
        possibilities.classList.remove('active');
    }, 300);
}

function clearPlayer() {
    player = [];
}



// Functions for checking players moves



function nextLevel() {
    generateMove()
}
