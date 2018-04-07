/**
 * Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:
 * 		Integers in each row are sorted from left to right.
 * 		The first integer of each row is greater than the last integer of the previous row.
 * For example, consider the following matrix:
 * [[1,   3,  5,  7],
 *  [10, 11, 16, 20],
 *  [23, 30, 34, 50]]
 * Given target = 3, return true.
 */
/**
 * Search from bottom-left or top-right O(m+n).
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => {
  if (!matrix || !matrix.length || !matrix[0].length) return false;
  let i = matrix.length - 1;
  let j = 0;
  while (i >= 0 && j < matrix[0].length) {
    if (matrix[i][j] < target) {
      j++; // too small, move right
    } else if (matrix[i][j] > target) {
      i--; // too big, move up
    } else {
      return true;
    }
  }
  return false;
};

/**
 * Binary Search. O(log(m+n))
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrixB = (matrix, target) => {
  if (!matrix || !matrix.length || !matrix[0].length) return false;
  let start = 0;
  let rows = matrix.length;
  let cols = matrix[0].length;
  let end = rows * cols - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let rowIndex = Math.floor(mid / cols);
    let colIndex = mid % cols;
    if (matrix[rowIndex][colIndex] < target) {
      start = mid + 1;
    } else if (matrix[rowIndex][colIndex] > target) {
      end = mid - 1;
    } else {
      return true;
    }
  }
  return false;
};

// new file: 4/6/2018
