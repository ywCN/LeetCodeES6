/**
 * Given a m*n matrix, if an element is 0, set its entire row and column to 0. Do it in place.
 */
/**
 * Inplace.
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = matrix => {
  const m = matrix.length;
  const n = matrix[0].length;
  let firstRowHasZero = false; // flag if first row should be set to 0
  let firstColHasZero = false;
  // loop all elements, do marks and flags //
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        // check 0 element's index, set flag //
        if (i === 0) firstRowHasZero = true;
        if (j === 0) firstColHasZero = true;
        // mark at 1st row and 1st col //
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }
  // first set 0 not in first row and col // check 0 mark in 1st col or row
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }
  // then set 0 in first row and col
  if (firstRowHasZero) {
    for (let i = 0; i < n; i++) {
      matrix[0][i] = 0;
    }
  }
  if (firstColHasZero) {
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0;
    }
  }
};

// Can use extra 2 arrays to mark rows and cols. But it will use O(m+n) space.

// new file: 4/6/2018
