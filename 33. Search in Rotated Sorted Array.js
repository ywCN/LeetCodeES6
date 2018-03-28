/**
 * Suppose a sorted array is rotated at some pivot unknown to you beforehand.
 * (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).
 * You are given a target value to search. If found return its index, otherwise return -1.
 * You may assume NO duplicate exists in the array.
 */
/**
 * 2 Binary Search. draw a pic will make it clear
 * Find minimal index first.
 * Then compare target with the ending value to know which half to do another binary search.
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
  if (!nums || !nums.length) return -1; // ask for this situation
  let minIndex = findMin(nums);
  let l = 0;
  let r = nums.length - 1;
  if (target === nums[minIndex]) return minIndex;
  else if (target > nums[r])
    r = minIndex - 1; // target is in left part, abandon right part
  else l = minIndex + 1; // target is in right part, abandon left part

  while (l <= r) {
    // need to keep=for test all numbers, or [1,3]find3 will return -1
    let mid = Math.floor((r + l) / 2);
    if (target === nums[mid]) return mid;
    else if (target > nums[mid])
      l = mid + 1; // target is in right part, abandon left part including mid
    else r = mid - 1; // target is in left part, abandon right part including mid
  }
  return -1;
};

// binary search for a boundary
const findMin = nums => {
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    // Stop when l === r.
    let mid = Math.floor((r + l) / 2); // Note: rounding down
    if (nums[mid] > nums[r])
      l = mid + 1; // boundary is in right part, abandon left part including mid
    else r = mid; // boundary is in left part including mid, abandon right part excluding mid
    // if not rotated, since round down, finally stops at 0.
  }
  return l; // or r
};

const searchB = (nums, target) => {
  if (!nums || !nums.length) return -1;
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    let m = Math.floor((r + l) / 2);
    if (nums[m] >= nums[l]) {
      if (target <= nums[m] && target >= nums[l])
        r = m; // in this range
      else l = m + 1; // not in this range
    } else {
      if (target > nums[m] && target <= nums[r])
        l = m + 1; // not in this range
      else r = m; // in this range
    }
  }
  return nums[l] == target ? l : -1;
};

// built-in function
const searchC = (nums, target) => {
  return nums.indexOf(target);
};

// new file: 3/28/2018
