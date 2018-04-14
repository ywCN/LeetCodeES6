/**
 * Two elements of a binary search tree (BST) are swapped by mistake.
 *
 * Recover the tree without changing its structure.
 *
 * Note:
 * A solution using O(n) space is pretty straight forward. Could you devise a constant space solution?
 */
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}
/**
 * O(n) space for worse case
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
const recoverTree = root => {
  let first = null;
  let second = null;
  let prev = null;
  if (!root) return;

  const helper = root => {
    if (!root) return;
    helper(root.left);
    if (prev && prev.val >= root.val) {
      if (!first) first = prev; // init
      second = root;
    }
    prev = root;
    helper(root.right);
  };

  helper(root);
  // swap
  let temp = first.val;
  first.val = second.val;
  second.val = temp;
};
/**
 * O(1) space
 * Morris Inorder Tree Traversal
 * https://youtu.be/wGXB9OWhPTg
 * http://www.cnblogs.com/AnnieKim/archive/2013/06/15/morristraversal.html
 * code from:
 * https://discuss.leetcode.com/topic/9305/detail-explain-about-how-morris-traversal-finds-two-incorrect-pointer
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
const recoverTreeB = root => {
  let pre = null;
  let first = null;
  let second = null;
  let temp = null;
  while (root) {
    if (root.left) {
      // connect threading for root
      temp = root.left;
      while (temp.right && temp.right !== root) temp = temp.right;
      // the threading already exists
      if (temp.right) {
        if (pre && pre.val > root.val) {
          if (first) {
            second = root;
          } else {
            first = pre;
            second = root;
          }
        }
        pre = root;

        temp.right = null;
        root = root.right;
      } else {
        // construct the threading
        temp.right = root;
        root = root.left;
      }
    } else {
      if (pre && pre.val > root.val) {
        if (first) {
          second = root;
        } else {
          first = pre;
          second = root;
        }
      }
      pre = root;
      root = root.right;
    }
  }
  // swap two node values;
  if (first && second) {
    let t = first.val;
    first.val = second.val;
    second.val = t;
  }
};

// new file: 4/14/2018
