/**
 * Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation
 * sequence from beginWord to endWord, such that:
 *
 * Only one letter can be changed at a time
 * Each intermediate word must exist in the word list
 * For example,
 *
 * Given:
 * beginWord = "hit"
 * endWord = "cog"
 * wordList = ["hot","dot","dog","lot","log"]
 * As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
 * return its length 5.
 *
 * Note:
 * Return 0 if there is no such transformation sequence.
 * All words have the same length.
 * All words contain only lowercase alphabetic characters.
 * You may assume no duplicates in the word list.
 * You may assume beginWord and endWord are non-empty and are not the same.
 */
/**
 * const res = String.fromCharCode(97); // 'a'
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
const ladderLength = (beginWord, endWord, wordList) => {
  const set = new Set(wordList); // for O(1) access and removal
  const q = [beginWord]; // init first word
  let level = 0; // level of BFS, which is the shortest path
  while (q.length) {
    // loop valid words(words in the set), note only valid words can enqueue //
    for (let i = q.length - 1; i >= 0; i--) {
      const word = q.shift(); // this word will be replace with 26 letters for all combinations if it!==endWord
      if (word === endWord) return level + 1; // level has not been increased, so +1
      for (let j = 0; j < word.length; j++) {
        const chars = [...word]; // copy into an array
        // let code = "a".charCodeAt(0); code <= "z".charCodeAt(0); code++
        for (let code = 97; code < 97 + 26; code++) { // code is ASCII Code, 骚操作检测26个字母 
          chars[j] = String.fromCharCode(code);; // 替换j位置的char为[a-z]
          const newWord = chars.join('');
          if (newWord !== word && set.has(newWord)) { // 字符可能会被替换为相同的字符，所以要看一看是不是一样。访问过就要移除，不过要确保访问的是在set里面的。这里可以看成检测visited
            q.push(newWord);
            set.delete(newWord); // delete from set after enqueue
          }
        }
      }
    }
    level++;
  }
  return 0; // no path found after looped all possible combinations
};

console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));

// new file: 4/17/2018
