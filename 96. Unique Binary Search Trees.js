/**
 * Given n, how many structurally unique BST's (binary search trees) that store values 1...n?
 *
 * For example,
 * Given n = 3, there are a total of 5 unique BST's.
 *
 *    1         3     3      2      1
 *     \       /     /      / \      \
 *      3     2     1      1   3      2
 *     /     /       \                 \
 *    2     1         2                 3
 */
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}
/**
 * we need count how many possible trees are there constructed from {2,3,4,5}, apparently it’s the same number as {1,2,3,4}
 *
 * Taking 1~n as root respectively:
 *      1 as root: # of trees = F(0) * F(n-1)  // F(0) == 1
 *      2 as root: # of trees = F(1) * F(n-2)
 *      3 as root: # of trees = F(2) * F(n-3)
 *      ...
 *      n-1 as root: # of trees = F(n-2) * F(1)
 *      n as root:   # of trees = F(n-1) * F(0)
 *
 * So, the formulation is:
 *      F(n) = F(0) * F(n-1) + F(1) * F(n-2) + F(2) * F(n-3) + ... + F(n-2) * F(1) + F(n-1) * F(0)
 * @param {number} n
 * @return {number}
 */
const numTrees = n => {
  const trees = [1, 1]; // initial cases when n=0 or n=1
  // increase the number of nodes from 2 to n+1
  for (let i = 2; i <= n; i++) {
    trees[i] = 0;
    // this is the formula //
    for (let j = 0; j < i; j++) {
      trees[i] += trees[j] * trees[i - 1 - j];
    }
  }
  return trees[n]; // TODO: why n? but the above is <=n
};

/**
 * Another solution
 * @param {number} n
 * @return {number}
 */
const numTreesB = n => {
  const dp = [1, 1, 2];

  for (let i = 3; i <= n; i++) {
    dp[i] = 0; // init like fill(0)
    for (let j = 1; j <= i; j++) {
      dp[i] += dp[i - j] * dp[j - 1];
    }
  }

  return dp[n];
};

// new file: 4/13/2018
