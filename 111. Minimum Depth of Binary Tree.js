/**
 * Given a binary tree, find its minimum depth.
 * The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
 */
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}
/**
 * DFS.
 * @param {TreeNode} root
 * @return {number}
 */
const minDepth = root => {
  if (!root) return 0;
  const left = minDepth(root.left);
  const right = minDepth(root.right);
  // if (!(left && right)) return left + right + 1; // (left===0 or right===0)
  // return Math.min(left, right) + 1; // (left!==0 and right!==0)
  return left && right ? Math.min(left, right) + 1 : left + right + 1; // both!==0
};

/**
 * DFS.
 * @param {TreeNode} root
 * @return {number}
 */
const minDepthB = root => {
  if (!root) return 0; // corner case
  if (!root.left && !root.right) return 1; // should be 1, not 0
  if (!root.left) return minDepth(root.right) + 1; // leave case
  if (!root.right) return minDepth(root.left) + 1; // leave case
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};

/**
 * BFS.
 * @param {TreeNode} root
 * @return {number}
 */
const minDepthC = root => {
  if (!root) return 0; // corner case !!!
  let depth = 0;
  const q = [root];
  while (q.length) {
    const size = q.length;
    depth++;
    for (let i = 0; i < size; i++) {
      const node = q.shift();
      if (!node.left && !node.right) return depth; // return when detect first leaf(has both nll children)
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
  }
  return depth;
};
// new file: 4/16/2018
