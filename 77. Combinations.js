/**
 * Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.
 *
 * For example,
 * If n = 4 and k = 2, a solution is:
 *  [
 *    [2,4],
 *    [3,4],
 *    [2,3],
 *    [1,2],
 *    [1,3],
 *    [1,4],
 *  ]
 */

/**
 * Backtracking. Time: O(n!), Space: O(n!)
 * Note: elements are unique because from 1 to n.
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = (n, k) => {
  const res = [];
  const backtrack = (temp, start) => {
    if (temp.length === k) {
      res.push([...temp]);
      return;
    }
    for (let i = start; i < n + 1; i++) {
      temp.push(i);
      backtrack(temp, i + 1); // i+1 NOT start+1 !!!
      temp.pop();
    }
  };
  backtrack([], 1); // 1 ... n
  return res;
};

console.log(combine(4, 2));

// new file: 4/8/2018
