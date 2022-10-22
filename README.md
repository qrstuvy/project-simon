# Simon game with a Stranger Things Remix

## Background

- Classic simon game with 26 possibilities rather than the usual 4 colors based on all of the letters of the alphabet in the Stranger Thing's scene where Christmas lights are hung and lit as letters were selected

## Wireframe (Image before production of game)

![Quick sketch of game](/images/quicksketch.png)

## Screenshots

![Landing page screenshot](/images/landingpage.jpg)

![Game page screenshot](/images/gamepage.jpg)

## Technologies Used

    - JavaScript ES6
    - HTML5
    - CSS 3
    - Paint 3D

## Info
[Simon Game Link](https://qrstuvy.github.io/simon-things/)

## Getting Started

    - Landing page allows player to choose between two difficulties: normal and hard

    - Normal difficulty goes for 5 rounds while hard goes for 10 rounds to win

    - Player must repeat pattern that the computer generates

    - Pressing instructions will have a pop-up with short details

    - Pressing reset will reset the rounds and game to initial state

    - Option to go return to the game or return back to main menu on the victory/game-over screen

## Planned future enhancements

    - Implement a timer that would game-over if player runs out of time

    - Add on more time as rounds progress

    - Have sequence playback faster based on level progression and difficulty

    - Implement a normal mode where mistakes are more forgiving---if player messes up the sequence, the board will replay the sequence and give the player another chance. The current game is only on strict mode which game-overs once the player makes one mistake


### Pseudocode

<!-- Player, and currentGame sequence. Counter keeps track of the clicks -->
let player = []

let currentGame = []

let counter = 0;

let possibilities = ['green', 'blue', 'red', 'yellow']

<!-- Functions when CPU is creating a new item to the sequence -->
```js

function newGame(){
    - Clear all inputs
    - Start game at initial state
}

function generateMoves(){
    - Create math.random function to randomize the possible choices
    - Push the randomized choice to the end of sequence
    - Adds a new step to the sequence with each round
    - Call on another function to start/continue sequence
}

function showSequence(){
    - Create a setInterval and clearInterval function to show current sequence
    - Call on another function gamePlay to set another timer
}

function gamePlay(){
    -  Adds a class to highlight the randomized choice and remove the class after some time
}

// Functions for player to repeat the pattern
function playerTurn(){
    - Waits for player input and check to see if the correct choice has been clicked
}

function nextLevel(){
    - Calls on function to add to counter
}

function addToCounter(){
    - Adds the number of clicks to the counter to allow player to know what round they are on
    - Calls on generateMoves function to repeat pattern and create a new move at the end
}
