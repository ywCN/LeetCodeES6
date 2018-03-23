/**
 * Given a string, find the LENGTH of the longest substring without repeating characters.
 * Examples:
 * Given "abcabcbb", the answer is "abc", which the length is 3.
 * Given "bbbbb", the answer is "b", with the length of 1.
 * Given "pwwkew", the answer is "wke", with the length of 3. 
 * Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

/**
 * Set. 2 pass. O(n) time. O(n) space.
 * @param {string}
 * @return {number}
 */
const lengthOfLongestSubstring = s => {
  if (s.length === 0) return 0;
  if (s.length === 1) return 1;
  const set = new Set();
  let slow = 0, fast = 0, len = 0;
  while (fast < s.length) {
    if (set.has(s.charAt(fast))) {
      set.delete(s.charAt(slow));
      slow++;
    } else {
      set.add(s.charAt(fast));
      len = Math.max(len, set.size);
      fast++;
    }
  }
  return len;
};

/**
 * Hash Table. 1 pass. O(n) time. O(n) space.
 * @param {string}
 * @return {number}
 */
const lengthOfLongestSubstringB = s => {
  if (s.length === 0) return 0;
  if (s.length === 1) return 1;
  const map = new Map(); // { char: index }
  let len = 0;
  for (let fast = 0, slow = 0; fast < s.length; fast++) { // slow is the beginning of the substring, fast is the end
    const c = s.charAt(fast);
    if (map.has(c) && map.get(c) >= slow) {
      slow = map.get(c) + 1; // step out of the dup part
    }
    // update len no matter what
    map.set(c, fast);
    len = Math.max(len, fast - slow + 1);
  }
  return len;
};

console.log(lengthOfLongestSubstring('abcabcbb')); // 3
console.log(lengthOfLongestSubstring('bbbbb')); // 1
console.log(lengthOfLongestSubstring('pwwkew')); // 3

console.log(lengthOfLongestSubstringB('abcabcbb')); // 3
console.log(lengthOfLongestSubstringB('bbbbb')); // 1
console.log(lengthOfLongestSubstringB('pwwkew')); // 3

// new file: 3/22/2018
