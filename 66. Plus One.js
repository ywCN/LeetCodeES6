/**
 * Given a non-negative number represented as an array of digits, plus one to the number.
 *
 * The digits are stored such that the most significant digit is at the head of the list.
 *
 * most significant digit === leftmost digit in a number
 */
/**
 * Math. each iteration adds 1 to current decimal position, if no carry is needed, it will be returned
 * 123+1=124: add 1 to 3, 4!=10, so return 124
 * 129+1=130: add 1 to 9, 10==10, so set it to 0, then add 1 to 2, 3!=10, so return 130
 * 99+1=100: ...10==10...10==10, so create a longer int[] and set nums[0] to 1 to get 100
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = digits => {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i] = 1 + digits[i];
    if (digits[i] === 10) {
      // still need to +1 at current position
      digits[i] = 0;
    } else {
      // No need to +1 anymore, just return.
      return digits;
    }
  }
  // reaching this line means 9,99,999...cases
  digits.splice(0, 0, 1); // since digits is [0,0,...] now, just insert a 1 at head
  return digits;
  // const res = new Array(digits.length + 1).fill(0); // for default value of int[] is {0,0,0...}
  // res[0] = 1;
  // return res;
};

// new file: 4/6/2018
