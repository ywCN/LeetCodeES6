/**
 * Implement wildcard pattern matching with support for '?' and '*'.
 *
 * '?' Matches any single character.
 * '*' Matches any sequence of characters (including the empty sequence).
 *
 * The matching should cover the entire input string (not partial).
 *
 * The function prototype should be:
 * bool isMatch(const char *s, const char *p)
 *
 * Some examples:
 * isMatch("aa","a") -> false
 * isMatch("aa","aa") -> true
 * isMatch("aaa","aa") -> false
 * isMatch("aa", "*") -> true
 * isMatch("aa", "a*") -> true
 * isMatch("ab", "?*") -> true
 * isMatch("aab", "c*a*b") -> false
 */
/**
 * DP. O(mn) Time. O(mn) Space. Can optimize to 1d array.
 * '*' can match empty or any sequence.
 * Recurrence Relation:
 * If p[j-1] == '?' or p[j-1] == s[i-1]:
 * | dp[i][j] = dp[i - 1][j - 1];
 * else if p[j-1] == '*':
 * | dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
 * else
 * | dp[i][j] = false;
 *
 * Base case:
 * When s and p are both empty, match.
 * When s is empty, p[i-1] must be '*' and p[0..i-2] match.
 * example:  abcde, a?c*
 *      "" a ? c *
 *   "" T  F F F F
 *   a  F  T F F F
 *   b  F  F T F F
 *   c  F  F F T T
 *   d  F  F F F T
 *   e  F  F F F T
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = (s, p) => {
  let m = s.length;
  let n = p.length;
  // init table
  const dp = [];
  const row = new Array(n + 1);
  row.fill(false);
  for (let i = 0; i < m + 1; i++) {
    dp[i] = [...row]; // important! or dp[0][0] = true; will set first col to true
  }
  dp[0][0] = true;
  // deal with "" matches p, the first row
  for (let i = 1; i < n + 1; i++) {
    // only the pattern starts with * can match with ""
    if (p[i - 1] === '*') {
      dp[0][i] = true;
    } else {
      break; // Pruning. If found 1 non *, the rest won't match.
    }
  }
  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (p[j - 1] === s[i - 1] || p[j - 1] === '?') {
        // match
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] === '*') {
        // * here means 0 char, need to merge 2 states
        dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
      } else {
        dp[i][j] = false;
      }
    }
  }
  return dp[m][n];
};

// new file: 3/28/2018
