/**
 * Implement regular expression matching with support for '.' and '*'.
 * 
 * '.' Matches any single character.
 * '*' Matches zero or more of the preceding element.
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
 * isMatch("aa", "a*") -> true
 * isMatch("aa", ".*") -> true
 * isMatch("ab", ".*") -> true
 * isMatch("aab", "c*a*b") -> true
 */

/**
 * assume always has a char before * in pattern
 * https://www.youtube.com/watch?v=l3hda49XcDE&t=17s
 * DP. O(mn) Time, O(mn) Space. Note: '*' Matches zero or more of the PREVIOUS char.
 * Draw table, fill table, find the fomula
 * traverse 2D array i=1 -> dp.length{j=1 -> dp[0].length {code below}}
 * if p[j-1]==s[i-1] or p[j-1]=='.'
 * | dp[i][j] == dp[i-1][j-1]               take diagonal value
 * else if p[j-1]=='*'
 * | dp[i][j] = dp[i][j-2]                  case1: zero PREVIOUS char, take value from second left grid
 * | if p[j-2]==s[i-1] or p[j-2]=='.'       case2: one or more PREVIOUS element, the char before * in pattern must match current char in string
 *  | dp[i][j] = dp[i][j] | dp[i-1][j]      if match, take value in upper grid
 * else
 *  dp[i][j] = false
 *  example: abcd, a.*d     aab, a*b
 *    "" a  .  *  d             "" a  *  b
 * "" T  F  F  F  F          "" T  F  T  F
 * a  F  T  F  T  F          a  F  T  T  F
 * b  F  F  T  T  F          a  F  F  T  F
 * c  F  F  F  T  F          b  F  F  F  T
 * d  F  F  F  T  T
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = (s, p) => {
  const dp = []; // row: pattern, col: string
  const m = s.length;
  const n = p.length;
  const firstRow = [];
  /* build first row*/
  for (let i = 0; i < n + 1; i++) { // note n+1
    firstRow.push(false);
  }
  /* init first row*/  
  dp.push(firstRow);
  /* init other rows with first element false*/
  for (let i = 0; i < m; i++) { // note m
    dp.push([false]);
  }
  /* init first grid at [0][0] */
  dp[0][0] = true; // '' matches ''  
  /* pre-process first row except [0][0]*/
  for (let i = 1; i < n + 1; i++) { // note n + 1
    if (p.charAt(i - 1) === '*') {
      dp[0][i] = dp[0][i - 2]; // take value from second left grid
    } // else leave rest grid default
  }
  /* fill rest part of the table */
  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (p.charAt(j - 1) === '.' || p.charAt(j - 1) === s.charAt(i - 1)) { // if pattern is ., just check matching
        dp[i][j] = dp[i - 1][j - 1]; // take diagonal value, merge state
      } else if (p.charAt(j - 1) === '*') { // if pattern is*, there are two cases to consider
        dp[i][j] = dp[i][j - 2]; // case1: zero previous char, take from second left grid, merge state
        if (p.charAt(j - 2) === '.' || p.charAt(j - 2) === s.charAt(i - 1)) { // case2: many previous char, but we only consider one char, so just look at previous grid
          dp[i][j] = dp[i][j] || dp[i - 1][j]; // || to merge 3 states from 2 cases
        }
      } else {
        dp[i][j] = false;
      }
    }
  }
  return dp[m][n];
};

console.log(isMatch("aab", "c*a*b"));
console.log(isMatch("ab", ".*"));

// new file: 3/23/2018
