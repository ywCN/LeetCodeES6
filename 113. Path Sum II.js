/**
 * Given a binary tree and a sum, find all root-to-leaf paths where each path's
 * sum equals the given sum.
 *
 * For example:
 * Given the below binary tree and sum = 22,
 *               5
 *              / \
 *             4   8
 *            /   / \
 *           11  13  4
 *          /  \    / \
 *         7    2  5   1
 *
 * return
 * [
 *    [5,4,11,2],
 *    [5,8,4,5]
 * ]
 */
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
const pathSum = (root, sum) => {
  const res = [];
  const temp = [];

  const dfs = (cur, remain) => {
    if (!cur) return;
    temp.push(cur.val);
    if (!cur.left && !cur.right && remain === cur.val) {
      // don't forget !
      res.push([...temp]);
    } else {
      dfs(cur.left, remain - cur.val);
      dfs(cur.right, remain - cur.val);
    }
    temp.pop();
  };

  dfs(root, sum);
  return res;
};

// new file: 4/17/2018
