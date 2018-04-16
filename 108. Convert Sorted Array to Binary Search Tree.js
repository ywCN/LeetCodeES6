/**
 * Given an array where elements are sorted in ascending order, convert it to a balanced BST.
 * For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
 */
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}
/**
 * Recursive, DFS
 * Divide into left subtree and right subtree with indices range
 * Choose mid point as the root of subtree
 *
 * This is the reverse process of inOrder traversal of BST.
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = nums => {
  if (!nums || !nums.length) return null;

  const helper = (start, end) => {
    if (start > end) return null;
    const mid = Math.floor((start + end) / 2);
    const root = new TreeNode(nums[mid]);
    root.left = helper(start, mid - 1);
    root.right = helper(mid + 1, end);
    return root;
  };

  return helper(0, nums.length - 1);
};

// new file: 4/15/2018
