/**
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 * The brackets must close in the correct order, "()" and "()[]{}" are all valid
 * but "(]" and "([)]" are not.
 */
/**
 * push in closing parenthese when encountering opening parenthese
 * @param {string} s
 * @return {boolean}
 */
const isValid = s => {
  const stack = [];
  for (let c of s) {
    if (c === '(') {
      stack.push(')');
    } else if (c === '[') {
      stack.push(']');
    } else if (c === '{') {
      stack.push('}');
    } else if (stack.length === 0 || c !== stack.pop()) {
      return false;
    }
  }
  return stack.length === 0;
};

// new file: 3/26/2018
