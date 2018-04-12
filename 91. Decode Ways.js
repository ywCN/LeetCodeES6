/**
 * A message containing letters from A-Z is being encoded to numbers using the following mapping:
 *
 * 'A' -> 1
 * 'B' -> 2
 * ...
 * 'Z' -> 26
 * Given an encoded message containing digits, determine the total number of ways to decode it.
 *
 * For example,
 * Given encoded message "12", it could be decoded as "AB" (1 2) or "L" (12).
 *
 * The number of ways decoding "12" is 2.
 */
/**
 * DP. Bottom-up. O(n) Time, O(n) Space.like Fibonacci number
 * Suppose the length of the String is n.
 * Recurrence relation:
 * number of decode ways at length n related to number of decode ways at previous lengths.
 * Decode the single last digit, then ways[n] += ways[n-1].
 * Decode the last two digits, if possible, then ways[n] += ways[n-2].
 * Base cases:
 * ways[0] = 1, means only one way when string length is 0.
 * ways[1] = 0 or 1, depending on the only digit is 0 or non-zero.
 * ABCDEFGHI J  K  L  M  N  O  P  Q  R  S  T  U  V  W  X  Y  Z
 * 123456789 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26
 * "2222": [1, 1, 0, 0, 0] -> [1, 1, 2, 0, 0] ->[1, 1, 2, 3, 0] -> [1, 1, 2, 3, 5]
 * @param {string} s
 * @return {number}
 */
const numDecodings = s => {
  if (!s || !s.length) return 0;
  const len = s.length;
  const ways = new Array(len + 1).fill(0); // need one more grid to merge last res
  ways[0] = 1;
  ways[1] = s[0] === '0' ? 0 : 1; // check if value of first two chars >= 10
  for (let i = 2; i < len + 1; i++) {
    // note len, note 2
    const code1 = parseInt(s.substring(i - 1, i)); // 1 digit
    const code2 = parseInt(s.substring(i - 2, i)); // 2 digits
    if (code1 > 0 && code1 <= 9) {
      // not '0' not '9'
      ways[i] += ways[i - 1];
    }
    if (code2 > 9 && code2 <= 26) {
      // only consider two digits cases, case like "07" will be ignored
      ways[i] += ways[i - 2];
    } // remember default value is 0
    // ways[i] = (code1 != 0 ? ways[i - 1] : 0) + (code2 <= 26 && code2 > 9 ? ways[i - 2] : 0);
  }
  return ways[len];
};

/**
 * DP. Bottom-up. O(n) Time, O(1) Space.
 * @param {string} s
 * @return {number}
 */
const numDecodingsB = s => {
  if (!s || !s.length) return 0;

  let c1 = 1; // decode ways of s[i-2]
  let c2 = s[0] === '0' ? 0 : 1; // decode ways of s[i-1]

  for (let i = 1; i < s.length + 1; i++) {
    // note have +1
    const code1 = parseInt(s.substring(i - 1, i)); // 1 digit
    const code2 = parseInt(s.substring(i - 2, i)); // 2 digits
    // no default 0, so we have to set 0 manually in this solution
    if (code1 === 0) c2 = 0; // if s.charAt(i) is 0, it can't be used as a single digit, so set c1 = 0

    if (code2 > 9 && code2 <= 26) {
      c2 = c2 + c1; // if s[i] and s[i-1] can form a valid digit, update c2 to c1+c2
      c1 = c2 - c1; // update c1 to previous c2
    } else {
      // NOTE: else is important!
      c1 = c2; // c1 = c1 is omitted, update c2 = c1
    }
  }

  // another way to write //
  // for (let i = 1; i < s.length; i++) {
  //   // note no s.length+1
  //   // note starts at 1 for not having default 0 in array
  //   if (s[i] === '0') c2 = 0; // reset to 0 as we do not have default 0 in array
  //   if (s[i - 1] === '1' || (s[i - 1] === '2' && parseInt(s[i]) <= 6)) {
  //     c2 = c1 + c2; // if s[i] and s[i-1] can form a valid digit, update c2 to c1+c2
  //     c1 = c2 - c1; // update c1 to previous c2
  //   } else {
  //     // NOTE: else is important!
  //     // 2 digits cannot become a valid number, but second digit can become a valid number
  //     c1 = c2; // c1 = c1 is omitted, update c2 = c1
  //   }
  // }

  return c2;
};

console.log(numDecodings('111'));
console.log(numDecodingsB('111'));

// TODO: variant: return all decode ways

// new file: 4/11/2018
