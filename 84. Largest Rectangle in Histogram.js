/**
 * Given n non-negative integers representing the histogram's bar height where
 * the width of each bar is 1, find the area of largest rectangle in the histogram.
 *
 * Above is a histogram where width of each bar is 1, given height =
 * [2,1,5,6,2,3].
 *
 * The largest rectangle is shown in the shaded area, which has area = 10 unit.
 *
 * For example,
 * Given height = [2,1,5,6,2,3],
 * return 10.
 * https://leetcode.com/static/images/problemset/histogram_area.png
 */
/**
 * Update max rect only when height is smaller than stack top.
 * Stack stores indices
 * add a zero height into the group
 * [1,7,8,5,6,10,11,8] -> [1,x,x,5,6,x,x,8]
 *
 * example: [6, 7, 5, 2, 4, 5, 9, 3]
 * stack states: 6,67,6, ,5, ,2,24,245,2459,245,24,2,23,2
 * @param {number[]} heights
 * @return {number}
 */
const largestRectangleArea = heights => {
  if (!heights || !heights.length) return 0;
  // add a trailing 0 for the case of ascending array to trigger while(), or it will return 0 //
  heights.push(0);
  let max = 0;
  const stack = [];
  for (let i = 0; i < heights.length; i++) {
    // KEEP removing bigger peeks' index and updating max //
    while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
      // Note while
      const h = heights[stack.pop()]; // note here the stack[stack.length - 1] has changed, do not use a const the record stackPeek above the while loop
      // if empty, return current width as width, if not empty, use poped higher bar's index to calculate width
      const w = stack.length ? i - stack[stack.length - 1] - 1 : i;
      max = Math.max(max, h * w);
    }
    stack.push(i); // push index
  }
  return max;
};
/**
 * Brute Force. Time: O(n^3). Space: O(1)
 * Consider every possible pair of bars and find the area of the rectangle
 * formed between them using the height of the shortest bar lying between them
 * as the height and the spacing between them as the width of the rectangle.
 * We can thus, find the required rectangle with the maximum area.
 * @param {number[]} heights
 * @return {number}
 */
const largestRectangleAreaB = heights => {
  let max = 0;
  for (let i = 0; i < heights.length; i++) {
    for (let j = i; j < heights.length; j++) {
      let minheight = ~(1 << 31);
      for (let k = i; k <= j; k++) minheight = Math.min(minheight, heights[k]);
      max = Math.max(max, minheight * (j - i + 1));
    }
  }
  return max;
};

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));
console.log(largestRectangleAreaB([2, 1, 5, 6, 2, 3]));

console.log(largestRectangleArea([1, 7, 8, 5, 6, 10, 11, 8]));
console.log(largestRectangleAreaB([1, 7, 8, 5, 6, 10, 11, 8]));

console.log(largestRectangleArea([6, 7, 5, 2, 4, 5, 9, 3]));
console.log(largestRectangleAreaB([6, 7, 5, 2, 4, 5, 9, 3]));

// new file: 4/10/2018
