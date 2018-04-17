/**
 * Follow up for problem "Populating Next Right Pointers in Each Node".
 *
 * What if the given tree could be any binary tree? Would your recursive solution still work?
 *
 * Note:
 *
 * You may only use constant extra space.
 * For example,
 * Given the following binary tree,
 * |      1
 * |    /  \
 * |   2    3
 * |  / \    \
 * | 4   5    7
 * After calling your function, the tree should look like:
 * |      1 -> NULL
 * |    /  \
 * |   2 -> 3 -> NULL
 * |  / \    \
 * | 4-> 5 -> 7 -> NULL
 */
class TreeLinkNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = this.next = null;
  }
}
/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
const connect = root => {
  let head = root; // The left most node in the lower level
  let prev = null; // The previous node in the lower level
  let cur = null; // The current node in the upper level
  while (head) {
    cur = head; // used the previously cached head
    prev = null;
    head = null;
    while (cur) {
      if (cur.left) {
        // cur.left need to be connected
        // connect
        if (prev) prev.next = cur.left;
        // cache head of this level, will be used in next loop after this level's nodes are connected
        else head = cur.left;
        prev = cur.left; // move prev pointer, not prev=prev.next because of edge case
      }
      if (cur.right) {
        // cur.right need to be connected
        // connect
        if (prev) prev.next = cur.right;
        // cache head of this level, will be used in next loop after this level's nodes are connected
        else head = cur.right;
        prev = cur.right; // move prev pointer, not prev=prev.next because of edge case
      }
      cur = cur.next; // move pointer in upper level after checked its both children
    }
  }
};

/**
 * Recursive.
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
const connectB = (root, child, next_level) => {
  if (!root) return;

  if (child) {
    if (root.left) {
      child.next = root.left;
      child = root.left;
    }
  }

  if (!child) {
    if (root.left) {
      child = root.left;
      next_level = root.left;
    }
  }

  if (child && root.right) {
    child.next = root.right;
    child = root.right;
  } else if (root.right) {
    child = root.right;
    next_level = root.right;
  }

  if (root.next) {
    connect(root.next, child, next_level);
  } else {
    connect(next_level);
  }
};

// new file: 4/17/2018
