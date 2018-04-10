/**
 * Follow up for "Search in Rotated Sorted Array":
 * What if duplicates are allowed?
 * Would this affect the run-time complexity? How and why?
 */

/**
 * Worst case: O(n). Ends up same as sequential search at worst.
 * Clarification: non-descending order
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
const search = (nums, target) => {
  if (!nums || !nums.length) return false;
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    let m = Math.floor((r + l) / 2);
    if (nums[m] === target) return true;
    if (nums[l] === nums[m] && nums[m] === nums[r]) {
      // worst case, skip dups
      l++;
      r--;
    } else if (nums[l] === nums[m]) {
      // skip part of dups
      l = m + 1;
    } else if (nums[m] === nums[r]) {
      // skip part of dups
      r = m;
    } else if (nums[l] < nums[m]) {
      // [l, m] part is asc, [m, r] contains rotated part
      if (nums[l] <= target && target < nums[m]) {
        // <= to include left bound because above l = m+1
        r = m - 1; // abandon [m, r], after this there is no rotated right part
      } else {
        l = m + 1; // target not in [l, m], narrow in [m, r]
      }
    } else if (nums[l] > nums[m]) {
      // [m, r] part is asc, [l, m] contains rotated part
      if (nums[m] < target && target <= nums[r]) {
        // <= to include right bound
        l = m + 1; // abandon [l, m], after this there is no rotated left part
      } else {
        r = m - 1; // target not in [m, r], narrow in [l, m]
      }
    }
  }
  return false;
};

// new file: 4/9/2018
