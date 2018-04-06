/**
 * Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which
 * minimizes the sum of all numbers along its path.
 * Note: You can only move either down or right at any point in time.
 */
/**
 * DP. Time: O(mn) Space: O(mn)
 * Can also write on original matrix to reduce space to O(1). But it may not be allowed.
 * [[1, 1, 1 ,4],     [[1, 0, 0 ,0],      [[1, 2, 3 ,7],      [[1, 2, 3 ,7],      [[1, 2, 3 ,7],      [[1, 2, 3 ,7],
 *  [1, 2, 1, 4],  =>  [0, 0, 0, 0],   =>  [0, 0, 0, 0],  =>   [2, 0, 0, 0],  =>   [2, 4, 4, 8],  =>   [2, 4, 4, 8],
 *  [1, 5, 1, 1]]      [0, 0, 0, 0]]       [0, 0, 0, 0]]       [3, 0, 0, 0]]       [3, 0, 0, 0]]       [3, 8, 5, 6]]
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = grid => {
  if (!grid || !grid.length || !grid[0].length) return 0;
  const m = grid.length;
  const n = grid[0].length;
  const sum = [];
  // build rows
  for (let i = 0; i < m; i++) {
    sum.push(new Array(n));
  }
  // init first grid
  sum[0][0] = grid[0][0];
  // build first row, start at 1
  for (let i = 1; i < n; i++) {
    sum[0][i] = sum[0][i - 1] + grid[0][i];
  }
  // build first col, start at 1
  for (let i = 1; i < m; i++) {
    sum[i][0] = sum[i - 1][0] + grid[i][0];
  }
  // build rest grids
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      sum[i][j] = grid[i][j] + Math.min(sum[i - 1][j], sum[i][j - 1]); // min(top, left)
    }
  }
  return sum[m - 1][n - 1];
};

/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSumB = grid => {};

// new file: 4/5/2018
