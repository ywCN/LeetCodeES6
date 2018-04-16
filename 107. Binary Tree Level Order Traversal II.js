/**
 * Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).
 *
 * For example:
 * Given binary tree [3,9,20,null,null,15,7],
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 * return its bottom-up level order traversal as:
 * [
 *   [15,7],
 *   [9,20],
 *   [3]
 * ]
 */
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}
/**
 * BFS. See 102. Binary Tree Level Order Traversal
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrderBottom = root => {
  if (!root) return [];
  const res = [];
  const q = [root]; // init
  while (q.length) {
    const level = [];
    for (let i = q.length - 1; i >= 0; i--) {
      // q.length - 1 is only for controlling the number of iterations
      const node = q.shift();
      level.push(node.val);
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
    res.push(level);
  }
  return res.reverse(); // or do unshift() at res.push(level);
};

// new file: 4/15/2018
