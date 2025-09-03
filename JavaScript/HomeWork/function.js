let currentGridSize = 5;
let squares = [];

function createGrid(size) {
    const grid = document.getElementById('grid');
    grid.innerHTML = '';
    
    grid.style.gridTemplateColumns = `repeat(${size}, 40px)`;
    grid.style.gridTemplateRows = `repeat(${size}, 40px)`;
    
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.className = 'square white';
        grid.appendChild(square);
    }
    
    squares = document.querySelectorAll('.square');
    currentGridSize = size;
}

function handleFigureSelection() {
    const selector = document.getElementById('figureSelector');
    const selectedValue = selector.value;
    const chessControl = document.getElementById('chessControl');
    const diamondControl = document.getElementById('diamondControl');
    const patternControl = document.getElementById('patternControl');
    
    chessControl.style.display = 'none';
    diamondControl.style.display = 'none';
    patternControl.style.display = 'none';
    
    if (selectedValue === 'chess') {
        chessControl.style.display = 'block';
        const chessSizeInput = document.getElementById('chessSize');
        const chessSize = parseInt(chessSizeInput.value) || 8;
        createGrid(chessSize);
        drawChess();
    } 
    else if (selectedValue === 'romb') {
        diamondControl.style.display = 'block';
        const diamondSizeInput = document.getElementById('diamondSize');
        const diamondSize = parseInt(diamondSizeInput.value) || 5;
        createGrid(diamondSize);
        drawDiamondPrecise();
    }
    else if (selectedValue === 'chess_plus_minus') {
        patternControl.style.display = 'block';
        const patternSizeInput = document.getElementById('patternSize');
        const patternSize = parseInt(patternSizeInput.value) || 5;
        createGrid(patternSize);
        drawChessboard();
    }
    else {
        createGrid(5);
        drawFigure();
    }
}

function updateChessBoard() {
    const chessSizeInput = document.getElementById('chessSize');
    const chessSize = parseInt(chessSizeInput.value) || 8;
    
    createGrid(chessSize);
    drawChess();
}

function drawFigure() {
    const selector = document.getElementById('figureSelector');
    const selectedValue = selector.value;
    
    if (selectedValue === 'chess') {
        drawChess();
        return;
    }
    if (selectedValue === 'romb') {
        drawDiamondPrecise();
        return;
    }
    if (selectedValue === 'chess_plus_minus') {
        drawChessboard();
        return;
    }
    
    squares.forEach(square => {
        square.className = 'square white';
    });
    
    switch(selectedValue) {
        case 'square':
            drawSquare();
            document.getElementById('figureName').textContent = `Квадрат ${currentGridSize}x${currentGridSize}`;
            break;

        case 'triangle_left':
            drawTriangleLeft();
            document.getElementById('figureName').textContent = `Треугольник вправо ${currentGridSize}x${currentGridSize}`;
            break;

        case 'triangle_right':
            drawTriangleRight();
            document.getElementById('figureName').textContent = `Треугольник влево ${currentGridSize}x${currentGridSize}`;
            break;

        case 'invert_triangle_right':
            drawTriangleRightInverted();
            document.getElementById('figureName').textContent = `Перевёрнутый треугольник вправо ${currentGridSize}x${currentGridSize}`;
            break;

        case 'invert_triangle_left':
            drawTriangleLeftInverted();
            document.getElementById('figureName').textContent = `Перевёрнутый треугольник влево ${currentGridSize}x${currentGridSize}`;
            break;
    }
}

function drawChess() {
    const chessSizeInput = document.getElementById('chessSize');
    const chessSize = parseInt(chessSizeInput.value) || 8;
    
    document.getElementById('figureName').textContent = `Шахматная доска ${chessSize}x${chessSize}`;
    
    for (let i = 0; i < currentGridSize * currentGridSize; i++) {
        const row = Math.floor(i / currentGridSize);
        const col = i % currentGridSize;
        
        if ((row + col) % 2 === 0) {
            squares[i].className = 'square black';
        } else {
            squares[i].className = 'square white';
        }
    }
}


function drawSquare() {
    for (let i = 0; i < currentGridSize * currentGridSize; i++) {
        squares[i].className = 'square black';
    }
}

function drawTriangleLeft() {
    for (let i = 0; i < currentGridSize * currentGridSize; i++) {
        const row = Math.floor(i / currentGridSize);
        const col = i % currentGridSize;
        
        if (col <= row) {
            squares[i].className = 'square black';
        } else {
            squares[i].className = 'square white';
        }
    }
}

function drawTriangleRight() {
    for (let i = 0; i < currentGridSize * currentGridSize; i++) {
        const row = Math.floor(i / currentGridSize);
        const col = i % currentGridSize;
        
        if (col >= (currentGridSize - 1 - row)) {
            squares[i].className = 'square black';
        } else {
            squares[i].className = 'square white';
        }
    }
}

function drawTriangleLeftInverted() {
    for (let i = 0; i < currentGridSize * currentGridSize; i++) {
        const row = Math.floor(i / currentGridSize);
        const col = i % currentGridSize;
        
        if (col < currentGridSize - row) {
            squares[i].className = 'square black';
        } else {
            squares[i].className = 'square white';
        }
    }
}

function drawTriangleRightInverted() {
    for (let i = 0; i < currentGridSize * currentGridSize; i++) {
        const row = Math.floor(i / currentGridSize);
        const col = i % currentGridSize;
        
        if (col >= row) {
            squares[i].className = 'square black';
        } else {
            squares[i].className = 'square white';
        }
    }
}

function drawDiamondPrecise() {
    const diamondSizeInput = document.getElementById('diamondSize');
    const diamondSize = parseInt(diamondSizeInput.value) || 5;

    createGrid(diamondSize);
    
    const middle = Math.floor(currentGridSize / 2);
    
    for (let i = 0; i < currentGridSize * currentGridSize; i++) {
        const row = Math.floor(i / currentGridSize);
        const col = i % currentGridSize;
        
        if (currentGridSize % 2 === 1) {
            if (Math.abs(row - middle) + Math.abs(col - middle) <= middle) {
                squares[i].className = 'square black';
            } else {
                squares[i].className = 'square white';
            }
        } 
        else {
            if (Math.abs(row - middle + 0.5) + Math.abs(col - middle + 0.5) <= middle) {
                squares[i].className = 'square black';
            } else {
                squares[i].className = 'square white';
            }
        }
    }
    
    document.getElementById('figureName').textContent = `Ромб ${currentGridSize}x${currentGridSize}`;
}

function drawChessboard() {
    const patternSizeInput = document.getElementById('patternSize');
    const patternSize = parseInt(patternSizeInput.value) || 5;
    

    createGrid(patternSize);
    
    for (let i = 0; i < currentGridSize * currentGridSize; i++) {
        const row = Math.floor(i / currentGridSize);
        const col = i % currentGridSize;
        
        squares[i].className = 'square';
        squares[i].textContent = '';
        
        if ((row + col) % 2 === 0) {
            squares[i].textContent = '+';
            squares[i].style.backgroundColor = 'white';
            squares[i].style.color = 'black';
        } else {
            squares[i].textContent = '-';
            squares[i].style.backgroundColor = 'white';
            squares[i].style.color = 'black';
        }
    }
    
    document.getElementById('figureName').textContent = `Узор ${currentGridSize}x${currentGridSize}`;
}


window.onload = function() {
    createGrid(5);
};