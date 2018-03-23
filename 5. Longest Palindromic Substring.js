/**
 * Given a string s, find the longest palindromic substring in s. 
 * You may assume that the maximum length of s is 1000.
 * Input: "babad"
 * Output: "bab"
 * Note: "aba" is also a valid answer.
 * Input: "cbbd"
 * Output: "bb"
 */

/**
 * Expand from center. Time O(N^2) Space O(1)
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = s => {
  let longest = '';
  for (let i = 0; i < s.length; i++) {
    const substr1 = expand(s, i, i); // expand from one char
    const substr2 = expand(s, i, i + 1); // expand from two neighbor chars
    if (substr1.length > longest.length) longest = substr1;
    if (substr2.length > longest.length) longest = substr2;
  }
  return longest;
};

/**
 * 
 * @param {string} s 
 * @param {number} i 
 * @param {number} j 
 */
const expand = (s, i, j) => {
  while (i >= 0 && j < s.length) {
    if (s.charAt(i) !== s.charAt(j)) break;
    i--; // note -- for expanding to two sides
    j++;
  }
  return s.substring(i + 1, j); // current chars at i and j should not be included as they are not legal when breaking from loop
}

console.log(longestPalindrome('babad')); // bab
console.log(longestPalindrome('cbbd')); // bb

// new file: 3/22/2018
