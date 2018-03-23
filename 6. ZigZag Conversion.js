/**
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number
 * of rows like this: (you may want to display this pattern in a fixed font for
 * better legibility)
 * 
 * P   A   H   N
 * |  /|  /|  /|
 * A P L S I I G
 * |/  |/  |/  |
 * Y   I   R
 * 
 * And then read line by line: "PAHNAPLSIIGYIR"
 * Write the code that will take a string and make this conversion given a number of rows:
 * 
 * string convert(string text, int nRows);
 * convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".
 */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = (s, numRows) => {
  const len = s.length;
  const levels = [];
  for (let i = 0; i < len; ) {
    /*loop from first level to last level; all levels*/
    for (let j = 0; j < numRows && i < len; j++) {
      if (levels[j]) levels[j] += s.charAt(i);
      else levels[j] = s.charAt(i); // for init, or result will have undefined
      i++;
    }
    /*loop from second last level to second first level; only mid levels*/
    for (let j = numRows - 2; j > 0 && i < len; j--) {
      levels[j] += s.charAt(i);
      i++
    }
  }
  return levels.join('');
};

console.log(convert('PAYPALISHIRING', 3));

// new file: 3/22/2018
