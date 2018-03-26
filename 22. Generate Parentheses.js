/**
 * Given n pairs of parentheses, write a function to generate ALL combinations
 * of well-formed parentheses.
 *
 * For example, given n = 3, a solution set is:
 *
 * "((()))", "(()())", "(())()", "()(())", "()()()"
 */
/**
 * DFS. Time: O(2^(2n)) => O(2^n). Space: O(2^(2n)) => O(2^n). Each parenthese has 2 choices.
 * The principle is closing parentheses should always >= opening parentheses in the string(state).
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = n => {
  const res = [];
  if (n === 0) return res;
  dfs(res, '', 0, 0, n);
  return res;
};

// openings and closings stand for the number of ( and ) in the state
const dfs = (res, state, openings, closings, max) => {
  if (closings > openings) return;
  if (openings < max) dfs(res, state + '(', openings + 1, closings, max);
  if (closings < max) dfs(res, state + ')', openings, closings + 1, max);
  if (openings === max && closings === max) res.push(state);
};

// same logic, but count down from n to 0
const generateParenthesisB = n => {
  const res = [];
  if (n === 0) return res;
  DFS(res, '', n, n);
  return res;
};

// openings and closings stand for the available number of ( and ) from n
const DFS = (res, state, openings, closings) => {
  if (closings < openings) return;
  if (openings) DFS(res, state + '(', openings - 1, closings); // 0==false
  if (closings) DFS(res, state + ')', openings, closings - 1); // 0==false
  // if (!(openings || closings)) res.push(state);
  if (openings === 0 && closings === 0) res.push(state); // both 0
};

// new file: 3/26/2018
