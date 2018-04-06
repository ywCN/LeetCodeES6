/**
 * Given a list, rotate the list to the right by k places, where k is non-negative.
 *
 * For example:
 * Given 1->2->3->4->5->null and k = 2,
 * return 4->5->1->2->3->null.
 */
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
/**
 * Ex: {1,2,3} k=2, move nodes after the (3-1)st node to front
 * Ex: {1,2,3} k=5, move nodes after the (3-5%3=1)st node to front.
 *                                                                _____________
 * k=2, head=1,slow=3,fast=5  |                           |       |           ^       |
 * dummy->1->2->3->4->5->null | dummy->1->2->3->4->5 null | dummy 4->5->1->2->3 null  | dummy->4->5->1->2->3->null
 *        ^     ^     ^       |        ^___________|      |    |__^                   |
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const rotateRight = (head, k) => {
  if (!head || !head.next) return head;
  const dummy = new ListNode(0);
  dummy.next = head;
  let fast = dummy;
  let slow = dummy;
  let len = 0;
  while (fast.next != null) {
    // get length and move pointer to last node
    len++;
    fast = fast.next;
  }
  let steps = len - k % len; // the key part
  for (let i = 0; i < steps; i++) {
    slow = slow.next;
  }
  fast.next = head; // connect last node to old head
  dummy.next = slow.next; // connect dummy to new head
  slow.next = null; // connect tail to null
  return dummy.next;
};

// new file: 4/5/2018
