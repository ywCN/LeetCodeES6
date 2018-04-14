/**
 * Given s1, s2, s3, find whether s3 is formed by the interleaving of s1 and s2.
 *
 * Note: interleaving means the relative sequence of s1, s2 should perserve
 *
 * For example,
 * Given:
 * s1 = "aabcc",
 * s2 = "dbbca",
 *
 * When s3 = "aadbbcbcac", return true.
 * When s3 = "aadbbbaccc", return false.
 */
/**
 * DP. Time: O(m*n) Space: O(m*n)
 * https://youtu.be/ih2OZ9-M3OM
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
const isInterleave = (s1, s2, s3) => {
  if (s1.length + s2.length !== s3.length) return false;
  // build table //
  const dp = [];
  for (let i = 0; i < s1.length + 1; i++) {
    dp.push(new Array(s2.length + 1).fill(false));
  }
  // init first grid //
  dp[0][0] = true;
  // build first row //
  for (let i = 0; i < s2.length; i++) {
    if (s2[i] === s3[i]) {
      dp[0][i + 1] = dp[0][i]; // +1 for we need to loop chars and insert from 1 to end
    }
  }
  // build first col //
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] === s3[i]) {
      dp[i + 1][0] = dp[i][0];
    }
  }
  // build rest grids//
  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      const index = i + j + 1; // s3
      const row = i + 1;
      const col = j + 1;
      let s1Match = false;
      let s2Match = false;
      if (s1[i] === s3[index]) s1Match = dp[row - 1][col]; // s1 is at first col, left match, get state from top
      if (s2[j] === s3[index]) s2Match = dp[row][col - 1]; // s2 is at first row, top match, get state from left
      dp[row][col] = s1Match || s2Match; // merge states
    }
  }
  return dp[s1.length][s2.length];
};

// new file: 4/13/2018
