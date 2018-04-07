/**
 * Implement int sqrt(int x).
 * Compute and return the square root of x.
 */
/**
 * Binary Search. Do not use mid*mid, it may overflow.
 * search 1,2, ... n
 * Before while loop ends, left = mid = right.
 * case1: l,r stop at left of the answer. since < sqrt(x), l will move right and end the loop, so r is the right answer.
 * case2: l,r stop at right of the answer. since > sqrt(x), r will move left and end the loop, so r is the right answer.
 * @param {number} x
 * @return {number}
 */
const mySqrt = x => {
  let l = 1;
  let r = x;
  while (l <= r) {
    // Note <=, we need them overlap for covering all cases
    let mid = Math.floor((r + l) / 2);
    if (mid * mid === x) {
      // mid * mid can overflow
      return mid;
    } else if (mid * mid < x) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return r;
};

// new file: 4/6/2018
