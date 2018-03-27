/**
 * Implement next permutation, which rearranges numbers o the
 * lexicographically next greater permutation of numbers.
 *
 * If such arrangement is not possible, it must rearrange it as the lowest
 * possible order (ie, sorted in ascending order).
 *
 * The replacement must be in-place, do not allocate extra memory.
 *
 * Here are some examples. Inputs are in the left-hand column and its
 * corresponding outputs are in the right-hand column.
 * 1,2,3 -> 1,3,2
 * 3,2,1 -> 1,2,3
 * 1,1,5 -> 1,5,1
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const nextPermutation = nums => {
  let i = nums.length - 2;
  while (i >= 0 && nums[i + 1] <= nums[i]) {
    // find first decreasing number from right to left
    i--;
  }
  if (i >= 0) {
    // i<0 means the array is already sorted descending order
    let j = nums.length - 1;
    while (j >= 0 && nums[j] <= nums[i]) {
      // find num JUST larger than nums[i] from right
      j--;
    }
    swap(nums, i, j); // swap two numbers
  }
  reverse(nums, i + 1); // reverse from i+1 to end
};

const swap = (nums, i, j) => {
  let t = nums[i];
  nums[i] = nums[j];
  nums[j] = t;
};

const reverse = (nums, s) => {
  let e = nums.length - 1;
  while (s < e) {
    swap(nums, s, e);
    s++;
    e--;
  }
};

// new file: 3/27/2018
