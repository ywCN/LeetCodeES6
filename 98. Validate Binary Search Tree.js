/**
 * Given a binary tree, determine if it is a valid binary search tree (BST).
 *
 * Example 1:
 * |   2
 * |  / \
 * | 1   3
 * Binary tree [2,1,3], return true.
 * Example 2:
 * |   1
 * |  / \
 * | 2   3
 * Binary tree [1,2,3], return false.
 */
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}
/**
 * Recursive inorder traversal.
 * generate a list for a binary tree.
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBST = root => {
  if (!root) return true;
  const list = [];

  const inOrder = cur => {
    if (!cur) return; // ignore null leaves, do not return null
    inOrder(cur.left);
    list.push(cur.val);
    inOrder(cur.right);
  };

  inOrder(root);
  for (let i = 1; i < list.length; i++) {
    if (list[i - 1] >= list[i]) return false; // assumed no equal
  }
  return true; // pass all tests
};

/**
 * Iterative inorder traversal. O(n) time  O(n) space for worst case(skewed trees)
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBSTB = root => {
  if (!root) return true;
  const stack = [];
  let cur = root; // copy for readability
  let pre = null; // previous node
  while (cur || stack.length) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop(); // current node
    if (pre && cur.val <= pre.val) return false; // list.add() if need a list
    pre = cur; // update pre node
    cur = cur.right; // update current
  }
  return true;
};

/**
 * use Infinity and -Infinity to decrease the range
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBSTC = root => {
  return helper(root, Infinity, -Infinity);
};

const helper = (cur, max, min) => {
  if (!cur) return true;
  // the current node should be the max for left subtree and min for the right subtree
  if (cur.val >= max || cur.val <= min) return false; // this should not happen to a BST,
  return helper(cur.left, cur.val, min) && helper(cur.right, max, cur.val); // left subtree's max should be cur.val, right subtree's min should be cur.val
};

// new file: 4/14/2018
