/**
 * Given an array of NON-NEGATIVE integers, you are initially positioned at the
 * first index of the array.
 *
 * Each element in the array represents your maximum jump length at that position.
 *
 * Your goal is to reach the last index in the minimum number of jumps.
 *
 * For example:
 * Given array A = [2,3,1,1,4]
 *
 * The minimum number of jumps to reach the last index is 2. (Jump 1 step from
 * index 0 to 1, then 3 steps to the last index.)
 * Note:
 * You can assume that you can always reach the last index.
 */
/**
 * Note: assumed can ALWAYS reach the last index
 *
 * The main idea is based on greedy.
 * Let's say the range of the current jump is [curBegin, curEnd],
 * curFarthest is the farthest point that all points in [curBegin, curEnd] can reach.
 * Once the current point reaches curEnd, then trigger another jump,
 * and set the new curEnd with curFarthest, then keep the above steps.
 * @param {number[]} nums
 * @return {number}
 */
const jump = nums => {
  let jumps = 0;
  let curEnd = 0;
  let curFarthest = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    // -1 for non-negative, i is the curBegin
    curFarthest = Math.max(curFarthest, i + nums[i]); // always try to update curFarthest
    if (i == curEnd) {
      // only update jumps when reaching current end
      jumps++;
      curEnd = curFarthest; // update curEnd to curFarthest
      if (curEnd >= nums.length - 1) break; // reached/exceed last index
    }
  }
  return jumps;
};

// new file: 3/29/2018
