/**
 * Given a binary tree, return the level order traversal of its nodes' values.
 * (ie, from left to right, level by level).
 * For example:
 * Given binary tree [3,9,20,null,null,15,7],
 * |   3
 * |  / \
 * | 9  20
 * |   /  \
 * |  15   7
 * return its level order traversal as:
 * | [
 * |   [3],
 * |   [9,20],
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
 * BFS
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = root => {
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
  return res;
};

/**
 * DFS
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrderB = root => {
  const res = [];

  const dfs = (cur, level) => {
    if (!cur) return;
    if (level >= res.length) res.push([]); // make sure container for each level is available
    res[level].push(cur.val);
    dfs(cur.left, level + 1);
    dfs(cur.right, level + 1);
  };

  dfs(root, 0);
  return res;
};

// new file: 4/14/2018
