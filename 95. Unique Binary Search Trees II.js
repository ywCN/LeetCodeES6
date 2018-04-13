/**
 * Given an integer n, generate all structurally unique BST's (binary search trees) that store values 1...n.
 *
 * For example,
 * Given n = 3, your program should return all 5 unique BST's shown below.
 *
 *    1         3     3      2      1
 *     \       /     /      / \      \
 *      3     2     1      1   3      2
 *     /     /       \                 \
 *    2     1         2                 3
 */
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}
/**
 * returns a list of roots
 *  Time: T(n)=T(0)T(n-1)+T(1)T(n-2)+...+T(n-1)T(0)
 *  T(n) = C(n,2n)/(n+1), so it's about O(n^(n-1))
 * @param {number} n
 * @return {TreeNode[]}
 */
const generateTrees = n => {
  if (n <= 0) return [];
  return generate(1, n);
};

const generate = (start, end) => {
  if (start > end) return [null];
  const res = [];
  for (let i = start; i <= end; i++) {
    // generate left and right nodes, note i is not included because it is the root of current BST
    // recall the concept of the BST, and start-end is like a sorted array
    // i will divide the array into left and right subtrees, this is like DivideAndConquer
    const leftNodes = generate(start, i - 1);
    const rightNodes = generate(i + 1, end);
    // build current BSTs //
    for (const left of leftNodes) {
      for (const right of rightNodes) {
        const root = new TreeNode(i);
        root.left = left;
        root.right = right;
        res.push(root);
      }
    }
  }
  return res;
};

// new file: 4/13/2018 似懂非懂
