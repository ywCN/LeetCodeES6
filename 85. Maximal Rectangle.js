/**
 * Given a 2D binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.
 *
 * For example, given the following matrix:
 *
 * 1 0 1 0 0
 * 1 0 1 1 1
 * 1 1 1 1 1
 * 1 0 0 1 0
 * Return 6.
 */

/**
 * Solution based on 84. Largest Rectangle in Histogram
 * It is like accumulate/compress a 1-D array and find its Largest Rectangle.
 * https://www.youtube.com/watch?v=g8bSdXCG-lA
 * @param {character[][]} matrix
 * @return {number}
 */
const maximalRectangle = matrix => {
  if (!matrix || !matrix.length || !matrix[0].length) return 0;
  const accum = new Array(matrix[0].length).fill(0); // this is like accumulate/compress matrix
  let max = 0; // max area
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      let n = parseInt(matrix[i][j]);
      if (n === 0) {
        accum[j] = 0; // reset when meeting 0
      } else {
        accum[j]++; // accumulate
      }
    }
    max = Math.max(max, largestRectangleArea(accum)); // get and compare max rect in current compressed matrix
  }
  return max;
};

/**
 * 84. Largest Rectangle in Histogram
 * @param {number[]} heights
 * @return {number}
 */
const largestRectangleArea = heights => {
  if (!heights || !heights.length) return 0;
  heights.push(0);
  let max = 0;
  const stack = [];
  for (let i = 0; i < heights.length; i++) {
    while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
      const h = heights[stack.pop()];
      const w = stack.length ? i - stack[stack.length - 1] - 1 : i;
      max = Math.max(max, h * w);
    }
    stack.push(i);
  }
  return max;
};

// new file: 4/10/2018
