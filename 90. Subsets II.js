/**
 * Given a collection of integers that might contain DUPLICATES, return all possible subsets.
 * Note: The solution set must not contain duplicate subsets.
 *
 * For example,
 * If nums = [1,2,2], a solution is:
 *
 * [[2],
 *  [1],
 *  [1,2,2],
 *  [2,2],
 *  [1,2],
 *  []]
 */
/**
 * Time: O(2^n). every number has 2 choices, stay or not.
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsetsWithDup = nums => {
  const res = [];
  nums.sort((a, b) => a - b); // for skipping dups

  const backtrack = (temp, start) => {
    res.push([...temp]); // deep copy
    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i - 1]) continue; // i>start ensures we keep the first dup in CURRENT partition
      temp.push(nums[i]);
      backtrack(temp, i + 1);
      temp.pop();
    }
  };

  backtrack([], 0);
  return res;
};

// new file: 4/11/2018
