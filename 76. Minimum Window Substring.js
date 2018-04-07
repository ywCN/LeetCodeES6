/**
 * Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).
 * For example,
 * S = "ADOBECODEBANC"
 * T = "ABC"
 * Minimum window is "BANC".
 */

/**
 * Two pointers. O(n) time.
 * Analysis:
 * 1.Store the char in string t as a key and times appearing as value into a hashmap;
 * 2.If char at s is contained in hashmap, value(times) in map - 1 and count ++;
 * 3.When count = t.length(), minLenght and minStart records the min number
 * 4.Slide window and let the left point to the first char in s ,which is in map
 *
 * "ADOBECODEBANC", "ABC"   A D O B E C O D E B A N C
 *                          A D O B E C
 *                                B E C O D E B A
 *                                    C O D E B A
 *                                            B A N C
 * "AOOBBOOCOOAOBOC", "ABC"     A O O B B O O C O O A O B O C
 *                              A O O B B O O C
 *                                      B O O C O O A
 *                                            C O O A O B
 *                                                  A O B O C
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = (s, t) => {
  if (!s || !s.length || !t || !t.length) return '';
  // count characters in t //
  const count = new Array(128).fill(0); // 128 contains all lower and higher case letters
  for (let char of t) {
    count[char.charCodeAt(0)]++;
  }
  let len = ~(1 << 31); // minimal length
  let from = 0;
  let counter = t.length;
  let l = 0; // slow pointer
  let r = 0; // fast pointer
  while (r < s.length) {
    // try to make counter === 0
    if (count[s.charCodeAt(r)] > 0) counter--;
    count[s.charCodeAt(r)]--;
    r++;
    while (counter === 0) {
      // to make count greater than 0
      if (r - l < len) {
        // check if window size is smaller
        len = r - l; // update
        from = l; // update
      }
      if (count[s.charCodeAt(l)] >= 0) counter++; // >= 0 means char is in t, restore count
      count[s.charCodeAt(l)]++;
      l++; // always restore count of char
    }
  }
  return len === ~(1 << 31) ? '' : s.substring(from, from + len);
};

console.log(minWindow('ADOBECODEBANC', 'ABC'));
console.log(minWindow('AOOBBOOCOOAOBOC', 'ABC'));

// new file: 4/7/2018
