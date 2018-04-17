/**
 * Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers
 * on the row below.
 * For example, given the following triangle
 * [
 * [2],
 * [3,4],
 * [6,5,7],
 * [4,1,8,3]
 * ]
 * The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).
 */
/**
 * DP. time : O(n^2). space : O(n).
 * Think res as an extra row of the triangle.
 * i : j
 * i + 1 : j, j + 1
 * res = [4, 1, 8, 3, 0]
 * res = [7, 6, 10, 3, 0]
 * res = [9, 10, 10, 3, 0]
 * res = [11, 10, 10, 3, 0]
 * @param {number[][]} triangle
 * @return {number}
 */
const minimumTotal = triangle => {
  const len = triangle.length;
  const res = new Array(len + 1).fill(0); // +1 because it is like one extra row filled with 0s below the triangle
  for (let i = len - 1; i >= 0; i--) {
    // bottom row to top row
    for (let j = 0; j < triangle[i].length; j++) {
      res[j] = Math.min(res[j], res[j + 1]) + triangle[i][j];
    }
  }
  return res[0]; // we only need the first one as it is the merged result
};

// new file: 4/17/2018
