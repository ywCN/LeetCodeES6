/**
 * Given a sorted array, remove the duplicates in place such that
 * each element appear only once and return the new length.
 *
 * Do not allocate extra space for another array, you must do this in place with O(1) space.
 *
 * For example,
 * Given input array nums = [1,1,2],
 * Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
 * It doesn't matter what you leave BEYOND the new length.
 *
 * Although this question only need to return a length, we are still required to re-allocate
 * the elements in the input. Just make sure the unique part is sorted, rest does not matter.
 */
/**
 * Two Pointers. Ask interviewer for requirement.
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = nums => {
  j = 0; // not in for loop because we need to return j+1
  for (let i = 1; i < nums.length; i++) {
    // i: fast pointer to scan the array, j: slow pointer tracks write location in array
    if (nums[i] !== nums[j]) {
      // != means a new number is detected
      j++; // increase pointer first
      nums[j] = nums[i]; // then write at the pointer
    }
  }
  return j + 1; // +1 for length
};

// new file: 3/27/2018
