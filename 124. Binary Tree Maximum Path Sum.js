/**
 * Given a binary tree, find the maximum path sum.
 *
 * For this problem, a path is defined as any sequence of nodes from some
 * starting node to any node in the tree along the parent-child connections.
 * The path must contain at least one node and does not need to go through the root.
 *
 * For example:
 * Given the below binary tree,
 *
 *        1                  1
 *       / \                / \
 *      2   3              2   1
 * Return 6.              / \ / \
 *                      10 10 1  1
 *                  Return 22, not 26.
 *
 * Note this question is NOT finding the max path from root to leaves. May have negative value.
 * It is looking for a max path in the tree starting and ending at any node .
 */
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}
/**
 * Get path sum of left and right sub trees
 * curMax of this level can be root's value v or v+left or v+right
 * max sum can be biggest of prevMax, curMax, and left + right + root.val
 *
 * You can imagine the helper( ) function goes from the bottom of the tree to the top, it’s in post-order manner.
 * At every node, we need to make a decision, if the sum comes from the left path larger than the right path,
 * we pick the left path and plus the current node’s value, this recursion goes all the way up to the root node.
 * @param {TreeNode} root
 * @return {number}
 */
const maxPathSum = root => {
  if (!root) return 0;
  let max = root.val;

  const helper = cur => {
    if (!cur) return 0;
    const left = helper(cur.left); // path sum in left subtree
    const right = helper(cur.right); // path sum in right subtree
    const curMax = Math.max(cur.val, Math.max(left, right) + cur.val); // try to get the largest
    max = Math.max(max, Math.max(curMax, left + right + cur.val)); // try to get the largest
    return curMax; // note that return curMax here for result of upper levels
  };

  helper(root);
  return max;
};

// new file: 4/17/2018
