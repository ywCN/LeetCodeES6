/**
 * The n-queens puzzle is the problem of placing n queens on an n*n chessboard such that
 * no two queens attack each other.
 * Given an integer n, return all distinct solutions to the n-queens puzzle.
 * Each solution contains a distinct board configuration of the n-queens' placement,
 * where 'Q' and '.' both indicate a queen and an empty space respectively.
 *
 * For example,
 * There exist two distinct solutions to the 4-queens puzzle:
 *
 * Solution 1     |      Solution 2
 * [".Q..",       |      ["..Q.",
 * "...Q",        |      "Q...",
 * "Q...",        |      "...Q",
 * "..Q."]        |      ".Q.."]
 */
/**
 * O(n^n) for n branches for each level
 * @param {number} n
 * @return {string[][]}
 */
const solveNQueens = n => {
  const board = [];
  const row = new Array(n).fill('.');
  for (let i = 0; i < n; i++) {
    board.push([...row]); // copy for deference
  }
  const res = [];
  backtrack(board, 0, res);
  return res;
};

const backtrack = (board, rowIndex, res) => {
  if (rowIndex === board.length) {
    res.push(board.map(row => row.join(''))); // copy for deference
    return; // end this branch
  }
  for (let i = 0; i < board.length; i++) {
    if (isValid(board, i, rowIndex)) {
      board[i][rowIndex] = 'Q'; // put queen
      backtrack(board, rowIndex + 1, res);
      board[i][rowIndex] = '.'; // reset
    }
  }
};

const isValid = (board, x, y) => {
  for (let j = 0; j < y; j++) {
    // traverse 3 directions
    if (board[x][j] === 'Q') return false;
    //45: x+y-j
    if (
      x + y - j >= 0 &&
      x + y - j < board.length &&
      board[x + y - j][j] === 'Q'
    )
      return false;
    //135: x-y+j
    if (
      x - y + j >= 0 &&
      x - y + j < board.length &&
      board[x - y + j][j] === 'Q'
    )
      return false;
  }
  return true; // passed all tests
};

// new file: 4/1/2018
