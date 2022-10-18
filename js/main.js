// Landing page buttons
const playGameBtn = document.getElementById('play-btn')
const instructionsBtn = document.getElementById('instructions-btn')
const okayBtn = document.getElementById('okay-btn')

// Constants
const countValue = document.getElementById("count")
const yellow = document.getElementById('yellow')
const green = document.getElementById('green')
const blue = document.getElementById('blue')
const red = document.getElementById('red')
const rounds = document.getElementById('counter')

// variables
let player = []
let currentGame = []
let round = 0
let possibilities = [green, blue, red, yellow]


// Game Buttons
const startGameBtn = document.querySelector('.start')
startGameBtn.addEventListener('click', newGame)

const resetGameBtn = document.querySelector('.reset')
resetGameBtn.addEventListener('click', clearGame)

const backBtn = document.getElementById('back')


// Sections and divs DOM
const landingPage = document.getElementById('landing-page')
const instructionsPage = document.getElementById('instructions-div')
const gameSection = document.getElementById('game-section')
const gameText = document.getElementById('game-text')

// sets the timer conditions and displays on the UI
const runTimer = () => {
    if (time === 0) {
        isGameOver = true
    } else {
        time--
    }
    timerText.innerText = time
}


// Hides landing page and loads game page
function loadGame() {
    landingPage.classList.add('hide')
    gameSection.classList.remove('hide')
}


// Event Listeners
backBtn.addEventListener('click', () => {
    landingPage.classList.remove('hide')
    gameSection.classList.add('hide')
    clearGame()
})

playGameBtn.addEventListener('click', loadGame)

instructionsBtn.addEventListener('click', () => {
    instructionsPage.classList.remove('hide')
})

okayBtn.addEventListener('click', () => {
    instructionsPage.classList.add('hide')
})

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


// Functions.push to player array

function yellowPush() {
    yellow.classList.add('active')
    setTimeout(function () {
        yellow.classList.remove('active')
    }, 300)
    player.push(yellow)
    playerTurn()
    console.log(player.length)
}
function greenPush() {
    green.classList.add('active')
    setTimeout(function () {
        green.classList.remove('active')
    }, 300)
    player.push(green)
    playerTurn()
    console.log(player.length)
}
function bluePush() {
    blue.classList.add('active')
    setTimeout(function () {
        blue.classList.remove('active')
    }, 300)
    player.push(blue)
    playerTurn()
    console.log(player.length)
}
function redPush() {
    red.classList.add('active')
    setTimeout(function () {
        red.classList.remove('active')
    }, 300)
    player.push(red)
    playerTurn()
    console.log(player.length)
}


// Game functionality
// Functions when CPU is creating a new item to the sequence

function newGame() {
    clearGame()
    generateMove()
    startGameBtn.removeEventListener('click', newGame)
    addRound()
}


function clearGame() {
    currentGame = []
    player = []
    round = 0
    rounds.innerText = round

    startGameBtn.addEventListener('click', newGame)
}

function addRound() {
    round++;
    rounds.innerText = round
}

// Generates a random move/color
function generateMove() {
    currentGame.push(possibilities[(Math.floor(Math.random() * possibilities.length))])
    setTimeout(() => {
        showSequence()
    }, "600")
    console.log(currentGame)
}


function showSequence() {
    let i = 0;
    let sequence = setInterval(function () {
        gamePlay(currentGame[i])
        i++;
        if (i >= currentGame.length) {
            clearInterval(sequence)
        } enableClicks()
    }, 600)
    clearPlayer()
}


function gamePlay(sequence) {
    sequence.classList.add('active')
    setTimeout(function () {
        sequence.classList.remove('active')
    }, 300)
}
function clearPlayer() {
    player = []
}


// Functions for checking players moves

function playerTurn() {
    if (player[player.length - 1] !== currentGame[player.length - 1]) {
        console.log('game over!')
        gameText.innerText = "Oh no, nice try! Game over."
        disableClicks()
    } else {
        console.log('nice!')
        if (player.length === currentGame.length) {
            if (round == 10) {
                console.log('Congrats! You win!!')
                gameText.innerText = "Congrats! You win!!"
            } else {
                console.log('Next round!')
                gameText.innerText = "Nice! Next round!"
                nextLevel();
            }
        }
    }
}

function nextLevel() {
    generateMove()
    addRound()
}