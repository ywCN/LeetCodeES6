/**
 * Given a binary tree
 *
 * Populate each next pointer to point to its next right node. If there is no
 * next right node, the next pointer should be set to NULL.
 *
 * Initially, all next pointers are set to NULL.
 *
 * Note:
 * You may only use constant extra space.
 * You may assume that it is a perfect binary tree (ie, all leaves are at the
 * same level, and every parent has two children).
 *
 * For example,
 * Given the following perfect binary tree,
 * |      1
 * |    /  \
 * |   2    3
 * |  / \  / \
 * | 4  5  6  7
 *
 * After calling your function, the tree should look like:
 * |      1 -> NULL
 * |    /  \
 * |   2 -> 3 -> NULL
 * |  / \  / \
 * | 4->5->6->7 -> NULL
 */
class TreeLinkNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = this.next = null;
  }
}
/**
 * Iterative. Like level order traversal.
 * Connect the next level from current level.
 * For each level, get the left most node.
 * Start from the left most node, while node is not null:
 * | Set current node's left child's next to current node's right.
 * | If current node's next exists:
 * |   Set current node's right child's next to current node's next's left.
 * | Move current to it's next.
 * Move to the next level.
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
const connect = root => {
  if (!root) return;
  let pre = root;
  let cur = null;
  while (pre.left) {
    // Stop when next level doesn't exist. Assumed perfect BT.
    cur = pre; // Current pointer of this level.
    while (cur) {
      cur.left.next = cur.right; // Set left child's next to right child.
      if (cur.next) {
        // Set right child's next to next node's left child.
        cur.right.next = cur.next.left;
      }
      cur = cur.next; // Move to the next node. (we connected them in previous iterations)
    }
    pre = pre.left; // Move to the next level.
  }
};

/**
 * Recursive.
 * @param {TreeLinkNode} tree
 * @return {void} Do not return anything, modify tree in-place instead.
 */
const connectB = tree => {
  if (!tree) return;

  if (tree.left) {
    tree.left.next = tree.right;
  }

  if (tree.right && tree.next && tree.next.left) {
    tree.right.next = tree.next.left;
  }

  connect(tree.left);
  connect(tree.right);
};

// new file: 4/17/2018
