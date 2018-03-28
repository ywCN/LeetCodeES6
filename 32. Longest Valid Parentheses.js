/*
Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.
For "(()", the longest valid parentheses substring is "()", which has length = 2.
Another example is ")()())", where the longest valid parentheses substring is "()()", which has length = 4.
*/
/**
 * Stack. One pass. Time: O(n) Space: O(n).
 * If we find a valid pair, we throw it away and see how big the gap is between current and previous invalid.
 * So stack saves invalid indices. substring between adjacent indices is valid combination.
 * @param {string} s
 * @return {number}
 */
const longestValidParentheses = s => {
  const stack = [];
  let max = 0;
  stack.push(-1); // -1 for () may be the first 2 characters in the string
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === '(') {
      stack.push(i);
    } else {
      stack.pop(); // pop valid
      if (stack.length === 0) {
        stack.push(i);
      } else {
        max = Math.max(max, i - stack[stack.length - 1]); // update gap
      }
    }
  }
  return max;
};

/**
 *  Two pass. Time: O(n) Space: O(1)
 *  从左到右和从右到左分别遍历一次, Whenever openings === openings, update max length.
 *  每次遍历的时候记录left和right，left和right值相等的就做一次记录，闭括号超过开括号的时候清空left和right
 *  两次遍历取最大长度，就是需要的结果
 */
const longestValidParenthesesB = s => {
  let openings = 0,
    closings = 0,
    max = 0;
  for (let c of s) {
    // left to right
    if (c === '(') openings++;
    else closings++;

    if (openings === closings) max = Math.max(max, 2 * closings);
    else if (closings >= openings)
      // update
      openings = closings = 0; // reset
  }
  openings = closings = 0; // reset counter
  for (let c of s.split('').reverse()) {
    // right to left
    if (c === '(') openings++;
    else closings++;

    if (openings === closings) max = Math.max(max, 2 * openings);
    else if (openings >= closings)
      // update
      openings = closings = 0; // reset
  }
  return max;
};

console.log(longestValidParentheses(')()())'));
console.log(longestValidParenthesesB(')()())'));

// new file: 3/28/2018
