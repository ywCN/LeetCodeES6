/**
Given a string s1, we may represent it as a binary tree by partitioning it to two non-empty substrings recursively.

Below is one possible representation of s1 = "great":

    great
   /    \
  gr    eat
 / \    /  \
g   r  e   at
           / \
          a   t
To scramble the string, we may choose any non-leaf node and swap its two children.

For example, if we choose the node "gr" and swap its two children, it produces a scrambled string "rgeat".

    rgeat
   /    \
  rg    eat
 / \    /  \
r   g  e   at
           / \
          a   t
We say that "rgeat" is a scrambled string of "great".

Similarly, if we continue to swap the children of nodes "eat" and "at", it produces a scrambled string "rgtae".

    rgtae
   /    \
  rg    tae
 / \    /  \
r   g  ta  e
       / \
      t   a
We say that "rgtae" is a scrambled string of "great".

Given two strings s1 and s2 of the same length, determine if s2 is a scrambled string of s1.
 */

/**
 * Time: < O(n^4) exponential complexity, something like O(3^n)
 * The 1st IF is to check the LEFT child of S1 is scramble of LEFT child of S2
 *      AND RIGHT child of S1 is also a scramble of RIGHT child of s2.
 * When this fails, it means the left and right substrings are swapped.
 * The 2nd IF statement check for the swap case with LEFT child of S1
 *      and RIGHT child of S2 AND RIGHT child of S1 and LEFT child of S2.
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const isScramble = (s1, s2) => {
  if (s1.length !== s2.length) return false;
  if (s1 === s2) return true;

  // prune //
  const letters = new Array(128).fill(0);
  for (let i = 0; i < s1.length; i++) {
    letters[s1.charCodeAt(i)]++;
    letters[s2.charCodeAt(i)]--;
  }
  for (let i = 0; i < 128; i++) {
    if (letters[i] !== 0) {
      return false;
    }
  }

  // another way to count, faster but same complexity, on
  // const letters = new Array(26).fill(0);

  // for (let i = 0; i < s1.length; i++) {
  //   letters[s1.charCodeAt(i) - 97]++;
  //   letters[s2.charCodeAt(i) - 97]--;
  // }

  // for (let i = 0; i < 26; i++) {
  //   if (letters[i] !== 0) return false;
  // }

  for (let i = 1; i < s1.length; i++) {
    // Not scrambled case
    if (
      isScramble(s1.substring(0, i), s2.substring(0, i)) &&
      isScramble(s1.substring(i), s2.substring(i))
    )
      return true;
    // Scrambled case
    if (
      isScramble(s1.substring(0, i), s2.substring(s2.length - i)) &&
      isScramble(s1.substring(i), s2.substring(0, s2.length - i))
    )
      return true;
  }
  return false; // unable to return true, reaching this line means false
};

// new file: 4/11/2018
