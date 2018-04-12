/**
 * Reverse a linked list from position m to n. Do it in-place and in one-pass.
 *
 * For example:
 * Given 1->2->3->4->5->NULL, m = 2 and n = 4,
 * return 1->4->3->2->5->NULL.
 *
 * Note:
 * Given m, n satisfy the following condition:
 * 1 ≤ m ≤ n ≤ length of list.
 */
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
/**
 * Find the reversed part and reverse it.
 *
 * In the second for loop, the reversing patten is
 * 12345->21345->32145->43215->54321
 *  ^       ^       ^       ^       <==== moving element in each iteration
 * 就是把元素不停的放到第一位。
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
const reverseBetween = (head, m, n) => {
  if (!head) return null;
  let dummy = new ListNode(0); // create a dummy node to mark the head of this list
  dummy.next = head;
  let pre = dummy; // make a pointer pre as a marker for the node before reversing
  for (let i = 0; i < m - 1; i++) pre = pre.next;
  let start = pre.next; // a pointer to the beginning of a sub-list that will be reversed
  let then = start.next; // a pointer to a node that will be reversed
  // 1 - 2 -3 - 4 - 5 ; m=2; n =4 ---> pre = 1, start = 2, then = 3
  // dummy-> 1 -> 2 -> 3 -> 4 -> 5
  for (let i = 0; i < n - m; i++) {
    start.next = then.next;
    then.next = pre.next;
    pre.next = then;
    then = start.next;
  }
  // first reversing : dummy->1 - 3 - 2 - 4 - 5; pre = 1, start = 2, then = 4
  // second reversing: dummy->1 - 4 - 3 - 2 - 5; pre = 1, start = 2, then = 5 (finish)
  return dummy.next;
};

// new file: 4/12/2018
