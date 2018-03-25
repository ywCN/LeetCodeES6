/**
 * Given an array S of n integers, are there elements a, b, c in S such that
 * a + b + c = 0? Find all unique triplets in
 * the array which gives the sum of zero.
 * Note: The solution set must not contain duplicate triplets.
 *
 * For example, given array S = [-1, 0, 1, 2, -1, -4],
 * A solution set is:
 * [
 * [-1, 0, 1],
 * [-1, -1, 2]
 * ]
 */
/**
 * Three pointers O(N^2) time  O(1) space
 * Sort given array first.
 * Traverse the array with a pointer.
 * Use another 2 pointers, left(i + 1) and right(len - 1) to find the target.
 * How to early pruning? When current number or sum of first two is positive, stop
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = nums => {
  const res = [];
  if (nums === null || nums.length < 3) return res;
  nums.sort((a, b) => a - b); // required for skipping dup.
  for (let i = 0; i < nums.length - 2; i++) {
    // -2 for 2 more pointers
    // if (nums[i] > 0) break; // optional optimization
    if (i > 0 && nums[i] == nums[i - 1]) continue; // cur and prev. >0 for avoid i-1 exception
    let l = i + 1; // l=i if each num can be used for any times
    let r = nums.length - 1;
    let target = 0 - nums[i]; // target of 2Sum
    while (l < r) {
      let sum = nums[l] + nums[r];
      if (sum < target) l++;
      else if (sum > target) r--;
      else {
        res.push([nums[i], nums[l], nums[r]]); // add numbers, not indices
        while (l < r && nums[l] == nums[l + 1]) l++; //skip dup by comparing cur and NEXT
        while (l < r && nums[r] == nums[r - 1]) r--; //not r+1 cuz r+1 may out of range
        l++;
        r--; // go out of duplicated part
      }
    }
  }
  return res;
};

// new file: 3/25/2018
