/**
 * Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
 * 
 * For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
 * 
 * |     1
 * |    / \
 * |   2   2
 * |  / \ / \
 * | 3  4 4  3
 * But the following [1,2,2,null,3,null,3] is not:
 * |   1
 * |  / \
 * | 2   2
 * |  \   \
 * |  3    3
 * Note:
 * Bonus points if you could solve it both recursively and iteratively.
 */
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}
/**
 * Iterative DFS. Stack.
* @param {TreeNode} root
* @return {boolean}
*/
const isSymmetric = (root) => {
  if (!root) return true;
  const stack = [];
  stack.push(root.left);
  stack.push(root.right);
  while (stack.length) {
    const n1 = stack.pop();
    const n2 = stack.pop();
    if (!n1 && !n2) continue;
    if (!n1 || !n2) return false; // can combine with below line
    if (n1.val !== n2.val) return false;
    // left1 right2 right1 left2 OR do right1 left2 left1 right2 //
    stack.push(n1.left);
    stack.push(n2.right);
    stack.push(n1.right);
    stack.push(n2.left);
  }
  return true;
};

/**
 * Recursive.
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetricB = (root) => {
  return isMirror(root, root);
};

const isMirror = (n1, n2) => {
  if (!n1 && !n2) return true;
  if (!n1 || !n2) return false;
  return (n1.val === n2.val)
    && isMirror(n1.right, n2.left) // right first
    && isMirror(n1.left, n2.right); // left first
}

// new file: 4/14/2018
