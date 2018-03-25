/**
 * Given an array S of n integers, find three integers in S such that the
 * sum is closest to a given number, target. Return the sum of the three
 * integers. You may assume that each input would have exactly one solution.
 *
 * For example, given array S = {-1 2 1 -4}, and target = 1.
 * The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 *
 * The method is similar to ThreeSum, however since we only need to find the closest result,
 * we do not need to to calculate target and do 2Sum. Just use 2 pointers.
 */
/**
 * 2Sum. 3 pointers.
 * Note the init part and the compare abs part.
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = (nums, target) => {
  if (nums == null || nums.length < 3) return 0;
  let closest = nums[0] + nums[1] + nums[2]; // init before or after sort does not matter
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      let sum = nums[i] + nums[l] + nums[r];
      if (Math.abs(target - sum) < Math.abs(target - closest)) {
        // evaluate each sum
        closest = sum;
      }
      if (sum < target) {
        l++;
      } else if (sum > target) {
        r--;
      } else {
        return sum;
      }
    }
  }
  return closest;
};

// new file: 3/25/2018
