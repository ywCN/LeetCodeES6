/**
 * You are given two non-empty linked lists representing two non-negative integers. 
 * The digits are stored in reverse order and each of their nodes contain a single digit. 
 * Add the two numbers and return it as a linked list.
 * 
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * 
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 *
 * Numbers are in reverse order to make the question easy.
 * If asked how to do it like regular number adding, 
 * reverse the given lists first the follow this approach, finally reverse the res.
 * Doubly LinkedList can do the work without reversing.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
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
const addTwoNumbers = (l1, l2) => {
  if (!l1) return l2;
  if (!l2) return l1;
  const dummy = new ListNode(0);
  let cur = dummy;
  let carry = 0;
  while (l1 || l2 || carry !== 0) { // end when both lists reach end and carry is 0
    if (l1) {
      carry += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      carry += l2.val;
      l2 = l2.next;
    }
    cur.next = new ListNode(Math.floor(carry % 10)); // use remainder of carry for current node
    cur = cur.next;
    carry = Math.floor(carry/10); // update carry to the quotient of carry/10
  }
  return dummy.next;
};

/** test */
const a = new ListNode(2);
const b = new ListNode(4);
const c = new ListNode(3);
a.next = b;
b.next = c;
c.next = null;

const d = new ListNode(5);
const e = new ListNode(6);
const f = new ListNode(6);
const g = new ListNode(9);
d.next = e;
e.next = f;
f.next = g;
g.next = null;


let res = addTwoNumbers(a, d); // 9665 + 342 = 10007
let resStr = '';
while (res) {
  resStr += res.val;
  res = res.next;
}
console.log(resStr); // 70001

// new file: 3/22/2018
