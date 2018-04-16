/**
 * Given inorder and postorder traversal of a tree, construct the binary tree.
 *
 * Note:
 * You may assume that duplicates do not exist in the tree.
 */
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}
/**
 * DFS.
 * See 105. Construct Binary Tree from Preorder and Inorder Traversal
 * Post order will generate a array that the root is always at last for each subtree.
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
const buildTree = (inorder, postorder) => {
  if (!postorder || !inorder) return null;

  const helper = (inorderStart, inorderEnd, postorderStart, postorderEnd) => {
    if (postorderStart > postorderEnd) return null;
    let pos = inorderStart;
    const root = new TreeNode(postorder[postorderEnd]);
    while (pos <= inorderEnd) {
      // search the root position in inOrder to partition the inorder list
      if (inorder[pos] === postorder[postorderEnd]) break;
      pos++;
    }
    const offset = pos - inorderStart; // moved distance in inorder list
    // note the root value at pos has been used, so it should not be included
    root.left = helper(
      inorderStart,
      pos - 1, // partition of inorder list
      postorderStart,
      postorderStart + offset - 1
    ); // left subtree
    root.right = helper(
      pos + 1, // partition of inorder list
      inorderEnd,
      postorderStart + offset,
      postorderEnd - 1 // -1 for postorderStart will always be used as root
    ); // right subtree
    return root;
  };

  return helper(0, inorder.length - 1, 0, postorder.length - 1);
};

// new file: 4/15/2018
