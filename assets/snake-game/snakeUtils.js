const GRID_SIZE = 25;

// When snakeHead (first coordinate in snakeBody) hits food
const onSnake = (position) => {
    if (equalPositions(position, snakeBody[0])) {
        return true;
    }
    return false;
}

// Helper function to compare 2 position
const equalPositions = (pos1, pos2) => {
    return pos1.x === pos2.x && pos1.y === pos2.y;
}

const growSnake = () => {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
}

const getNewFoodPosition = () => {
    let randomFoodPosition = randomGridPosition();
    // Fix coincidence of overlaying new food position & current snake head
    while (onSnake(randomFoodPosition)) {
        randomFoodPosition = randomGridPosition();
    }
    return randomFoodPosition;
}

const randomGridPosition = () => {
    return {
        x: Math.floor(Math.random() * GRID_SIZE) + 1,
        y: Math.floor(Math.random() * GRID_SIZE) + 1
    };
}

const outOfBounds = (position) => {
    return position.x < 1 || position.x > GRID_SIZE || position.y < 1 || position.y > GRID_SIZE;
}

const snakeOutOfBounds = () => {
    return outOfBounds(snakeBody[0]);
}

const snakeIntersectSelf = () => {
    for (let i = 1; i < snakeBody.length; i++) {
        if (equalPositions(snakeBody[0], snakeBody[i])) {
            return true;
        }
    }
    return false;
}

