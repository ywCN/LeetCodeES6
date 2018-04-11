/**
 * Given a sorted linked list, delete all duplicates such that each element appear only once.
 *
 * For example,
 * Given 1->1->2, return 1->2.
 * Given 1->1->2->3->3, return 1->2->3.
 */
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
/**
 * Two Pointers.
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = head => {
  if (!head || !head.next) return head; // 0 or 1 node
  let cur = head; // stops at parsed tail
  while (cur) {
    let nextNode = cur.next; // get node after cur
    while (nextNode && cur.val === nextNode.val) {
      // next stops at the last node of dup nodes
      nextNode = nextNode.next;
    }
    cur.next = nextNode; // connect to skip dup nodes except the last one
    cur = cur.next; // move forward cur to continue parsing
  }
  // another way //
  // while (cur) {
  //   while (cur.next && cur.val == cur.next.val) {
  //     cur.next = cur.next.next; // keep moving cur.next as a node
  //   }
  //   cur = cur.next;
  // }
  return head;
};

// new file: 4/10/2018
