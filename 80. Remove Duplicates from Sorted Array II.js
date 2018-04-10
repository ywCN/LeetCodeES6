/**
 * Follow up for "Remove Duplicates": What if duplicates are allowed at most twice?
 *
 * For example,
 * Given sorted array nums = [1,1,1,2,2,3],
 *
 * Your function should return length = 5, with the first five elements of nums being 1, 1, 2, 2 and 3.
 * It doesn't matter what you leave beyond the new length.
 */

/**
 * Two Pointers.
 * Duplicates are allowed at most twice.
 * It means that the number can be the same as the last number.
 * Instead of comparing with the last number, compare with the second last.
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
  if (nums.length <= 2) return nums.length; // optional
  let i = 0; // parsed tail(slow pointer)
  for (let num of nums) {
    if (i < 2 || num > nums[i - 2]) {
      // < 2 avoids null pointer
      nums[i] = num;
      i++;
    }
  }
  return i;
};

// new file: 4/9/2018
