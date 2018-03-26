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
  if (digits === null || digits.length === 0) return res; // ask input
  const mapping = [
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
      const oldStr = res.shift();
      const letters = mapping[parseInt(digit)];
      for (let letter of letters) {
        res.push(oldStr + letter);
      }
    }
  }
  if (res[0] === '') res.pop(); // for the empty case if should be [] not ['']
  return res;
};

const letterCombinationsB = digits => {
  const res = [];
  if (digits === null || digits.length === 0) return res; // ask input
  const mapping = [
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
  dfs(digits, mapping, res, '', 0);
  return res;
};

const dfs = (digits, mapping, res, state, index) => {
  if (index === digits.length) {
    res.push(state);
    return;
  }
  const letters = mapping[parseInt(digits.charAt(index))];
  for (let letter of letters) {
    dfs(digits, mapping, res, state + letter, index + 1);
  }
};

// new file: 3/25/2018
