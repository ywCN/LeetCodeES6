/**
 * Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.
 *
 * If the last word does not exist, return 0.
 *
 * Note: A word is defined as a character sequence consists of non-spacecharacters only.
 *
 * For example,
 * Given s = "Hello World",
 * return 5.
 */
/**
 * Traverse backwards. No trim();.
 * Use count to remember length of word
 * Start counting from first non-space char
 * Return when next space is met and length is not zero
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = s => {
  if (!s || !s.length) return 0;
  let count = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== ' ') count++;
    if (s[i] === ' ' && count !== 0) return count; // && skip trailing whitespaces
  }
  return count;
};

// new file: 4/4/2018
