/**
 * Given a set of DISTINCT integers, nums, return all possible subsets.
 * Note: The solution set must not contain duplicate subsets.
 * For example, note the [] in result
 * If nums = [1,2,3], a solution is:
 * | [
 * |   [3],
 * |   [1],
 * |   [2],
 * |   [1,2,3],
 * |   [1,3],
 * |   [2,3],
 * |   [1,2],
 * |   []
 * | ]
 */

/**
 * Backtracking. O(2^n) time, O(n) stack space. Note: assumed distinct elements.
 * total number of states of combinations
 * example [1 3 5 7], below is the temp state
 * 1->13->135->1357->135->13->137->13->1->15->157->15->1->17->1-> ->
 * 3->35->357->35->3->37->3-> ->
 * 5->57->5-> ->
 * 7-> ->
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = nums => {
  const res = [];

  const backtrack = (temp, start) => {
    res.push([...temp]); // remeber deep copy
    for (let i = start; i < nums.length; i++) {
      temp.push(nums[i]);
      backtrack(temp, i + 1);
      temp.pop();
    }
  };

  backtrack([], 0);
  return res;
};

console.log(subsets([1, 2, 3]));

// new file: 4/8/2018
