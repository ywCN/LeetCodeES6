/**
 * Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.
 *
 * You should preserve the original relative order of the nodes in each of the two partitions.
 *
 * For example,
 * Given 1->4->3->2->5->2 and x = 3,
 * return 1->2->2->4->3->5.
 */
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
/**
 * scan and combine two new lists
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
const partition = (head, x) => {
  // two dummy nodes for two list
  let dummy1 = new ListNode(0);
  let dummy2 = new ListNode(0);
  // current tails of two lists
  let cur1 = dummy1;
  let cur2 = dummy2;
  while (head) {
    if (head.val < x) {
      cur1.next = head;
      cur1 = cur1.next;
    } else {
      cur2.next = head;
      cur2 = cur2.next;
    }
    head = head.next;
  }
  cur2.next = null; // important! to remove old reference of the node
  cur1.next = dummy2.next;
  return dummy1.next;
};

// new file: 4/10/2018
