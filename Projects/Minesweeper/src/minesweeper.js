const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
    const board = [];
    for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
        const row = [];
        for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
            row.push('  ');
        }
        board.push(row);
    }
    return board;
}
//Board is going to be the array we are going to use to store the rows and columns, we want to push a ' ' to each column of each row, so we create an array for row and column

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
    const board = [];
    for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
        const row = [];
        for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
            row.push(null);
        }
        board.push(row);
    }
    // instead of pushing a ' ' we push it to be null since we only want to replace this value with 'B'

    let numberOfBombsPlaced = 0;
    while (numberOfBombsPlaced < numberOfBombs) {
        const randomRowIndex = Math.floor(Math.random() * numberOfRows);
        const randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
        // floor will round the number down, and random will multiply with the number of rows / columns, the result will be a random number that we will use to indicate the position of the bomb
        board[randomRowIndex][randomColumnIndex] = 'B';

        numberOfBombsPlaced++;
        //for each time we place a bomb we increase the number of bombsPlace, this will continue until the condition of numberOfBombsPlace vs numberOfBoms will no longer be true
    }
    return board;
    //return the board with 'b'
}



const printBoard = board => {
    console.log('Current Board: ');
    console.log(board.map(row => row.join(' | ')).join('\n'));
    // will separate each row to a better display
}

const playerBoard = generatePlayerBoard(3,3);
const bombBoard = generateBombBoard(3,3,3);//row, column, bomb
printBoard(playerBoard);
printBoard(bombBoard);