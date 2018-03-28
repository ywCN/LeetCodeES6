/**
 * Determine if a Sudoku is valid.
 * The Sudoku board could be partially filled, where empty cells are filled with the char '.'.
 */
/**
 * 3 Sets for horizontal, vertical, and cube.
 * Think cubes as a whole, so there is a 3x3 cube matrix in the 9x9 grid matrix.
 * https://discuss.leetcode.com/topic/9748/shared-my-concise-java-code/29?page=1
 *
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = board => {
  for (let i = 0; i < 9; i++) {
    // each row, col, and cube will have a set for validate
    const rows = new Set();
    const cols = new Set();
    const cubes = new Set();
    for (let j = 0; j < 9; j++) {
      /*validate rows*/
      if (board[i][j] !== '.' && rows.has(board[i][j])) {
        // left to right
        return false;
      } else rows.add(board[i][j]);
      /*validate cols*/

      if (board[j][i] !== '.' && cols.has(board[j][i])) {
        // top to bottom
        return false;
      } else {
        cols.add(board[j][i]);
      }
      /*validate cubes*/
      // Use % for horizontal traversal. Use / for vertical traversal.
      let rowOffset = Math.floor(j / 3);
      let colOffset = j % 3;
      // To increment block, use i. To move horizontally to next block, use %.
      let rowStart = 3 * Math.floor(i / 3); // cube index of the 3x3 cubes matrix
      let colStart = 3 * (i % 3); // cube index of the 3x3 cubes matrix
      let row = rowStart + rowOffset; // convert cube index to cell index
      let col = colStart + colOffset; // convert cube index to cell index
      if (board[row][col] !== '.' && cubes.has(board[row][col])) {
        return false;
      } else {
        cubes.add(board[row][col]);
      }
    }
  }
  return true;
};

const board = [
  ['.', '.', '4', '.', '.', '.', '6', '3', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['5', '.', '.', '.', '.', '.', '.', '9', '.'],
  ['.', '.', '.', '5', '6', '.', '.', '.', '.'],
  ['4', '.', '3', '.', '.', '.', '.', '.', '1'],
  ['.', '.', '.', '7', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '5', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.']
];

console.log(isValidSudoku(board));

// new file: 3/28/2018
