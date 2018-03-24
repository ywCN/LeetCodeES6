/**
 * Given n non-negative integers a1, a2, ..., an, where each represents a point
 * at coordinate (i, ai). n vertical lines are drawn such that the two
 * endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together
 * with x-axis forms a container, such that the container contains the most water.
 */

/**
 * one pass	time: O(n) space: O(1)
 * curArea = (right - left) * min(height[right], height[left]) 
 * maxArea = max(maxArea, curArea)
 * Move lower pointer towards center for the next loop, trying to find a higher one
 * 		1. The max water is limited by the pointer with smaller height
 * 		2. If we move the pointer with higher height, we will never get a greater area, 
 * 		the max height will be at most the one of the pointer with smaller height.
 * Stop when two pointers meet, cause one line cannot form a container
 * 
 * @param {number[]} height
 * @return {number}
 */
const maxArea = height => {
  if (!height || height.length === 0) return 0;
  let maxarea = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    maxarea = Math.max(maxarea, (right - left) * Math.min(height[left], height[right]));
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    } // for equal heights, moving either one is okay
  }
  return maxarea;
};

console.log(maxArea([1,2,4,3]));
console.log(maxArea([3,1,1,3]));

// new file: 3/23/2018
