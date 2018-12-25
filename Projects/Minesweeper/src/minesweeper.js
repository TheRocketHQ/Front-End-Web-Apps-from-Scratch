 class Game {

 }

 class Board {
   constructor(numberOfRows, numberOfColumns, numberOfBombs) {
     this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
     this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
   }

   getNumberOfNeighborBombs (rowIndex, columnIndex) {
    const neighborOffsets = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1]
    ];
    const numberOfRows = this._bombBoard.length;
    const numberOfColumns = this._bombBoard[0].length;
 
    let numberOfBombs = 0;
 
    neighborOffsets.forEach(offset => {
      const neighborRowIndex = rowIndex + offset[0];
      const neighborColumnIndex = columnIndex + offset[1];
      if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows &&
        neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns) {
        if (bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
          numberOfBombs++;
        }
      }
    });
    return numberOfBombs;
  };

   flipTile (flipRow, flipColumn) {
     if(this._playerBoard[flipRow][flipColumn]){
       return;
     }
     if(this._bombBoard[flipRow][flipColumn] === 'B'){
      this._playerBoard
     }
   };
   print() {
     console.log(this._playerBoard.map(row => row.join(' | ')).join('\n'))
   }

   static generatePlayerBoard(numberOfRows, numberOfColumns) {
     const board = [];

     for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
       const row = [];
       for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
         row.push(' ');
       }
       board.push(row);
     }
     return board;
   };

   static generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
     const board = [];

     for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
       const row = [];
       for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
         row.push(null);
       }
       board.push(row);
     }

     let numberOfBombsPlaced = 0;

     while (numberOfBombsPlaced < numberOfBombs) {
       const randomRowIndex = Math.floor(Math.random() * numberOfRows);
       const randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
       if (board[randomRowIndex][randomColumnIndex] !== 'B') {
         board[randomRowIndex][randomColumnIndex] = 'B';
         numberOfBombsPlaced++;
       }
     }

     return board;
   };

 }

 const board = new Board(3, 2, 4);
 board.print();
 board.flipTile(1,1);
 console.log('Current Board');
 board.print();