/**
 * Write a function to find the longest common prefix string in an array of strings.
 * For example:
 *
 * {"a","a","b"} returns "" as there is nothing common in all the 3 strings.
 *
 * {"a", "a"} returns "a" as a is longest common prefix in all the strings.
 *
 * {"abca", "abc"} returns abc
 *
 * {"ac", "ac", "a", "a"} returns a.
 */
/**
 * Time complexity : O(S), where S is the sum of all characters in all strings.
 * 	In the worst case there will be n equal strings with length m and the algorithm performs S = m*n character comparisons.
 * Space: O(1)
 *
 * Only need to know the length of prefix
 * Initialize result with first word
 * Traverse from second word to last word
 * 	Compare each word with the first word. Stop at the first different char.
 * Return firstString.substring(0, stop); because common prefix is in every word
 *
 * The key pointer here is the prefix length won't increase because every word's
 * length is greater or equal to max of prefix length.
 *
 * Note: j < prefixLen AND j < next.length cannot be used instead of prefixLen = Math.min();
 * because the first string can be very long.
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = strs => {
  if (strs === null) return null;
  if (strs.length === 0) return '';
  if (strs.length === 1) return strs[0];

  const word = strs[0];
  let prefixLen = word.length; // init
  for (let i = 1; i < strs.length; i++) {
    const next = strs[i];
    prefixLen = Math.min(prefixLen, next.length); // this update is super important!
    for (let j = 0; j < prefixLen; j++) {
      // compare chars in two words(1st word and another)
      if (word.charAt(j) != next.charAt(j)) {
        prefixLen = j; // j is now invalid
        break;
      }
    }
  }
  return word.substring(0, prefixLen); // prefixLen index is invalid and is 1 more than the common prefix, so no -1
};

// new file: 3/25/2018
