/**
 * Given a sorted linked list delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.
 *
 * Given 1->2->3->3->4->4->5, return 1->2->5.
 * Given 1->1->1->2->3, return 2->3.
 */
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
/**
 * Two Pointers. Note it's sorted and positive.
 * slow - track the node before the dup nodes
 * fast - to find the last node of dup nodes
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = head => {
  const dummy = new ListNode(0); // 0 because given numbers are positive, can use 1<<31 instead
  dummy.next = head;
  let slow = dummy;
  let fast = dummy.next;
  while (fast) {
    while (fast.next && fast.val === fast.next.val) {
      // move fast to the last dup node
      fast = fast.next;
    }
    if (slow.next !== fast) {
      // if no dup, fast should be next to slow, !== means dup detected because initially slow=dummy and fast=dummy.next
      slow.next = fast.next; // skip all duplicated nodes as REQUIRED by the question, connect to the node after all dups
      fast = slow.next; // set fast next to slow like init
    } else {
      // move both pointers if no dup detected
      slow = slow.next;
      fast = fast.next;
    }
  }
  return dummy.next;
};

// new file: 4/10/2018
