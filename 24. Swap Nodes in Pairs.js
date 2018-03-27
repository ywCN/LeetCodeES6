/**
 * Given a linked list, swap every two adjacent nodes and return its head.
 *
 * For example,
 * Given 1->2->3->4, you should return the list as 2->1->4->3.
 *
 * Your algorithm should use only constant space. You may not modify the values
 * in the list, only nodes itself can be changed.
 */
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = head => {
  if (!head) return null;
  const dummy = new ListNode(0);
  dummy.next = head;
  let cur = dummy;
  // cur is swapped, so we need 2 more nodes
  while (cur && cur.next && cur.next.next) {
    swap(cur, cur.next, cur.next.next);
    cur = cur.next.next; // move pointer forward by 2
  }
  return dummy.next;
};

const swap = (a, b, c) => {
  b.next = c.next;
  a.next = c;
  c.next = b;
};

const swapPairsB = head => {
  if (!head) return null;
  const first = head;
  const second = head.next;
  if (!second) return first;
  first.next = swapPairs(second.next);
  second.next = first;
  return second;
};

// new file: 3/26/2018
