/**
 * Given a string S and a string T, count the number of distinct subsequences of S which equals T.
 * A subsequence of a string is a new string which is formed from the original string
 * by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters.
 * (ie, "ACE" is a subsequence of "ABCDE" while "AEC" is not).
 * Here is an example:
 * S = "rabbbit", T = "rabbit"
 * Return 3.
 */
/**
 * DP. time : O(m * n). space : O(m * n)
 * 手动填表，发现公式
 * 1, S[i] !== T[j]
 *  dp[i][j] = dp[i-1][j]
 * 2, S[i] === T[j]
 *  dp[i][j] = dp[i-1][j] + dp[i-1][j-1]
 *
 *    "" r  a  b  b  i  t
 * "" 1, 0, 0, 0, 0, 0, 0
 * r  1, 1, 0, 0, 0, 0, 0
 * a  1, 1, 1, 0, 0, 0, 0
 * b  1, 1, 1, 1, 0, 0, 0
 * b  1, 1, 1, 2, 1, 0, 0
 * b  1, 1, 1, 3, 3, 0, 0
 * i  1, 1, 1, 3, 3, 3, 0
 * t  1, 1, 1, 3, 3, 3, 3
 *
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
const numDistinct = (s, t) => {
  const m = s.length;
  const n = t.length;
  const dp = [];
  // build table //
  for (let i = 0; i < m + 1; i++) {
    dp.push(new Array(n + 1).fill(0));
  }
  // init first col for empty t, leave first row as 0s except first grid //
  for (let i = 0; i < m + 1; i++) {
    dp[i][0] = 1;
  }

  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      // -1 is for offseting the index, making them work for the string index, remember we used m+1 and n+1 to init the table //
      if (s[i - 1] === t[j - 1]) {
        // case1: same, merge up and diagonal values
        dp[i][j] = dp[i - 1][j] + dp[i - 1][j - 1];
      } else {
        // case2: different, take up value
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  return dp[m][n];
};

/**
 * 1D array because we only need up and diagonal
 *
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
const numDistinctB = (s, t) => {
  const m = s.length;
  const n = t.length;
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  for (let i = 0; i < m; i++) {
    for (let j = n; j > 0; j--) {
      if (s[i] === t[j - 1]) dp[j] = dp[j] + dp[j - 1];
    }
  }
  return dp[n];
};

// new file: 4/17/2018
