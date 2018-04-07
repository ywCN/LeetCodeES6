/**
 * Given two words word1 and word2, find the minimum number of steps required
 * to convert word1 to word2. (each operation is counted as 1 step.)
 *
 * You have the following 3 operations permitted on a word:
 *
 * a) Insert a character
 * b) Delete a character
 * c) Replace a character
 */
/**
 * DP
 * manually filling two rows will find the formula
 * https://www.youtube.com/watch?v=We3YDTzNXEk
 * The video also teaches how to find out the edit operations.
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const minDistance = (word1, word2) => {
  if (word1 === word2) return 0;
  const m = word1.length;
  const n = word2.length;
  const distance = [];
  // build table //
  for (let i = 0; i < m + 1; i++) {
    distance.push(new Array(n + 1));
  }
  // init first grid //
  distance[0][0] = 0; // '' and ''
  // build first row //
  for (let i = 1; i < n + 1; i++) {
    distance[0][i] = i;
  }
  // build first col //
  for (let i = 1; i < m + 1; i++) {
    distance[i][0] = i;
  }
  // build rest grids //
  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        distance[i][j] = distance[i - 1][j - 1];
      } else {
        distance[i][j] =
          Math.min(
            distance[i - 1][j - 1],
            distance[i][j - 1],
            distance[i - 1][j]
          ) + 1; // +1 is IMPORTANT!!!!
      }
    }
  }
  return distance[m][n];
};

console.log(minDistance('abcde', 'aece')); // 2

// new file: 4/6/2018
