/**
 * Given an numsay of integers, return indices of the two numbers such that they add up to a specific target.
 * 
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * 
 * Example:
 * Given nums = [2, 7, 11, 15], target = 9, return [0, 1].
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 */

/**
 * Questions to interviewer:
 * 1. duplicate numbers in Array? 
 * 2. one or many solutions? return type? [] or [[],[],[]...]
 * 3. return index or number? if return index, is it zero based? 
 * 4. Can I reuse same elements?
 */

/**
 * Hash Table. One-pass. O(n) Time. O(n) Space.
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let cache = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (cache.has(target - nums[i])) {
            return [cache.get(target - nums[i]), i];
        } else {
            cache.set(nums[i], i);
        }
    }
    return [-1, -1];
};


console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 7, 11, 15], 8));
