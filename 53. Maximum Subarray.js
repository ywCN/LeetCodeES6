/**
 * Find the contiguous subarray within an array (containing at least one number)
 * which has the largest sum.
 *
 * For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
 * the contiguous subarray [4,-1,2,1] has the largest sum = 6.
 *
 * More practice:
 * If you have figured out the O(n) solution, try coding another solution using the
 * divide and conquer approach, which is more subtle.
 */
/**
 * DP, O(n) Time, O(1) Space
 * If A[i] < 0 && currentMax + A[i] < 0, should recalculate max
 * If A[i] < 0 && currentMax + A[i] >= 0, continue
 * currentMax = max(currentMax + A[i], A[i])
 * maxSubArr = max(currentMax, maxSubArr)
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = nums => {
  if (!nums || !nums.length) return 0;
  let curMax = null; // init
  let max = nums[0]; // init
  for (let num of nums) {
    if (curMax === null) {
      curMax = num; // init for [1] case
    } else {
      curMax = Math.max(curMax + num, num);
      max = Math.max(curMax, max);
    }
  }
  return max;
};

// new file: 4/1/2018
