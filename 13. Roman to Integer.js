/**
 * Given a roman numeral, convert it to an integer.
 *
 * Input is guaranteed to be within the range from 1 to 3999.
 *
 * Remember we need to build a map for character to integer.
 * Remember the pattern of Roman.
 * https://zh.wikipedia.org/zh-hans/%E7%BD%97%E9%A9%AC%E6%95%B0%E5%AD%97
 */
/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = s => {
  if (s === null || s.length == 0) return 0;
  const map = new Map(); // {romanNumber: number}
  map.set('I', 1);
  map.set('V', 5); // IV = V - I = 4
  map.set('X', 10);
  map.set('L', 50);
  map.set('C', 100);
  map.set('D', 500);
  map.set('M', 1000);
  let res = 0; // numeric value
  let preVal = 0; // track prev roman number value to see if need to subtract
  for (let i = s.length - 1; i >= 0; i--) {
    // read from end to start
    let curVal = map.get(s.charAt(i));
    if (curVal >= preVal) {
      // like normal number, become equal or bigger
      res += curVal;
    } else {
      // for cases of 4,9,40,90,500,900 (IV,IX,XL,XC,CD,CM). become smaller
      res -= curVal; // subtract it from the numeric value as the rule of Roman
    }
    preVal = curVal;
  }
  return res;
};

// new file: 3/25/2018
