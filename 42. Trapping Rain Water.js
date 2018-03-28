/**
 * Given n non-negative integers representing an elevation map where the width
 * of each bar is 1, compute how much water it is able to trap after raining.
 *
 * For example,
 * Given [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], return 6.
 * 				      1	    1  2  1        1
 */

/**
 * Two Pointers
 * Find the total area of water and block, then return total - block
 *
 * Start from two ends
 * If min of height[l] and height[r] is larger than current level
 * 		Update total and level
 * Add block and move it towards center
 * @param {number[]} height
 * @return {number}
 */
const trap = height => {
  if (!height || height.length < 3) return 0;
  let l = 0;
  let r = height.length - 1;
  let level = 0; // can only increase, while curLevel can increase or decrease
  let total = 0; // update total area by adding up layers' totals
  let block = 0; // add the pointer's height value before moving a pointer
  while (l <= r) {
    // note l <= r to include the last block
    let curLevel = Math.min(height[l], height[r]); // curLevel can only be the lower one
    // ONLY update total level when curLevel > level
    if (curLevel > level) {
      total += (curLevel - level) * (r - l + 1); // update total
      level = curLevel; // update level
    }
    // ALWAYS add lower blocks to total and move them towards middle
    if (height[l] < height[r]) {
      block += height[l];
      l++;
    } else {
      // also deal with same heights and the last block
      block += height[r];
      r--;
    }
  }
  return total - block;
};

// new file: 3/28/2018
