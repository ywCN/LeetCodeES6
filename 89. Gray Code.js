/**
 * The gray code is a binary numeral system where two successive values differ in only one bit.
 * Given a non-negative integer n representing the total number of bits in the code,
 * print the sequence of gray code. A gray code sequence must begin with 0.
 *
 * For example, given n = 2, return [0,1,3,2]. Its gray code sequence is:
 * 00 - 0
 * 01 - 1
 * 11 - 3
 * 10 - 2
 * Note: For a given n, a gray code sequence is not uniquely defined. [0,2,3,1] also works.
 */
/**
 * O(2^n) for combination. [0,1,11,10,110,111,101,100]->[000,001,011,010,110,111,101,100]
 * Puzzle. BFS.
 * initialize 0 in results then add 1<< i FROM BACK of results in each iteration
 * If all previous numbers differs at most 1, the result of adding a number with one more digit
 * like 10,100,1000 from end to start of numbers won't violate the differ most 1 constraint.
 * [0]->[0,1]->[0,1,11,10]->[0,1,11,10,110,111,101,100]
 *     +1  ^    +10  ^  ^         +100  ^   ^   ^   ^   ----- new numbers in each iteration
 * @param {number} n
 * @return {number[]}
 */
const grayCode = n => {
  const res = [];
  res.push(0); // initialize 0 in results
  for (let i = 0; i < n; i++) {
    // shift 1 i times to get binary numbers like 10, 100, 1000 ...etc
    // remember the concept of gray code, add 10, 100, 1000 to a shorter binary will make result binary differ by 1 bit
    const inc = 1 << i;
    for (let j = res.length - 1; j >= 0; j--) {
      res.push(res[j] + inc); // loop from back to start, add new code at end
    }
  }
  return res;
};

// new file: 4/11/2018
