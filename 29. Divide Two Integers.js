/**
 * Divide two integers without using multiplication, division and mod operator.
 * If it is overflow, return MAX_INT.
 */
/**
 * Binary Search. Search for a boundary. Time: O(log(a/b)). Space: O(1).
 * Take care of special cases, 0, +1, -1, and
 * -2147483648 / -1 because 2<<31 == -2147483648 in java
 *
 * While dividend >= divisor
 * | We move divisor i times(3<<i).
 * | copy divisor.
 * | When (divisor<<i) > dividend, res += 1<<(i-1) and dividend -= (divisor<<(i-1)).
 *
 * For example: 32/3, 3*2^4 > 32, then res += 1<<(4-1) and 32-(3<<(4-1)) = 8. cur res = 8
 * 				8/3, 3*2^2 > 8, then res += 1<<(2-1) and 8-(3<<(2-1)) = 2. 	  cur res = 8+2
 * 				2 < 3, so return res = 10
 * are they positive integers? consider overflow situation?
 * no '/', '*', '%', so I still have + - and bits operation
 *
 * the leftover part of dividend is the remainder
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
const divide = (dividend, divisor) => {
  const isNeg = (dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0);
  const MAX_INT = ~(1 << 31);
  const MIN_INT = 1 << 31;
  let res = 0;

  if (divisor === 0) return dividend >= 0 ? MAX_INT : MIN_INT;
  if (dividend === 0) return 0;
  if (dividend <= MIN_INT && divisor === -1) return MAX_INT;

  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);

  while (dividend >= divisor) {
    // >= for divisible case
    let shift = 0;
    while (dividend >= divisor * Math.pow(2, shift)) {
      shift++;
    }
    dividend -= divisor * Math.pow(2, shift - 1);
    res += Math.pow(2, shift - 1);
  }
  return isNeg ? -res : res;
};

// new file: 3/27/2018
