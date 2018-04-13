/**
 * Given a binary tree, return the inorder traversal of its nodes' values.
 *
 * Note: Recursive solution is trivial, could you do it iteratively?
 */
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}
/**
 * Use stack to simulate the recursion, O(n) Space
 * Use a stack to store TreeNodes
 * Go to left most and add each node
 * Pop the node from stack, add its value, and try to go right
 * Stop if stack is empty or node is null
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = root => {
  const res = [];
  const stack = [];
  let cur = root;
  // while the stack is not empty OR cur is not null, the traversal is ongoing
  while (stack.length || cur) {
    if (cur) {
      // Traverse the left subtree //
      stack.push(cur);
      cur = cur.left;
    } else {
      cur = stack.pop();
      res.push(cur.val); // Visit the root. // Note: DO NOT forget .val
      // Traverse the right subtree //
      cur = cur.right;
    }
  }
  return res;
};

// new file: 4/13/2018
