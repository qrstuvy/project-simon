// Landing page buttons
const playGameBtn = document.getElementById('play-btn')
const instructionsBtn = document.getElementById('instructions-btn')
const okayBtn = document.getElementById('okay-btn')

// Constants
const rounds = document.getElementById('counter')
const gameText = document.getElementById('game-text')

const letterA = document.getElementById('letter-a')
const letterB = document.getElementById('letter-b')
const letterC = document.getElementById('letter-c')
const letterD = document.getElementById('letter-d')
const letterE = document.getElementById('letter-e')
const letterF = document.getElementById('letter-f')
const letterG = document.getElementById('letter-g')
const letterH = document.getElementById('letter-h')
const letterI = document.getElementById('letter-i')
const letterJ = document.getElementById('letter-j')
const letterK = document.getElementById('letter-k')
const letterL = document.getElementById('letter-l')
const letterM = document.getElementById('letter-m')
const letterN = document.getElementById('letter-n')
const letterO = document.getElementById('letter-o')
const letterP = document.getElementById('letter-p')
const letterQ = document.getElementById('letter-q')
const letterR = document.getElementById('letter-r')
const letterS = document.getElementById('letter-s')
const letterT = document.getElementById('letter-t')
const letterU = document.getElementById('letter-u')
const letterV = document.getElementById('letter-v')
const letterW = document.getElementById('letter-w')
const letterX = document.getElementById('letter-x')
const letterY = document.getElementById('letter-y')
const letterZ = document.getElementById('letter-z')



// variables
let player = []
let currentGame = []
let round = 0
let possibilities = [letterA, letterB, letterC, letterD, letterE, letterF, letterG, letterH, letterI, letterJ, letterK, letterL, letterM, letterN, letterO, letterP, letterQ, letterR, letterS, letterT, letterU, letterV, letterW, letterX, letterY, letterZ]


// Game Buttons
const startGameBtn = document.querySelector('.start')
startGameBtn.addEventListener('click', newGame)

const resetGameBtn = document.querySelector('.reset')
resetGameBtn.addEventListener('click', clearGame)

const backBtn = document.getElementById('back')


// Sections, divs, and others
const landingPage = document.getElementById('landing-page')
const instructionsPage = document.getElementById('instructions-div')
const textSection = document.getElementById('text-section')
const imagesContainer = document.getElementById('images-container')
const imagesGrid = document.getElementById('images-grid')
const gameDiv = document.getElementById('game-div')


// Hides landing page and loads game page
function loadGame() {
    landingPage.classList.add('hide')
    textSection.classList.remove('hide')
    imagesContainer.classList.remove('hide')
    gameDiv.classList.remove('hide')
    playGameBtn.classList.add('hide')
}


