/**
 * Given two words (start and end), and a dictionary, find all shortest
 * transformation sequence(s) from start to end, such that:
 *
 * Only one letter can be changed at a time
 * Each intermediate word must exist in the dictionary
 * For example,
 *
 * Given:
 * start = "hit"
 * end = "cog"
 * dict = ["hot","dot","dog","lot","log"]
 * Return
 *   [
 *     ["hit","hot","dot","dog","cog"],
 *     ["hit","hot","lot","log","cog"]
 *   ]
 * Note:
 * All words have the same length.
 * All words contain only lowercase alphabetic characters.
 */
/**
 * BFS. TLE but the solution is correct.
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
const findLadders = (beginWord, endWord, wordList) => {
  if (beginWord == null || endWord == null || wordList == null || wordList.length < 1) return [];

  const res = [];
  const set = new Set(wordList);
  if (!set.has(endWord)) return res;

  const q = [[beginWord]]; // init, q is string[][] type
  let find = false; // flag var to end the BFS

  while (q.length && !find) {
    const toDelete = new Set(); // since we may have multiple paths, we cannot delete a word from set when finding it, we do a batch delete after each level of BFS
    for (let j = q.length - 1; j >= 0; j--) {
      const path = [...q.shift()];
      // const word = path[path.length - 1];
      const word = path.slice(-1)[0]; // Note: DO NOT use pop(). It will modify original array.
      for (let i = 0; i < word.length; i++) {
        const chars = [...word];
        const cache = chars[i];
        for (let code = "a".charCodeAt(0); code <= "z".charCodeAt(0); code++) {
          chars[i] = String.fromCharCode(code); // replace a char with a-z
          const newWord = chars.join('');

          if (newWord !== word && set.has(newWord)) {
            path.push(newWord);
            q.push([...path]);

            if (newWord === endWord) {
              res.push([...path]);
              find = true;
            }

            path.pop();
            toDelete.add(newWord);
          }
        }
        chars[i] = cache;
      }
    }
    for (const word of toDelete) {
      if (set.has(word)) {
        set.delete(word);
      }
    }
  }
  return res;
};

console.log(findLadders("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));

//TODO: improve complexity https://leetcode.com/problems/word-ladder-ii/discuss/40477/Super-fast-Java-solution-(two-end-BFS)

// new file: 4/18/2018
