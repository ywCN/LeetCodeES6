/**
 * Given an array and a value, remove all instances of that value in place and return new length.
 *
 * The order of elements can be changed. It doesn't matter what you leave beyond the NEW length.
 */
/**
 * This is like the move-zeros question.
 * Two Pointers.
 * Order is not important
 * When we encounter nums[i]=val, we can swap the current element out with the last element
 * and dispose the last one. This essentially reduces the array's size by 1.
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
  // 1
  for (let i = nums.length; i >= 0; i--) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    }
  }
  return nums.length;

  // 2
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] === val) {
  //     nums.splice(i, 1);
  //     i--;
  //   }
  // }
  // return nums.length;

  //3
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[j++] = nums[i];
    }
  }
  return j;
};

// new file: 3/27/2018
