/**
 * Given an array S of n integers, are there elements a, b, c, and d in S such
 * that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.
 *
 * Note:
 * Elements in a quadruplet (a,b,c,d) must be in non-descending order. (ie, a <= b <= c <= d)
 *
 * The solution set must not contain duplicate quadruplets.
 *
 * For example, given array S = {1 0 -1 0 -2 2}, and target = 0.
 * A solution set is:
 * (-1,  0, 0, 1)
 * (-2, -1, 1, 2)
 * (-2,  0, 0, 2)
 */
/**
 * 4Sum -> 3Sum -> 2Sum
 * 4 pointers, O(n^3) time
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = (nums, target) => {
  const res = [];
  if (nums === null || nums.length < 4) return res;
  const n = nums.length;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < n - 3; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue; // compare cur and prev
    for (let j = i + 1; j < n - 2; j++) {
      if (j > i + 1 && nums[j] == nums[j - 1]) continue; // compare cur and prev
      /*start solving 2Sum*/
      let newTarget = target - nums[i] - nums[j]; // 2Sum's target
      let l = j + 1; // left pointer.
      let r = n - 1; // right pointer.
      while (l < r) {
        let sum = nums[l] + nums[r];
        if (sum < newTarget) {
          l++;
        } else if (sum > newTarget) {
          r--;
        } else {
          res.push([nums[i], nums[j], nums[l], nums[r]]);
          while (l < r && nums[l] == nums[l + 1]) {
            l++; //skip dup by comparing cur and NEXT(left to right)
          }
          while (l < r && nums[r] == nums[r - 1]) {
            r--; //skip dup by comparing cur and NEXT(right to left)
          }
          // move again for go out of last dup
          l++;
          r--;
        }
      }
    }
  }
  return res;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));

// new file: 3/25/2018
