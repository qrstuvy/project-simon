# Simon game with a Stranger Things Remix

## Background
- Start with a landing page that will include a start button as well as an instructions button
- Pressing instructions will have a pop-up with short details
- Pressing start will high landing page and bring up game page

## Wireframe
![Quick sketch of game](/images/quicksketch.png)

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
