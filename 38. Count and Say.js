/**
 * The count-and-say sequence is the sequence of integers beginning as follows:
 * 1, 11, 21, 1211, 111221, ...
 *
 * 1 is read off as "one 1" or 11.
 * 11 is read off as "two 1s" or 21.
 * 21 is read off as "one 2, then one 1" or 1211.
 * Given an integer n, generate the nth sequence.
 *
 * Note: The sequence of integers will be represented as a string.
 */
/**
 * String. Simulate the process.
 * Generate the next sequence.
 * Repeat n-1 times.
 * @param {number} n
 * @return {string}
 */
const countAndSay = n => {
  if (n <= 0) return '';
  let res = '1'; // init
  while (n > 1) {
    // repeat n-1 times
    const prev = [...res];
    let temp = '';
    for (let i = 0; i < prev.length; i++) {
      let count = 1;
      while (i + 1 < prev.length && prev[i + 1] === prev[i]) {
        // count and stop at last dup
        count++;
        i++;
      } // at this point, i is at the last element of dup part
      temp = temp + count + prev[i]; // count+say
    }
    res = temp; // update result, if not save it, sb will gone after scope
    n--; // offset for the i++ in for loop
  }
  return res;
};

/**
 * variant1: output next 'say'
 */
const countAndSayB = s => {
  // input String, output next String
  let next = '';
  for (let i = 0; i < s.length; i++) {
    let count = 1; //since i stops at last dup, count needs starts at 1
    while (i + 1 < s.length && s[i] == s[i + 1]) {
      // count and stop at last dup
      count++;
      i++;
    }
    next = next + count + s[i]; // count+say
  }
  return next;
};

console.log(countAndSayB('1112333'));
console.log(countAndSayB('111222'));

// new file: 3/28/2018
