/**
 * Given a binary tree, find its maximum depth.
 *
 * The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
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
const maxDepth = root => {
  if (!root) return 0; // exit
  const left = maxDepth(root.left); // depth of left subtree
  const right = maxDepth(root.right); // depth of right subtree
  return Math.max(left, right) + 1; // +1 for root level
};

/**
 * BFS.
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepthB = root => {
  if (!root) return 0;
  const q = [root];
  let depth = 0;
  while (q.length) {
    // not empty means there are at lease one more level
    for (let i = q.length - 1; i >= 0; i--) {
      const node = q.shift();
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
    depth++;
  }
  return depth;
};

// new file: 4/14/2018
