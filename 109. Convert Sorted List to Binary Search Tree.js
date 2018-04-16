/**
 * Given a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.
 */
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}
/**
 * Time: O(nlogn) for logn parts and each part spends O(n) time to find mid node.
 * @param {ListNode} head
 * @return {TreeNode}
 */
const sortedListToBST = head => {
  if (!head) return null;
  if (!head.next) return new TreeNode(head.val);

  let prev = null;
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    // slow will points to mid node
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  prev.next = null; // dereference nodes in list

  const root = new TreeNode(slow.val);
  root.left = sortedListToBST(head);
  root.right = sortedListToBST(slow.next);

  return root;
};

// new file: 4/15/2018