// Event Listeners
backBtn.addEventListener('click', () => {
    landingPage.classList.remove('hide')
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

function enableClicks() {
    letterA.addEventListener('click', aPush)
    letterB.addEventListener('click', bPush)
    letterC.addEventListener('click', cPush)
    letterD.addEventListener('click', dPush)
    letterE.addEventListener('click', ePush)
    letterF.addEventListener('click', fPush)
    letterG.addEventListener('click', gPush)
    letterH.addEventListener('click', hPush)
    letterI.addEventListener('click', iPush)
    letterJ.addEventListener('click', jPush)
    letterK.addEventListener('click', kPush)
    letterL.addEventListener('click', lPush)
    letterM.addEventListener('click', mPush)
    letterN.addEventListener('click', nPush)
    letterO.addEventListener('click', oPush)
    letterP.addEventListener('click', pPush)
    letterQ.addEventListener('click', qPush)
    letterR.addEventListener('click', rPush)
    letterS.addEventListener('click', sPush)
    letterT.addEventListener('click', tPush)
    letterU.addEventListener('click', uPush)
    letterV.addEventListener('click', vPush)
    letterW.addEventListener('click', wPush)
    letterX.addEventListener('click', xPush)
    letterY.addEventListener('click', yPush)
    letterZ.addEventListener('click', zPush)


}

function disableClicks() {

    letterA.removeEventListener('click', aPush)
    letterB.removeEventListener('click', bPush)
    letterC.removeEventListener('click', cPush)
    letterD.removeEventListener('click', dPush)
    letterE.removeEventListener('click', ePush)
    letterF.removeEventListener('click', fPush)
    letterG.removeEventListener('click', gPush)
    letterH.removeEventListener('click', hPush)
    letterI.removeEventListener('click', iPush)
    letterJ.removeEventListener('click', jPush)
    letterK.removeEventListener('click', kPush)
    letterL.removeEventListener('click', lPush)
    letterM.removeEventListener('click', mPush)
    letterN.removeEventListener('click', nPush)
    letterO.removeEventListener('click', oPush)
    letterP.removeEventListener('click', pPush)
    letterQ.removeEventListener('click', qPush)
    letterR.removeEventListener('click', rPush)
    letterS.removeEventListener('click', sPush)
    letterT.removeEventListener('click', tPush)
    letterU.removeEventListener('click', uPush)
    letterV.removeEventListener('click', vPush)
    letterW.removeEventListener('click', wPush)
    letterX.removeEventListener('click', xPush)
    letterY.removeEventListener('click', yPush)
    letterZ.removeEventListener('click', zPush)
}


// Functions.push to player array

function aPush() {
    letterA.classList.add('active')
    setTimeout(function () {
        letterA.classList.remove('active')
    }, 300)
    player.push(letterA)
    playerTurn()
    console.log(player.length)
}

function bPush() {
    letterB.classList.add('active')
    setTimeout(function () {
        letterB.classList.remove('active')
    }, 300)
    player.push(letterB)
    playerTurn()
    console.log(player.length)
}

function cPush() {
    letterC.classList.add('active')
    setTimeout(function () {
        letterC.classList.remove('active')
    }, 300)
    player.push(letterC)
    playerTurn()
    console.log(player.length)
}

function dPush() {
    letterD.classList.add('active')
    setTimeout(function () {
        letterD.classList.remove('active')
    }, 300)
    player.push(letterD)
    playerTurn()
    console.log(player.length)
}

function ePush() {
    letterE.classList.add('active')
    setTimeout(function () {
        letterE.classList.remove('active')
    }, 300)
    player.push(letterE)
    playerTurn()
    console.log(player.length)
}

function fPush() {
    letterF.classList.add('active')
    setTimeout(function () {
        letterF.classList.remove('active')
    }, 300)
    player.push(letterF)
    playerTurn()
    console.log(player.length)
}

function gPush() {
    letterG.classList.add('active')
    setTimeout(function () {
        letterG.classList.remove('active')
    }, 300)
    player.push(letterG)
    playerTurn()
    console.log(player.length)
}

function hPush() {
    letterH.classList.add('active')
    setTimeout(function () {
        letterH.classList.remove('active')
    }, 300)
    player.push(letterH)
    playerTurn()
    console.log(player.length)
}

function iPush() {
    letterI.classList.add('active')
    setTimeout(function () {
        letterI.classList.remove('active')
    }, 300)
    player.push(letterI)
    playerTurn()
    console.log(player.length)
}

function jPush() {
    letterJ.classList.add('active')
    setTimeout(function () {
        letterJ.classList.remove('active')
    }, 300)
    player.push(letterJ)
    playerTurn()
    console.log(player.length)
}

function kPush() {
    letterK.classList.add('active')
    setTimeout(function () {
        letterK.classList.remove('active')
    }, 300)
    player.push(letterK)
    playerTurn()
    console.log(player.length)
}

function lPush() {
    letterL.classList.add('active')
    setTimeout(function () {
        letterL.classList.remove('active')
    }, 300)
    player.push(letterL)
    playerTurn()
    console.log(player.length)
}

function mPush() {
    letterM.classList.add('active')
    setTimeout(function () {
        letterM.classList.remove('active')
    }, 300)
    player.push(letterM)
    playerTurn()
    console.log(player.length)
}

function nPush() {
    letterN.classList.add('active')
    setTimeout(function () {
        letterN.classList.remove('active')
    }, 300)
    player.push(letterN)
    playerTurn()
    console.log(player.length)
}

function oPush() {
    letterO.classList.add('active')
    setTimeout(function () {
        letterO.classList.remove('active')
    }, 300)
    player.push(letterO)
    playerTurn()
    console.log(player.length)
}

function pPush() {
    letterP.classList.add('active')
    setTimeout(function () {
        letterP.classList.remove('active')
    }, 300)
    player.push(letterP)
    playerTurn()
    console.log(player.length)
}

function qPush() {
    letterQ.classList.add('active')
    setTimeout(function () {
        letterQ.classList.remove('active')
    }, 300)
    player.push(letterQ)
    playerTurn()
    console.log(player.length)
}

function rPush() {
    letterR.classList.add('active')
    setTimeout(function () {
        letterR.classList.remove('active')
    }, 300)
    player.push(letterR)
    playerTurn()
    console.log(player.length)
}

function sPush() {
    letterS.classList.add('active')
    setTimeout(function () {
        letterS.classList.remove('active')
    }, 300)
    player.push(letterS)
    playerTurn()
    console.log(player.length)
}


function tPush() {
    letterT.classList.add('active')
    setTimeout(function () {
        letterT.classList.remove('active')
    }, 300)
    player.push(letterT)
    playerTurn()
    console.log(player.length)
}


function uPush() {
    letterU.classList.add('active')
    setTimeout(function () {
        letterU.classList.remove('active')
    }, 300)
    player.push(letterU)
    playerTurn()
    console.log(player.length)
}


function vPush() {
    letterV.classList.add('active')
    setTimeout(function () {
        letterV.classList.remove('active')
    }, 300)
    player.push(letterV)
    playerTurn()
    console.log(player.length)
}

function wPush() {
    letterW.classList.add('active')
    setTimeout(function () {
        letterW.classList.remove('active')
    }, 300)
    player.push(letterW)
    playerTurn()
    console.log(player.length)
}

function xPush() {
    letterX.classList.add('active')
    setTimeout(function () {
        letterX.classList.remove('active')
    }, 300)
    player.push(letterX)
    playerTurn()
    console.log(player.length)
}


function yPush() {
    letterY.classList.add('active')
    setTimeout(function () {
        letterY.classList.remove('active')
    }, 300)
    player.push(letterY)
    playerTurn()
    console.log(player.length)
}

function zPush() {
    letterZ.classList.add('active')
    setTimeout(function () {
        letterZ.classList.remove('active')
    }, 300)
    player.push(letterZ)
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