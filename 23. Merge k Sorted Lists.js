/**
 * Merge k sorted linked lists and return it as one sorted list.
 * Analyze and describe its complexity.
 */
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
/**
 * Divide and Conquer.
 * Time: O(nlog(k)), where k is the number of linked lists. n is average number of nodes in each list.
 * Space: O(log(k)) stack space.
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = lists => {
  if (lists === null || lists.length === 0) return [];
  return divide(lists, 0, lists.length - 1) || [];
};

// Tree will build up until unable to split the lists[], then merging starts.
// Each node of tree can merge 2 lists(including merged) then return a root as the result.
const divide = (lists, left, right) => {
  if (left === right) return lists[left];
  const mid = Math.floor((right + left) / 2); // Note the floor
  const l1 = divide(lists, left, mid);
  const l2 = divide(lists, mid + 1, right);
  return merge(l1, l2);
};

const merge = (l1, l2) => {
  if (!l1) return l2;
  if (!l2) return l1;
  const dummy = new ListNode(0);
  let cur = dummy;
  while (l1 && l2) {
    // &&
    if (l1.val < l2.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }
    cur = cur.next;
  }
  if (l1) cur.next = l1;
  if (l2) cur.next = l2;
  return dummy.next;
};

// new file: 3/26/2018
