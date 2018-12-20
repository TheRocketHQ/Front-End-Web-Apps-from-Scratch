const blankline = '   |   |   ';
// blankline is going to be the board

const guessLine = ' 1 |   |   ';
// guessLine represents what the board will look like when a player guesses by "clicking" (selecting) the first square of this row. 

const bombLine = '   | B |   ';
// bombLine represents what the board will look like when a player clicks and reveals a bomb.



console.log(`This is what an empty board would look like:`);
console.log(blankline);
console.log(blankline);
console.log(blankline);

console.log(`This is what a board with a guess and a bomb on it would look like:`);
console.log(guessLine);
console.log(bombLine);
console.log(blankline);