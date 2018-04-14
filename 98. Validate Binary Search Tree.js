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

// new file: 4/14/2018
