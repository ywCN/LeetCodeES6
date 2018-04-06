/**
 * Follow up for "Unique Paths":
 *
 * Now consider if some obstacles are added to the grids. How many unique paths would there be?
 *
 * An obstacle and empty space is marked as 1 and 0 respectively in the grid.
 *
 * For example,
 * There is one obstacle in the middle of a 3x3 grid as illustrated below.
 *
 * [[0,0,0],
 *  [0,1,0],
 *  [0,0,0]]
 * The total number of unique paths is 2.
 */

/**
 * DP. Modified uniquePath1 solution.
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
const uniquePathsWithObstacles = grid => {
  if (!grid || !grid.length || !grid[0].length) return 0;
  const m = grid.length;
  const n = grid[0].length;
  // build table
  const path = [];
  for (let i = 0; i < m; i++) {
    path.push(new Array(n).fill(0));
  }
  // build first row // && grid[0][i] === 0 is to stop filling 1 when encounting an obstacle
  for (let i = 0; i < n && grid[0][i] === 0; i++) {
    path[0][i] = 1;
  }
  // build first col
  for (let i = 0; i < m && grid[0][i] === 0; i++) {
    path[i][0] = 1;
  }
  // build rest grids
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (grid[i][j] === 1) {
        path[i][j] = 0; // obstacle, remove all pathes reaching this grid
      } else {
        path[i][j] = path[i - 1][j] + path[i][j - 1];
      }
    }
  }
  return path[m - 1][n - 1];
};

// new file: 4/5/2018
