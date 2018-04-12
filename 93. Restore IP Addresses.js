/**
 * Given a string containing only digits, restore it by returning all possible valid IP address combinations.
 *
 * For example:
 * Given "25525511135",
 *
 * return ["255.255.11.135", "255.255.111.35"]. (Order does not matter)
 */
/**
 * @param {string} s
 * @return {string[]}
 */
const restoreIpAddresses = s => {
  // can validate length and return here if > 12
  const res = [];
  const len = s.length;
  for (let i = 1; i <= 3; i++) {
    // first cut, i is right bound(exclusive)
    if (len - i > 9) continue; // validate length
    for (let j = i + 1; j <= i + 3; j++) {
      //second cut, j is right bound(exclusive)
      if (len - j > 6) continue; // validate length
      for (let k = j + 1; k <= j + 3 && k < len; k++) {
        // third cut, k is right bound(exclusive)
        const a = parseInt(s.substring(0, i));
        const b = parseInt(s.substring(i, j)); // notice that "01" can be parsed into 1. Need to deal with that later.
        const c = parseInt(s.substring(j, k));
        const d = parseInt(s.substring(k));
        if (a > 255 || b > 255 || c > 255 || d > 255) continue; // validate range
        const ip = a + '.' + b + '.' + c + '.' + d; // note dot
        if (ip.length < len + 3) continue; // +3 for 3 dots. this is to reject those int's parsed from "01" or "00"-like substrings
        res.push(ip); // passed all tests, must be valid, so add
      }
    }
  }
  return res;
};

// new file: 4/12/2018
