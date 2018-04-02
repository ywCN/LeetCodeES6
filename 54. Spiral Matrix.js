/**
 * Given a matrix of m x n elements (m rows, n columns), return all elements of
 * the matrix in spiral order.
 *
 * For example, Given the following matrix:
 *
 * [
 * [ 1, 2, 3 ],
 * [ 4, 5, 6 ],
 * [ 7, 8, 9 ]
 * ]
 * You should return [1,2,3,6,9,8,7,4,5].
 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = matrix => {
  const res = [];
  if (!matrix || !matrix.length || !matrix[0].length) return res;

  // indices
  let rowU = 0; // top row index
  let rowD = matrix.length - 1; // bottom row index
  let colL = 0; // left column index
  let colR = matrix[0].length - 1; // right column index

  while (rowU <= rowD && colL <= colR) {
    for (let i = colL; i <= colR; i++) {
      // left->right
      res.push(matrix[rowU][i]);
    }
    rowU++; // top row used up, so rowU++

    for (let i = rowU; i <= rowD; i++) {
      // up->down
      res.push(matrix[i][colR]);
    }
    colR--; // right col used up, so colR--

    if (rowU <= rowD) {
      // need to check
      for (let i = colR; i >= colL; i--) {
        // right->left
        res.push(matrix[rowD][i]);
      }
      rowD--; // bottom row used up, so rowD--
    }

    if (colL <= colR) {
      for (let i = rowD; i >= rowU; i--) {
        // down->up
        res.push(matrix[i][colL]);
      }
      colL++; // right col used up, so colL++
    }
  }
  return res;
};

// new file: 4/1/2018
