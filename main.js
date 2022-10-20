// Variables--------------------------------------------------------------------------------------------------
const rounds = document.getElementById('counter')
const maxRounds = document.getElementById('max-rounds')
const maxRoundsText = document.getElementById('max-rounds-text')
const gameText = document.getElementById('game-text')
let possibilities = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


// Initial state of game----------------------------------------------------------------------------------------
let player = []
let currentGame = []
let round = 0
let difficulty = null

// Game Buttons-------------------------------------------------------------------------------------------------
const instructionsBtn = document.getElementById('instructions-btn')

const okayBtn = document.getElementById('okay-btn')

const startGameBtn = document.getElementById('start-btn')

const resetGameBtn = document.querySelector('.reset')

const backBtn = document.getElementById('back')

const normalBtn = document.getElementById('normal-btn')

const hardBtn = document.getElementById('hard-btn')


// Sections, divs, and others------------------------------------------------------------------------------------
const instructionsPage = document.getElementById('instructions-div')
// Section aside from the game container
const textSection = document.getElementById('text-section')
// Div that contains the entire grid, game and buttons
const imagesContainer = document.getElementById('images-container')
// Div that wraps the grid
const gameDiv = document.getElementById('game-div')
// Div where letters are placed on the grid
const imagesGrid = document.querySelector('#images-grid')
// Div containing difficulty buttons
const difficultyPage = document.getElementById('difficulty-div')

// Event Listeners for buttons-----------------------------------------------------------------------------------
startGameBtn.addEventListener('click', newGame)

resetGameBtn.addEventListener('click', clearGame)

backBtn.addEventListener('click', () => {
    textSection.classList.add('hide')
    imagesContainer.classList.add('hide')
    gameDiv.classList.add('hide')
    normalBtn.classList.remove('hide')
    hardBtn.classList.remove('hide')
    clearGame()
})


instructionsBtn.addEventListener('click', () => {
    instructionsPage.classList.remove('hide')
})

okayBtn.addEventListener('click', () => {
    instructionsPage.classList.add('hide')
})

normalBtn.addEventListener('click', () => {
    difficulty = "normal"
    maxRounds.innerText = "5"
    maxRoundsText.innerText = "5"
    loadGame()
})

hardBtn.addEventListener('click', () => {
    difficulty = "hard"
    maxRounds.innerText = "10"
    maxRoundsText.innerText = "10"
    loadGame()
})


// Loads game page---------------------------------------------------------------------------------------------------
function loadGame() {
    textSection.classList.remove('hide')
    imagesContainer.classList.remove('hide')
    gameDiv.classList.remove('hide')
    normalBtn.classList.add('hide')
    hardBtn.classList.add('hide')
}


// Enable/disable player inputs on click during specific portions of the game----------------------------------------
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
    imagesGrid.classList.remove('unclickable')
    imagesGrid.addEventListener('click', playerClick)
}


function disableClicks() {
    imagesGrid.classList.add('unclickable')
}



// Game functionality/functions when CPU is creating a new item to the sequence---------------------------------
// New game initialization when pressing play game button
function newGame() {
    generateMove()
    startGameBtn.removeEventListener('click', newGame)
    addRound()
}

// Resets game to initial state on reset button click
function clearGame() {
    if (difficulty === "normal") {
        maxRounds.innerText = "5"
        maxRoundsText.innerText = "5"
    } else {
        maxRounds.innerText = "10"
        maxRoundsText.innerText = "10"
    }
    currentGame = []
    player = []
    round = 0
    rounds.innerText = round
    gameText.innerText = "Let's go!"
    startGameBtn.addEventListener('click', newGame)
    initialImage()
}
// Adds to round counter/text everytime player proceeds to next level
function addRound() {
    round++;
    rounds.innerText = round
}

// Function to generate a random move
function generateMove() {
    currentGame.push(possibilities[(Math.floor(Math.random() * possibilities.length))])
    setTimeout(() => {
        showSequence()
    }, "600")
}
// Function that replays/shows entire sequence to player in addition to the newly generated move
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
}

// Function nested into the showSequence function to flash letters by adding .active containing a white bg-color
function gamePlay(sequence) {
    const image = imagesGrid.querySelector(`#${sequence}`)
    image.classList.add('active')
    setTimeout(function () {
        image.classList.remove('active')
    }, 300)
}

// Clears the player's array to initial state prior to player's turn
function clearPlayer() {
    player = []
}


// Function for checking player's input and comparing to currentGame's input--------------------------------------------
function playerTurn() {
    if (player[player.length - 1] !== currentGame[player.length - 1]) {
        gameText.innerText = "Oh no, nice try! Game over."
        disableClicks()
    } else {
        if (player.length === currentGame.length) {
            if (difficulty === "normal") {
                if (round == 5) {
                    gameText.innerText = "Congratulations! You did it!"
                    changeImage()
                } else if (round == 2) {
                    gameText.innerText = "WOW LOOK AT YOU! Keep going!"
                    nextLevel();
                } else {
                    gameText.innerText = "Nice! Next round!"
                    nextLevel();
                }
            }
            else {
                if (round == 10) {
                    gameText.innerText = "Congratulations! You did it!"
                    changeImage()
                } else if (round == 5) {
                    gameText.innerText = "WOW LOOK AT YOU! Keep going!"
                    nextLevel();
                } else {
                    gameText.innerText = "Nice! Next round!"
                    nextLevel();
                }
            }
        }
    }
}


// Image change function depending on round
function changeImage() {
    document.querySelector('.starting-image').classList.add('hide')
    document.querySelector('.victory').classList.remove('hide')
}

function initialImage() {
    document.querySelector('.starting-image').classList.remove('hide')
    document.querySelector('.victory').classList.add('hide')
}

// Function to progress to next level that loops back to generate move, adds a round and disables player input
function nextLevel() {
    generateMove()
    addRound()
    disableClicks()
}
