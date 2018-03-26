/**
 * Merge two sorted linked lists and return it as a new list.
 * The new list should be made by splicing together the nodes of the first two lists.
 * Input: 1->2->4, 1->3->4
 * Output: 1->1->2->3->4->4
 */

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = (l1, l2) => {
  const dummy = new ListNode(0);
  let cur = dummy;
  while (l1 && l2) {
    // Note: &&
    if (l1.val < l2.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }
    cur = cur.next;
  }
  if (l1) {
    cur.next = l1;
  }
  if (l2) {
    cur.next = l2;
  }
  return dummy.next;
};

const a = new ListNode(2);
const b = new ListNode(4);
const c = new ListNode(6);
const d = new ListNode(7);
const e = new ListNode(9);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = null;

const a1 = new ListNode(1);
const b1 = new ListNode(3);
const c1 = new ListNode(5);
a1.next = b1;
b1.next = c1;
c1.next = null;

let res = mergeTwoLists(a, a1);
while (res) {
  console.log(res.val);
  res = res.next;
}

// new file: 3/26/2018
