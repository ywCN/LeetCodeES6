/**
 * Given a sorted array and a target value, return the index if the target is
 * found. If not, return the index where it would be if it were inserted in order.
 *
 * You may assume NO duplicates in the array.
 *
 * Here are few examples.
 * [1,3,5,6], 5 -> 2
 * [1,3,5,6], 2 -> 1
 * [1,3,5,6], 7 -> 4
 * [1,3,5,6], 0 -> 0
 */
/**
 * Binary search.
 * Think about last step when searching 2 in [..., 1, 3, ...]:
 * if both l and r point to 3, 3>2, mid > target, so r = mid-1, l will be the insert position
 * if both l and r point to 1, 1<2, mid < target, so l = mid+1, l will be the insert position
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
  if (!nums || !nums.length) return 0;
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    let mid = Math.floor((r + l) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return l; // r + 1 will work too.
};

// new file: 3/28/2018
