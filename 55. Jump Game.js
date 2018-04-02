/**
 * Given an array of non-negative integers, you are initially positioned at the first index of the array.
 *
 * Each element in the array represents your maximum jump length at that position.
 * Determine if you are able to reach the last index.
 * For example:
 * A = [2,3,1,1,4], return true.
 * A = [3,2,1,0,4], return false.
 */
/**
 * keep updating both i and current reachable max
 * current index cannot be larger than reachable max index
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = nums => {
  let max = 0; // reachable max index
  for (let i = 0; i < nums.length; i++) {
    if (i > max) return false;
    max = Math.max(max, i + nums[i]);
  }
  return true;
};

/**
 * Greedy
 * The thought is very subtle.
 * update lastPos to i when it is reachable by i
 * if lastPos is updated to 0, it means we can reach end from begin
 * @param {number[]} nums
 * @return {boolean}
 */
const canJumpB = nums => {
  let lastPos = nums.length - 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i + nums[i] >= lastPos) {
      lastPos = i;
    }
  }
  return lastPos === 0;
};

// new file: 4/1/2018
