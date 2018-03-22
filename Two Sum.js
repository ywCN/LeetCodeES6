/**
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
