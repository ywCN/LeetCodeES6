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
 * O(mnlogn) time, O(m) space, m is the num of strings, n is the length of strs
 * use Map, key is the sorted word, value is a List of unsorted words
 * Anagram is the result of rearranging the letters of a word.
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = strs => {
  const groups = new Map();
  for (let str of strs) {
    const key = [...str].sort().join('');
    if (!groups.has(key)) {
      groups.set(key, []);
    }
    groups.get(key).push(str);
  }
  return [...groups.values()];
};

/**
 * hash+counting sort: O(mn) time, O(m) space, m is the num of strs, n is the length of strs
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagramsB = strs => {
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

/**
 * use [] to make a key instead of Map
 * hash+counting sort: O(mn) time, O(m) space, m is the num of strs, n is the length of strs
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagramsC = strs => {
  const groups = new Map();
  for (let str of strs) {
    // count chars in current string
    const count = new Array(26).fill(0);
    for (let char of str) {
      const charIndex = char.charCodeAt(0) - 'a'.charCodeAt(0);
      count[charIndex]++;
    }
    // make a key for current string (anagram will have same key)
    const key = count.join('');

    // put key and current string in map
    if (!groups.has(key)) {
      groups.set(key, []); // init container
    }
    groups.get(key).push(str);
  }
  return [...groups.values()];
};

// new file: 4/1/2018
