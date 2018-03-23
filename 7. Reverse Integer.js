/**
 * Reverse digits of an integer.
 * 
 * Example1: x = 123, return 321
 * Example2: x = -123, return -321
 * 
 * Keys: Last digit is 0. Reversed integer might overflow.
 * 
 * If the integer's last digit is 0, what should the output be? ie, cases such as 10, 100.
 * 
 * Did you notice that the reversed integer might overflow? Assume the input is
 * a 32-bit integer, then the reverse of 1000000003 overflows. How should you
 * handle such cases? return 0 as required by the question;
 *
 * Note:
 * The input is assumed to be a 32-bit signed integer. 
 * Your function should return 0 when the reversed integer overflows.
 *
 * Note: negative modulus will produce negative output, so do not need to worry about sign.
 */

/**
 * Note the 32-bit signed integer range.
 * Math.floor is necessary
 * @param {number} x
 * @return {number}
 */
const reverse = x => {
  const negative = x < 0 ? true : false;
  if (negative) x = -x;
  let res = 0;
  while (x !== 0) {
    res = res*10 + x%10;
    x = Math.floor(x/10);
  }
  // safe >> -2^31 ~ 2^31-1
  if (negative && -res < -Math.pow(2, 31) ) return 0;
  if (!negative && res > Math.pow(2,31)-1 ) return 0;
  return negative ? -res : res;
};

console.log(12345);
console.log(4321);
console.log(-4321);

// new file: 3/22/2018
 