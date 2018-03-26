/**
 * Given a linked list, remove the nth node from the end of list and return its head.
 *
 * For example,
 *
 * Given linked list: 1->2->3->4->5, and n = 2.
 *
 * After removing the second node from the end, the linked list becomes
 * 1->2->3->5.
 *
 * Note:
 * Given n will always be valid.
 * Try to do this in one pass.
 *
 * Unlike DLinkedList node can self remove, SLinkedList node needs the node before it to remove.
 */
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
/**
 * Dummy head and Runner's technique
 * create dummy Node
 * create pointers p1 and p2, move p1 n steps first
 * move both pointer at same speed until p1.next = null;
 * when p1 stops at the last node, p2.next is the target
 * remove the node after the p2
 *
 * can also for(int i = 0; i < n+1; i++); while(p1 != null); to locate node before target
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = (head, n) => {
  const dummy = new ListNode(0);
  dummy.next = head;
  let p1 = dummy; // fast pointer
  let p2 = dummy;
  for (let i = 0; i < n; i++) {
    // when p1 stops at last node, p2 is at node before target
    p1 = p1.next;
  }
  while (p1.next !== null) {
    // make p1 stops at last node, not null
    p1 = p1.next;
    p2 = p2.next;
  }
  p2.next = p2.next.next;
  return dummy.next;
};

const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(3);
const d = new ListNode(4);
const e = new ListNode(5);
a.next = b;
b.next = c;
c.next = d;
d.next = e;

let res = removeNthFromEnd(a, 2);
while (res) {
  console.log(res.val);
  res = res.next;
}

// new file: 3/25/2018
