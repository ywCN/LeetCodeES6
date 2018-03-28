/**
 * Given an unsorted integer array, find the first missing positive integer.
 *
 * For example,
 * Given [1,2,0] return 3,
 * and [3,4,-1,1] return 2.
 *
 * Your algorithm should run in O(n) time and uses constant space.
 */

/**
 * Two passes. place number in the right place and scan again.
 *
 * https://discuss.leetcode.com/topic/2633/share-my-o-n-time-o-1-space-solution
 * The basic idea is for any k positive numbers (duplicates allowed),
 * the first missing positive number must be within [1,k+1].
 * The reason is like you put k balls into k+1 bins, there must be a bin empty,
 * the empty bin can be viewed as the missing number.
 *
 * We try to sort it by utilizing the correct form of the array.
 * Correct form is [1, 2, 3, 4, ..., #, n], so we put element at correct index by swapping.
 * check if arr[arr[i] - 1] === arr[i] to find out if at correct index.
 * if not, swap it with the number at its correct index.
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = nums => {
  if (!nums || !nums.length) return 1;
  let n = nums.length;
  let i = 0;
  while (i < n) {
    /*invalid numbers OR correct numbers at correct position, pass*/
    if (nums[i] === i + 1 || nums[i] > n || nums[i] <= 0) {
      i++;
      /*valid numbers and numbers at wrong position, swap, no i++*/
    } else if (nums[nums[i] - 1] !== nums[i]) {
      let temp = nums[nums[i] - 1];
      nums[nums[i] - 1] = nums[i];
      nums[i] = temp;
      /*valid numbers and numbers at correct position*/
    } else {
      // avoid infinite swapping same numbers
      i++;
    }
  }
  i = 0;
  while (i < n && nums[i] === i + 1) {
    // finally i=n
    i++;
  }
  return i + 1;
};

/**
 * Two passes. place number in the right place and scan again.
 * We keep checking if nums[i] is valid and position is wrong
 * until nums[i] is out of range OR at correct position.
 * Note nums[i] may be updated multiple times during this inspection process.
 *
 * For i->end
 * | While nums[i] is valid and position is wrong
 *   | swap value at i with the value at nums[i] - 1
 * For i->end
 * | if num[i] != i + 1
 *   | return i+1;
 * return len+1
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositiveB = nums => {
  if (!nums || !nums.length) return 1;
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    /*keep swapping until value at i is at correct position or out of valid range*/
    while (nums[i] <= n && nums[i] > 0 && nums[i] != nums[nums[i] - 1]) {
      let temp = nums[nums[i] - 1];
      nums[nums[i] - 1] = nums[i];
      nums[i] = temp;
    }
  }
  for (let i = 0; i < n; i++) {
    if (nums[i] != i + 1) return i + 1; // found missing
  }
  return n + 1; // nothing in middle is missing, return largest
};
// new file: 3/28/2018
