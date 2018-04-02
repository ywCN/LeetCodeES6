/**
 * Implement pow(x, n).
 */
/**
 * Recursion. Time: O(logN). Space: O(1)
 * Try to reduce the power by half each time. A tree like fib-number.
 * eg. 2^2 = 2^1 * 2^1 = (2^0 * 2^0 * 2) * (2^0 * 2^0 * 2) = (1 * 1 * 2) * (1 * 1 * 2) = 4
 * eg. 2^3 = 2^1 * 2^1 * 2 = (2^0 * 2^0 * 2) * (2^0 * 2^0 * 2) * 2 = (1 * 1 * 2) * (1 * 1 * 2) * 2 = 8
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = (x, n) => {
  if (n < 0) return 1 / x * myPow(1 / x, -(n + 1)); // pre-processing
  if (n === 0) return 1; // exit for odd
  if (n === 2) return x * x; // exit for even
  if (n % 2 === 0) {
    return myPow(myPow(x, Math.floor(n / 2)), 2); // even branching
  } else {
    return x * myPow(myPow(x, Math.floor(n / 2)), 2); // odd branching, extra x* for rounding down in division
  }
};

// new file: 4/1/2018
