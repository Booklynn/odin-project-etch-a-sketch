const createGrid = (gridSize) => {
    const columns = gridSize;
    const rows = gridSize;
    const numberOfSquares = rows * columns;
    const squareSize = (100 / columns);

    const gridContainer = document.querySelector('.grid-container');

    for (let index = 0; index < numberOfSquares; index++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        
        gridSquare.style.flex = `1 1 ${squareSize}%`;
        
        gridContainer.appendChild(gridSquare);
    }

    const gridSquares = document.querySelectorAll('.grid-square');

    gridSquares.forEach((square) => {
        let firstMouseOver = true;
    
        square.addEventListener('mouseover', () => {
            if (square.style.opacity === '' || square.style.backgroundColor === '') {
                firstMouseOver = true;
            }
            if (firstMouseOver) {
                square.style.backgroundColor = getRandomRGBColor();
                square.style.opacity = 0.1;
            } else {
                square.style.opacity = Math.min(parseFloat(square.style.opacity) + 0.1, 1); 
            }
        });
    
        square.addEventListener('mouseleave', () => {
            firstMouseOver = false;
        });
    });
};

createGrid(16);

const gridSizeInput = document.querySelector('input');
gridSizeInput.addEventListener('input', () => {
    const gridSquares = document.querySelectorAll('.grid-square');
    const gridSize = parseInt(gridSizeInput.value);

    if (gridSize > 0 && gridSize <= 100) {
        gridSquares.forEach((square) => {
            square.remove();
        });
        createGrid(gridSize);
    }
});

const clearButton = document.querySelector('button');
clearButton.addEventListener('click', () => {
    const gridSquares = document.querySelectorAll('.grid-square');
    gridSquares.forEach((square) => {
        square.style.backgroundColor = '';
        square.style.opacity = '';
    });
});

function getRandomRGBColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}