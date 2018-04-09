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

/**
 * Bottom-up. Time:O(2^n) for every element has 2 options, stay or not. Space: O(n)
 *
 * Initialize the list by adding an empty [];
 * For each number in nums[].
 * | For each result in list.
 *  | Get a copy of result from right to left.
 *  | Change the copy.
 *  | Add the copy to list.
 * Return list.
 *
 * E.g.:
 * [] -> [] [1]
 * [] [1] -> [] [1] [2] [1, 2]
 * Steps: 1. create copy of [], add 2 to copy of [], add[2] to answer
 *        2. create copy of [1], add 2 to copy of [1], add [1,2] to answer
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsetsB = nums => {
  const res = [];
  res.push([]);
  for (let num of nums) {
    for (let i = res.length - 1; i >= 0; i--) {
      // add from right to left, init i to free the right starting location
      res.push([...res[i], num]); // copy, edit, and add back to res
    }
  }
  return res;
};

console.log(subsets([1, 2, 3]));
console.log(subsetsB([1, 2, 3]));

// new file: 4/8/2018
