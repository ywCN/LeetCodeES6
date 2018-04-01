/**
 * Given an array of strings, group anagrams together.
 * For example, given: ["eat", "tea", "tan", "ate", "nat", "bat"],
 * Return:
 * | [
 * |   ["ate", "eat","tea"],
 * |   ["nat","tan"],
 * |   ["bat"]
 * | ]
 *
 * Note: All inputs will be in lower-case.
 */
/**
 * hash+counting sort: O(mn) time, O(m) space, m is the num of strs, n is the length of strs
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = strs => {
  const groups = new Map();
  const count = new Map();
  for (let i = 0; i < 26; i++) {
    count.set(i, 0);
  }
  for (let str of strs) {
    // count chars in current string
    const copy = new Map(count);
    for (let char of str) {
      const charKey = char.charCodeAt(0) - 'a'.charCodeAt(0);
      copy.set(charKey, copy.get(charKey) + 1);
    }
    // make a key for current string (anagram will have same key)
    const keyArr = [];
    for (let i = 0; i < 26; i++) {
      keyArr.push(copy.get(i));
    }
    const key = keyArr.join('');
    // put key and current string in map
    if (!groups.has(key)) {
      groups.set(key, []); // init container
    }
    groups.get(key).push(str);
  }
  return [...groups.values()];
};

// new file: 4/1/2018
