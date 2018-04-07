/**
 * Given an array with n objects colored red, white or blue, sort them so that objects of the same color are adjacent,
 * with the colors in the order red, white and blue.
 *
 * Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.
 *
 * Note:
 * You are not suppose to use the library's sort function for this problem.
 *
 * Follow up:
 * A rather straight forward solution is a two-pass algorithm using counting sort.
 * First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then
 * 1's and folled by 2's.
 *
 * Could you come up with an one-pass algorithm using only constant space?
 */
/**
 * Two passes. Counting sort. O(n) time O(1) space but write a lot.
 * if given string, change it to char[]
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = nums => {
  let count0 = 0;
  let count1 = 0;
  let count2 = 0;
  // record ending locations for each color //
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) count0++;
    else if (nums[i] === 1) count1++;
    else if (nums[i] === 2) count2++;
  }
  for (let i = 0; i < count0; i++) nums[i] = 0;
  for (let i = 0; i < count1; i++) nums[count0 + i] = 1;
  for (let i = 0; i < count2; i++) nums[count0 + count1 + i] = 2;
};
/**
 * Two Pointers. One pass. O(n) time. O(1) space.
 *
 * [2, 1, 1, 0, 2, 1, 0]    i=0,s=0,e=6 swap2
 * [0, 1, 1, 0, 2, 1, 2]    i=0,s=0,e=5 swap0
 * [0, 1, 1, 0, 2, 1, 2]    i=1,s=1,e=5 skip1
 * [0, 1, 1, 0, 2, 1, 2]    i=2,s=1,e=5 skip1
 * [0, 1, 1, 0, 2, 1, 2]    i=3,s=1,e=5 skip1
 * [0, 0, 1, 1, 2, 1, 2]    i=4,s=2,e=5 swap2
 * [0, 0, 1, 1, 1, 2, 2]    i=4,s=2,e=4 skip1
 * i=5,s=2,e=4  i>end, end while loop
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColorsB = nums => {
  if (!nums || nums.length === 1) return;
  let start = 0; // end of sorted part from start
  let end = nums.length - 1; // start of sorted part from end
  let i = 0; // check unsorted part
  while (i <= end) {
    // not i < end eg[1,0]; not start < end;
    if (nums[i] === 0) {
      swap(nums, i, start); // swap 0 to end of sorted part
      start++;
      i++; // i++ for start stops at the sorted part of 0's right index
    } else if (nums[i] === 1) {
      i++; // skip 1
    } else {
      // nums[i] == 2
      swap(nums, i, end);
      end--;
      // we can't i++ cuz we don't know what we swapped from right pointer, so we still need to check later
    }
  }
};
const swap = (nums, i, j) => {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
};
/**
 * variant: sort k colors
 * naive:counting sort(O(n) time, need O(k) space, but can be stable if use same idea above)
 * below:each time sort min&max, then sort middle part's min&max, until we sort all min&max, O(n) time, O(1) space
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// below code is broken, but the thought is correct
// const sortKColors = (nums, k) => {
//   if (!nums || nums.length <= 1 || k === 1) return;
//   let left = 0; // left sorted part's right boundary
//   let right = nums.length - 1; // right sorted part's left boundary
//   while (left < right) {
//     let max = ~(1 << 31); // current max in current boundary
//     let min = 1 << 31; // current min in current boundary
//     for (let i = left; i <= right; i++) {
//       // find max and min in current boundary
//       max = Math.max(max, nums[i]);
//       min = Math.min(min, nums[i]);
//     }
//     let i = left; // copy left
//     while (i <= right) {
//       if (nums[i] === min) {
//         swap(nums, i, left);
//         left++;
//         i++;
//       } else if (nums[i] > min && nums[i] < max) {
//         // skip rest for now
//         i++;
//       } else {
//         // nums[i] == max
//         swap(nums, i, right);
//         right--;
//       }
//     }
//   }
// };

// console.log(sortKColors([5, 1, 2, 3, 4, 5, 2, 3, 2, 2, 3, 3, 2, 4], 5));

// new file: 4/7/2018
