const gameBoard = document.getElementById("game-board");
let gameStart = false;
let gameOver = false;

const main = () => {
    // To add: only start the game when key is pressed
    // if (gameStart) {
    update();
    draw();
    // } else {
    //     gameStart = isGameStart();
    // }
    if (gameOver) {
        alert("Game Over! Your score is: " + score);
        resetGame();
    }
}

let gameLoop = setInterval(main, 1000 / SNAKE_SPEED);

const update = () => {
    console.log("Updating");
    updateSnake();
    updateFood();
    gameOver = isGameOver();
}

const draw = () => {
    console.log("Drawing");
    gameBoard.innerHTML = "";
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

const isGameOver = () => {
    return snakeOutOfBounds() || snakeIntersectSelf();
}

const isGameStart = () => {
    let keyPressed = false;
    window.addEventListener("keydown", event => {
        keyPressed = true;
    });
    return keyPressed;
}

const resetGame = () => {
    snakeBody = [
        { x: 11, y: 10 },
        { x: 11, y: 9 },
        { x: 11, y: 8 },
    ];
    food = { x: 5, y: 16 };
    score = 0;
    main();
}