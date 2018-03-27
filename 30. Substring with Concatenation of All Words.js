/**
 * You are given a string, S, and a list of words, L, that are all of the SAME length.
 * Find all starting indices of substring(s) in S that is a concatenation of each word in L
 * exactly once and without any intervening characters.
 *
 * For example, given:
 * L: ["foo", "bar"]
 * S: "barfoothefoobarman"
 * 	   ^		    ^
 * You should return the indices: [0,9]. (order does not matter).
 */
/**
 * Like other sliding window questions. If find one, then try to search others.
 * Find intervals with length K * M, where K is the number of strings in L and
 * M the length of each string in L.
 * Build a map for words in L and its relative counts
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
const findSubstring = (s, words) => {
  const res = [];
  if (!s || !words || !words.length) return res;
  const len = words[0].length; // length of each word is same
  const count = new Map();
  for (let word of words) {
    count.set(word, count.has(word) ? count.get(word) + 1 : 1); // Note: 1 NOT 0
  }
  for (let i = 0; i <= s.length - len * words.length; i++) {
    const copy = new Map(count); // try to reduce copied map size
    for (let j = 0; j < words.length; j++) {
      const substr = s.substring(i + j * len, i + (j + 1) * len); // each window may match a word in dict
      if (copy.has(substr)) {
        copy.set(substr, copy.get(substr) - 1);
        if (copy.get(substr) === 0) {
          copy.delete(substr);
        }
        if (copy.size === 0) {
          res.push(i);
          break;
        }
      } else {
        break; // not in dict
      }
    }
  }
  return res;
};

// new file: 3/27/2018
