/**
 * Given a digit string, return all possible letter combinations that the number could represent.
 * A mapping of digit to letters (just like on the telephone buttons) is given below.
 * Input:Digit string "23"
 * Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 */
/**
 * BFS. Queue. O(4^n) for some digits map 4 UNIQUE letters
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = digits => {
  const res = [];
  const letters = [
    '',
    '',
    'abc',
    'def',
    'ghi',
    'jkl',
    'mno',
    'pqrs',
    'tuv',
    'wxyz'
  ];
  res.push('');
  for (let digit of digits) {
    const size = res.length;
    for (let i = 0; i < size; i++) {
      const toCombine = res.shift();
      const letter = letters[parseInt(digit)];
      for (let character of letter) {
        res.push(toCombine + character);
      }
    }
  }
  if (res[0] === '') res.pop(); // for the empty case if should be [] not ['']
  return res;
};
// new file: 3/25/2018
