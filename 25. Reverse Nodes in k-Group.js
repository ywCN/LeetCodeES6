/**
 * Given a linked list, reverse its k nodes of each time and return its modified list.
 * If the number of nodes is not a multiple of k then left rest nodes as it is.
 * You may not alter the values in the nodes, only nodes itself may be changed.
 * Only constant memory is allowed.
 *
 * For example,
 * Given this linked list: 1->2->3->4->5
 * For k = 2, you should return: 2->1->4->3->5
 * For k = 3, you should return: 3->2->1->4->5
 */
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
/**
 * 1->2->3->4->5->6, k=3
 * before reversing:	d->1->2->3->4->5->6->null
 * 						|		 |
 * 						begin	head
 * after reversing:		d->3->2->1->4->5->6->null
 * 								 |  |
 * 							 begin	head
 * before reversing:	d->3->2->1->4->5->6->null
 * 								 |        |
 * 						     begin	 	 head
 * before reversing:	d->1->2->3->6->5->4->null
 * 										  |    |
 * 										begin  head
 *
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const reverseKGroup = (head, k) => {
  if (!head || !head.next || k === 1) return head;
  const dummy = new ListNode(0);
  dummy.next = head; // for return
  let begin = dummy; // begin is the node before each group of k nodes
  for (let i = 1; head; i++) {
    // i=1 for we need to count nodes
    if (i % k !== 0) {
      // not a product of k, so move pointer
      head = head.next;
    } else {
      // find a product of k, so reverse this part and move pointer
      begin = reverseMid(begin, head.next); // move begin to reversed part's tail
      head = begin.next; // head is tail's next
    }
  }
  return dummy.next;
};

/**
 * Reverse middle nodes not including begin and end, return the tail of reversed part.
 * 1-2-3-4-5  =>  1-4-3-2-5
 * return 2
 * @param {ListNode} begin
 * @param {ListNode} end
 * @return {ListNode}
 */
const reverseMid = (begin, end) => {
  let prev = begin;
  let cur = begin.next;
  let next;

  let tail = begin.next; // save it for connectting to end
  while (cur !== end) {
    next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  begin.next = prev; // connect begin to reversed head(prev), cannot use cur because it's now out of reversed part
  tail.next = end; // connect reversed tail to end
  return tail;
};

// new file: 3/27/2018
