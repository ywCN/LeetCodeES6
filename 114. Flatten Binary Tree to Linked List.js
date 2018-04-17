/**
 * Given a binary tree, flatten it to a linked list in-place.
 *
 * For example,
 * Given
 *
 * |     1
 * |    / \
 * |   2   5
 * |  / \   \
 * | 3   4   6
 * The flattened tree should look like:
 * | 1
 * |  \
 * |   2
 * |    \
 * |     3
 * |      \
 * |       4
 * |        \
 * |         5
 * |          \
 * |           6
 * Hints:
 * If you notice carefully in the flattened tree, each node's right child points to the next node of a pre-order traversal.
 */
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}
/**
 * Iterative. Search for available left node and insert the entire subtree of the left node into right node. Repeat this.
 *
 * firstly insert subtree 2-3-4 at 5:   root=1, 3.right->5(root.right), root.right->2(root.left), root.left->null
 * then insert subtree 4 at 5:          root=3, 4.right->5(root.right), root.right->4(root.left), root.left->null
 *      1         1       1
 *    2   5        2       2
 *     3   6        3       3
 *    4            4 5       4
 *                    6       5
 *                             6
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
const flatten = root => {
  while (root) {
    if (root.left) {
      // if left==null, root moves to right
      let node = root.left; // make a pointer
      while (node.right) {
        // find the rightmost node in this subtree, will be used to connect root.right
        node = node.right;
      }
      node.right = root.right; // first, connect the rightmost node in left subtree to the root of right subtree
      root.right = root.left; // copy left pointer to right
      root.left = null; // disconnect left pointer
    }
    root = root.right; // always move root pointer
  }
};

/**
 * Recursive.
 * Suppose flatten already works.
 * The result is flatten the left subtree, then the right subtree.
 * Then set root.right to left subtree and connect the tail with right subtree.
 * Remember to set root.left to null.
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
const flattenB = root => {
  if (!root) return;
  flattenB(root.left);
  flattenB(root.right);
  const cache = root.right;
  root.right = root.left;
  root.left = null; // IMPORTANT! Set left child to null to disconnect.
  let cur = root;
  while (cur.right) {
    cur = cur.right;
  }
  cur.right = cache;
};

/**
 * Stack.
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
const flatten = root => {
  if (!root) return;
  const stack = [root];
  while (stack.length) {
    let cur = stack.pop();
    if (cur.right) stack.push(cur.right);
    if (cur.left) stack.push(cur.left);
    if (stack.length) {
      cur.right = stack[stack.length - 1];
    }
    cur.left = null;
  }
};

// new file: 4/17/2018
