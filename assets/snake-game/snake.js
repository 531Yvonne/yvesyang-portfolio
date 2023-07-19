// Attribute for speed
const SNAKE_SPEED = 10;

// Create initial 3-block snake
let snakeBody = [
    { x: 11, y: 10 },
    { x: 11, y: 9 },
    { x: 11, y: 8 },
];

const updateSnake = () => {
    // Remove the snake's tail block
    snakeBody.pop();

    // Add new head block (old head + new direction input)
    const newHead = { ...snakeBody[0] };
    const snakeDirection = getInputDirection();

    newHead.x += snakeDirection.x;
    newHead.y += snakeDirection.y;

    // Use unshift instead of push, to add newHead to the start of the array
    snakeBody.unshift(newHead);

}

// Draw all blocks of the snake body on game board
const drawSnake = (gameBoard) => {
    for (let i = 0; i < snakeBody.length; i++) {
        const block = snakeBody[i];
        const snakeElement = document.createElement("div");
        snakeElement.style.gridRowStart = block.y;
        snakeElement.style.gridColumnStart = block.x;
        snakeElement.classList.add("snake");
        gameBoard.appendChild(snakeElement);
    }
}
