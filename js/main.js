// Constants
const rounds = document.getElementById('counter')
const gameText = document.getElementById('game-text')
const timerText = document.getElementById('timer-text')
const imageGrid = document.querySelector('#images-grid')

// variables
let player = []
let currentGame = []
let round = 0
let possibilities = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let time = 5

// Game Buttons
const playGameBtn = document.getElementById('play-btn')

const instructionsBtn = document.getElementById('instructions-btn')

const okayBtn = document.getElementById('okay-btn')

const startGameBtn = document.querySelector('.start')
startGameBtn.addEventListener('click', newGame)

const resetGameBtn = document.querySelector('.reset')
resetGameBtn.addEventListener('click', clearGame)

const backBtn = document.getElementById('back')


// Sections, divs, and others
const instructionsPage = document.getElementById('instructions-div')
const textSection = document.getElementById('text-section')
const imagesContainer = document.getElementById('images-container')
const gameDiv = document.getElementById('game-div')


// Loads game page
function loadGame() {
    textSection.classList.remove('hide')
    imagesContainer.classList.remove('hide')
    gameDiv.classList.remove('hide')
    playGameBtn.classList.add('hide')
}



// Event Listeners
backBtn.addEventListener('click', () => {
    textSection.classList.add('hide')
    imagesContainer.classList.add('hide')
    gameDiv.classList.add('hide')
    playGameBtn.classList.remove('hide')
    clearGame()
})

playGameBtn.addEventListener('click', loadGame)

instructionsBtn.addEventListener('click', () => {
    instructionsPage.classList.remove('hide')
})

okayBtn.addEventListener('click', () => {
    instructionsPage.classList.add('hide')
})


// Enable/disable letter clicks

function playerClick(event) {
    event.target.classList.add('active')
    setTimeout(function () {
        event.target.classList.remove('active')
    }, 300)
    event.stopImmediatePropagation()
    player.push(event.target.id)
    playerTurn()
}

function enableClicks() {
    imageGrid.classList.remove('unclickable')
    imageGrid.addEventListener('click', playerClick)
}


function disableClicks() {
    imageGrid.classList.add('unclickable')
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
    gameText.innerText = "Let's go!"
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
            enableClicks()
        }
    }, 600)
    clearPlayer()
    console.log(player)
}


function gamePlay(sequence) {
    const image = imageGrid.querySelector(`#${sequence}`)
    image.classList.add('active')
    setTimeout(function () {
        image.classList.remove('active')
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
            } else if (round == 5) {
                console.log('WOW LOOK AT YOU!')
                gameText.innerText = "WOW LOOK AT YOU! Keep going!"
                nextLevel();
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
    disableClicks()
}