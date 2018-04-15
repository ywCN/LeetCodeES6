/**
 * Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then
 * right to left for the next level and alternate between).
 *
 * For example:
 * Given binary tree [3,9,20,null,null,15,7],
 * |   3
 * |  / \
 * | 9  20
 * |   /  \
 * |  15   7
 * return its zigzag level order traversal as:
 * | [
 * |   [3],
 * |   [20,9],
 * |   [15,7]
 * | ]
 */
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}
/**
 * Deque.
 * @param {TreeNode} root
 * @return {number[][]}
 */
const zigzagLevelOrder = root => {
  if (!root) return [];
  const res = [];
  let toggle = false; // control direction
  const q = [root]; // init
  while (q.length) {
    const level = [];
    for (let i = q.length - 1; i >= 0; i--) {
      const node = q.shift();
      // build level //
      if (toggle) level.unshift(node.val);
      else level.push(node.val);
      // for next level //
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
    toggle = !toggle;
    res.push(level);
  }
  return res;
};

// new file: 4/14/2018
