/**
 * Given an integer, convert it to a roman numeral.
 * Input is guaranteed to be within the range from 1 to 3999.
 *
 * Should ask for Roman number representation of 1, 5, 10, 50, 100, 500, 1000 in an interview.
 *                                               I, V, X,  L,  C,   D,   M
 * Remember the way to build a dict and build a Roman number(the concatenation orders).
 */
/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = num => {
  const M = ['', 'M', 'MM', 'MMM'];
  const C = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
  const X = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
  const I = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
  return (
    M[Math.floor(num / 1000)] +
    C[Math.floor((num % 1000) / 100)] +
    X[Math.floor((num % 100) / 10)] +
    I[num % 10]
  );
};

// new file: 3/25/2018
