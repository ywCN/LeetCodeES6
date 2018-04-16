/**
 * Given preorder and inorder traversal of a tree, construct the binary tree
 *
 * Note:
 * You may assume that duplicates do not exist in the tree.
 *
 * Draw a tree on paper can help understanding the relationship of indices.
 * Duplicates can result in mutiple trees.
 */
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}
/**
 * DFS, find root, find range of left and right sub trees
 *  Get root in preorder and search root in inorder
 * Then find range for left subtree and right subtree
 * Recurse down to build subtrees and connect to root
 *
 * Roots in inorder array will divide the array into 2 subtrees
 *
 * To determine preStart for the right sub-tree, we have to move towards the right of
 *  the preOrder array by a certain 'offset' value.
 *  This means we are skipping the next 'offset' number of indexes in the
 *  preOrder array to find the root of the right sub-tree.
 * This offset is determined by finding the size of the left sub-tree which is
 *  equal to the no. of indexes to the left of root found the inOrder array.
 *  Just think of (inIndex - inStart) as this offset.
 *  In other words, offset = ( inIndex - inStart ) .
 * Therefore the preStart for the right sub-tree is = preStart + offset + 1
 *
 * It will be simpler if you draw the problem on a paper and iterate for this example:
 * Inorder sequence: D B E A F C
 * Preorder sequence: A B D E C F
 *
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = (preorder, inorder) => {
  if (!preorder || !inorder) return null;

  const helper = (inorderStart, inorderEnd, preorderStart, preorderEnd) => {
    if (preorderStart > preorderEnd) return null;
    let pos = inorderStart;
    const root = new TreeNode(preorder[preorderStart]);
    while (pos <= inorderEnd) {
      // search the root position in inOrder to partition the inorder list
      if (inorder[pos] === preorder[preorderStart]) break;
      pos++;
    }
    const offset = pos - inorderStart; // moved distance in inorder list
    // note the root value at pos has been used, so it should not be included
    root.left = helper(
      inorderStart,
      pos - 1, // partition of inorder list
      preorderStart + 1, // +1 for preorderStart will always be used as root
      preorderStart + offset
    ); // left subtree
    root.right = helper(
      pos + 1, // partition of inorder list
      inorderEnd,
      preorderStart + offset + 1,
      preorderEnd
    ); // right subtree
    return root;
  };

  return helper(0, inorder.length - 1, 0, preorder.length - 1);
};

// new file: 4/14/2018
