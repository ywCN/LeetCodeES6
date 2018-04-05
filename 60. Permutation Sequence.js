/**
 * The set [1,2,3,...,n] contains a total of n! unique permutations.
 *
 * By listing and labeling all of the permutations in order,
 * We get the following sequence (ie, for n = 3):
 *
 * "123"
 * "132"
 * "213"
 * "231"
 * "312"
 * "321"
 * Given n and k, return the kth permutation sequence.
 *
 * Note: Given n will be between 1 and 9 inclusive.
 */
/**
 * https://discuss.leetcode.com/topic/5081/an-iterative-solution-for-reference/15
 *
 * The logic is as follows: for n numbers the permutations can be divided to (n-1)! groups,
 * for n-1 numbers can be divided to (n-2)! groups, and so on.
 * Thus k/(n-1)! indicates the index of current number,
 * and k%(n-1)! denotes remaining index for the remaining n-1 numbers.
 * We keep doing this until n reaches 0, then we get n numbers permutations that is kth.
 *
 *
 * example:
 * n = 4, k = 14:
 *
 * We have {1, 2, 3, 4}, find the 14th permutation.
 * List out all the permutations:
 *
 * 1 + (permutations of 2, 3, 4)
 * 2 + (permutations of 1, 3, 4)
 * 3 + (permutations of 1, 2, 4)
 * 4 + (permutations of 1, 2, 3)
 *
 * To find the 14th, we can see it falling to range 3 + (permutations of 1, 2, 4), since 1 + (permutations of 2, 3, 4) and 2 + (permutations of 1, 3, 4) could take the first 2 * (3!) = 12 permutations. So we can know the first number of result is 3.
 *
 * Then the question turn to be a smaller problem.
 * {1, 2, 4}, find the 2nd permutation.
 * List out all the permutations:
 * 1 + (permutations of 2, 4)
 * 2 + (permutations of 1, 4)
 * 4 + (permutations of 1, 2)
 *
 * There are 2! + 2! + 2!, 6 permutation. The 2nd must be in range 1 + (permutations of 2, 4). So we can know the second number of result is 1.
 *
 * So the question turn be a smaller problem.
 * {2, 4}, find the 2nd permutation. The answer is (4, 2).
 * So the final result is (3, 1, 4, 2)
 *
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const getPermutation = (n, k) => {
  const nums = [];
  const res = [];

  const f = []; // factorial array
  f[0] = 1; // 0's factorial is 1

  for (let i = 1; i < n; i++) {
    nums.push(i);
    f[i] = f[i - 1] * i;
  }
  nums.push(n); // corner case

  k--; // 14th count from 1, turn to be 13th count from 0.

  for (let i = n; i > 0; i--) {
    let index = Math.floor(k / f[i - 1]);
    k = k % f[i - 1];
    res.push(nums.splice(index, 1));
  }
  return res.join('');
};
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const getPermutationB = (n, k) => {
  k = k - 1;
  let factorial = 1;
  for (let i = 1; i < n; i++) {
    factorial *= i;
  }
  const digits = [];
  for (let i = 0; i < n; i++) {
    digits.push(i + 1); // [1,2,3,4...]
  }
  const res = [];
  for (let i = 0; i < n; i++) {
    let index = Math.floor(k / factorial); // locate the element we need for building sb
    res.push(digits[index]);
    digits.splice(index, 1); // remove used digit
    k = k % factorial; // remove current factorial part of k
    if (i < n - 1) {
      factorial = Math.floor(factorial / (n - 1 - i)); // reduce factorial for next digit
    }
  }
  return res.join('');
};

// new file: 4/4/2018
