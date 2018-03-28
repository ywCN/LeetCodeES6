/**
 * Given a sorted array of letegers, find the starting and ending position of a given target.
 *
 * Your algorithm's runtime complexity must be in the order of O(log n).
 *
 * If the target is not found in the array, return [-1, -1].
 *
 * For example,
 * Given [5, 7, 7, 8, 8, 10] and target value 8,
 * return [3, 4].
 */
/**
 * 2 Binary Search. Search for 2 boundaries.
 * If search for start, round middle value down: Math.floor()
 * | If nums[mid] < target, l = mid + 1.
 * | If nums[mid] = target, r = mid, since start can be mid or further left.
 * | If nums[mid] > target, r = mid.
 * If search for end, round middle value up: Math.ceil()
 * | If nums[mid] < target, l = mid.
 * | If nums[mid] = target, l = mid, since end can be mid or further right.
 * | If nums[mid] > target, r = mid - 1.
 *
 * 1, 2, 3, 3, 3, 3, 3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
 *       ^   		        ^
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = (nums, target) => {
  if (!nums || !nums.length) return [-1, -1];
  let l = 0;
  let r = nums.length - 1;
  /*search left boundary*/
  while (l < r) {
    // finally left will stay at left boundary if target is in nums
    let mid = Math.floor((r + l) / 2); // Round down.
    if (nums[mid] >= target)
      r = mid; // target may be mid, so include mid
    else l = mid + 1; // not include
  }
  if (nums[l] !== target) return [-1, -1]; // target not in nums
  let cachedLeft = l; // copy left bounday as it will change
  r = nums.length - 1; // reset right
  /*search right boundary*/
  while (l < r) {
    // finally left will stay at right boundary if target is in nums
    let mid = Math.ceil((r + l) / 2); // Round up.
    if (nums[mid] <= target)
      l = mid; // target may be mid, so include mid
    else r = mid - 1; // not include
  }
  if (nums[l] !== target) return [-1, -1]; // target not in nums
  return [cachedLeft, l];
};

// new file: 3/28/2018
