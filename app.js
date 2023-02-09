const board = document.getElementById('board');

const squares = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const rows = [0, 1, 2, 3, 4, 5, 6, 7];

const rowSquares = (chessRow) => {
    squares.map(() => {
        const chessSquares = document.createElement('div');
        chessSquares.classList.add('squares');
        chessRow.appendChild(chessSquares);
    })
};

const boardRows = rows.map((row, index) => {
    const chessRow = document.createElement('div');
    if (index % 2 === 1 ) {
        chessRow.classList.add('reverse');
    }
    chessRow.classList.add('row');
    board.appendChild(chessRow);
    rowSquares(chessRow);
});