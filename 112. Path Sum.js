/**
 * Given a binary tree and a sum, determine if the tree has a root-to-leaf path
 * such that adding up all the values along the path equals the given sum.
 *
 * For example:
 * Given the below binary tree and sum = 22,
 *               5
 *              / \
 *             4   8
 *            /   / \
 *           11  13  4
 *          /  \      \
 *         7    2      1
 *
 * return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.
 */
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}
/**
 * Substract root value from sum every time
 * Return sum === root.val when encountering leaves, because if they equal, that is a valid result
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
const hasPathSum = (root, sum) => {
  if (!root) return false; // encountering null node
  if (!root.left && !root.right && sum === root.val) return true; // encountering leaf
  return (
    hasPathSum(root.left, sum - root.val) || // sum - root.val because we need to see its remain
    hasPathSum(root.right, sum - root.val)
  );
};

// new file: 4/17/2018
