/**
 * Write a program to solve a Sudoku puzzle by filling the empty cells.
 * Empty cells are indicated by the character '.'.
 * You may assume that there will be only one unique solution.
 */
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solveSudoku = board => {
  if (!board || !board.length) return;
  solve(board);
};

const solve = board => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === '.') {
        for (let c = 1; c <= 9; c++) {
          if (isValid(board, i, j, c.toString())) {
            board[i][j] = c.toString(); // place the char
            if (solve(board)) {
              return true; // If it's the solution return true
              // break;
            } else {
              board[i][j] = '.'; // go back by resetting char
            }
          }
        }
        return false; // reaching this line means not passing all tests in loops, so not a solution
      }
    }
  }
  return true; // reaching this line means passing all tests in loops, so it's a solution
};

const isValid = (board, row, col, n) => {
  let cubeRow = Math.floor(row / 3) * 3;
  let cubeCol = Math.floor(col / 3) * 3;
  for (let i = 0; i < 9; i++) {
    if (
      board[i][col] === n ||
      board[row][i] === n ||
      board[cubeRow + Math.floor(i / 3)][cubeCol + i % 3] === n
    ) {
      return false;
    }
  }
  return true;
};

// new file: 3/28/2018
