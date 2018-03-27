/**
 * Implement strStr(). = Implement String.indexOf() in java.
 * Returns the index of the first occurrence of b in a, or -1 if b is not part of a.
 */
/**
 * Brute Force: O(mn) time
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
const strStr = (a, b) => {
  if (!b || b.length == 0) return 0;
  let m = a.length;
  let n = b.length;
  for (let i = 0; i < m - n + 1; i++) {
    // m - n + 1 for below charAt(i + j)
    for (let j = 0; j < n; j++) {
      // j++ will move both j and i + j
      if (a.charAt(i + j) !== b.charAt(j)) break; // invalid condition, break and try next char in a
      if (j === n - 1) return i; // able to reach last char of b, so it's a valid result
    }
  }
  return -1; // failed all tests
};

//TODO: add variants

// new file: 3/27/2018
