/**
 * Given two binary trees, write a function to check if they are equal or not.
 *
 * Two binary trees are considered equal if they are structurally identical
 * and the nodes have the same value.
 */
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}
/**
 * Recursive DFS, pre-order check
 * If both node's values are the same, left subtrees are same and so right
 * Return true, otherwise return false
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = (p, q) => {
  if (!p || !q) return p === q;
  return (
    p.val === q.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  );
};

/**
 * non-recursive BFS
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTreeB = (p, q) => {
  const queue = []; // var q has been used
  queue.push(p);
  queue.push(q);
  while (queue.length) {
    p = queue.shift();
    q = queue.shift();
    if (!p && !q) {
      continue; // both null
    } else if (!p || !q || p.val !== q.val) {
      return false;
    } else {
      queue.push(p.left);
      queue.push(q.left);
      queue.push(p.right);
      queue.push(q.right);
    }
  }
  return true;
};

// new file: 4/14/2018
