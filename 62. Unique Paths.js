/**
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
 *
 * The robot can only move either down or right at any point in time. The robot
 * is trying to reach the bottom-right corner of the grid (marked 'Finish' in
 * the diagram below).
 *
 * How many possible unique paths are there?
 *
 * Note: m and n will be at most 100.
 */
/**
 * DP. 2D array.
 * | When (n===0||m===0) the function always returns 1 since the robot can’t go left or up.
 * | For all other cells. The result = uniquePaths(m-1,n)+uniquePaths(m,n-1)
 * https://discuss.leetcode.com/topic/5623/java-dp-solution-with-complexity-o-n-m/13
 * https://raw.githubusercontent.com/hot13399/leetcode-graphic-answer/master/62.%20Unique%20Paths.jpg
 * @param {number} m - row
 * @param {number} n - col
 * @return {number}
 */
const uniquePaths = (m, n) => {
  const grid = [];
  for (let i = 0; i < m; i++) {
    grid.push(new Array(n)); // build rows
  }

  for (let i = 0; i < n; i++) {
    grid[0][i] = 1; // build first row
  }

  for (let i = 0; i < m; i++) {
    grid[i][0] = 1; // build first col
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      grid[i][j] = grid[i - 1][j] + grid[i][j - 1];
    }
  }

  return grid[m - 1][n - 1];
};

const uniquePathsB = (m, n) => {};

// new file: 4/5/2018
