// Initiate a food
let food = { x: 5, y: 16 };
let score = 0;

const updateFood = () => {
    if (onSnake(food)) {
        growSnake();
        score += 1;
        food = getNewFoodPosition();
    }
}

// Draw food block on game board
const drawFood = (gameBoard) => {
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement);
}