/**
 * Given an integer n, generate a square matrix filled with elements from 1 to n^2 in spiral order.
 *
 * For example,
 * Given n = 3,
 *
 * You should return the following matrix:
 * [
 *  [ 1, 2, 3 ],
 *  [ 8, 9, 4 ],
 *  [ 7, 6, 5 ]
 * ]
 */
/**
 * @param {number} n
 * @return {number[][]}
 */
const generateMatrix = n => {
  const res = [];
  for (let i = 0; i < n; i++) {
    res.push(new Array(n));
  }
  let rowU = 0;
  let rowD = n - 1;
  let colL = 0;
  let colR = n - 1;
  let fill = 1; // used to fill matrix, will be updated after each fill

  while (rowU <= rowD && colL <= colR) {
    // fill top row
    for (let i = colL; i <= colR; i++) {
      res[rowU][i] = fill++;
    }
    rowU++;
    // fill right col
    for (let i = rowU; i <= rowD; i++) {
      res[i][colR] = fill++;
    }
    colR--;
    // fill bottom row
    if (rowU <= rowD) {
      for (let i = colR; i >= colL; i--) {
        res[rowD][i] = fill++;
      }
      rowD--;
    }
    // fill left col
    if (colL <= colR) {
      for (let i = rowD; i >= rowU; i--) {
        res[i][colL] = fill++;
      }
      colL++;
    }
  }
  return res;
};

// new file: 4/4/2018
