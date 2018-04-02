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

/**
 * variant
 * Not asking sum, but the range
 * If A[i] < 0, current sum + A[i] >= 0, we can continue addition because
 * the positive sum would still contribute to positiveness of the subarray.
 * If A[i] < 0, current sum + A[i] < 0, the current subarray has to end.
 */
const maxSubArrayB = A => {
  let beginTemp = 0; // save the temporary begining index
  let begin = 0; // begining index
  let end = 0; // ending index
  let maxSoFar = A[0]; // max sum of previous sequence
  let maxEndingHere = A[0]; // max sum of this group

  for (let i = 1; i < A.length; i++) {
    // i starts from 1
    if (maxEndingHere < 0) {
      // last A[i] is too small
      maxEndingHere = A[i];
      beginTemp = i; // update begin temp
    } else {
      maxEndingHere += A[i];
    }

    if (maxEndingHere >= maxSoFar) {
      // update max so far
      maxSoFar = maxEndingHere;
      begin = beginTemp; // save index range
      end = i;
    }
  }
  return [begin, end, maxSoFar];
};

console.log(maxSubArrayB([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// new file: 4/1/2018
