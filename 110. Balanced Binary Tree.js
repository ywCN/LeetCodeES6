/**
 * Given a binary tree, determine if it is height-balanced.
 *
 * For this problem, a height-balanced binary tree is defined as a binary tree
 * in which the depth of the two subtrees of every node never differ by more than 1.
 */
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}
/**
 * Modification of maxDepth method in 104. Maximum Depth of Binary Tree
 * If current node is null, return 0
 * Compare left depth with right depth
 * If the difference is bigger than 1, set isBalance false
 * Otherwise go on to the rest of the nodes
 * @param {TreeNode} root
 * @return {boolean}
 */
const isBalanced = root => {
  return depth(root) !== -1;
};

const depth = root => {
  if (!root) return 0;
  const left = depth(root.left); // left height
  const right = depth(root.right); // right height
  // check status in current tree and status returned from left and right subtrees
  if (left === -1 || right === -1 || Math.abs(left - right) > 1) return -1; // -1 as a flag of imbalance
  return Math.max(left, right) + 1; // pass all tests, level+1
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isBalancedB = root => {
  let res = true;

  const dfs = root => {
    if (!root) return 0;
    const a = root.left ? dfs(root.left) : 0;
    const b = root.right ? dfs(root.right) : 0;
    if (Math.abs(a - b) > 1) res = false;
    return Math.max(a, b) + 1;
  };

  dfs(root);
  return res;
};

// new file: 4/16/2018
