/**
 * Given two binary represented by strings, return their sum (also as binary string).
 *
 * For example,
 * ab = "11"
 * b = "1"
 * Return "100".
 */
/**
 * time O(m+n) space O(m+n)
 * if we need to calculate hexadecimal or k decimal, carry = sum / k; res.append(sum % k), and use hash to map 'ABCDEF' to nums
 * if we have zeros at the front of strings, and we only need one MS bit,first clear all zeros at the front, after calculaing,
 * add '0' if no overflow, add '1' if overflow (length >= 32 or carry == 1)
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = (a, b) => {
  if (!a || !b) return '';
  const res = [];
  let carry = 0;
  // loop from end to start
  for (let m = a.length - 1, n = b.length - 1; m >= 0 || n >= 0; ) {
    if (m >= 0) {
      carry += parseInt(a[m]);
      m--;
    }
    if (n >= 0) {
      carry += parseInt(b[n]);
      n--;
    }
    res.push(carry % 2); // get remainder
    carry = Math.floor(carry / 2); // get quotient
  }
  if (carry) res.push(1); // there may be one extra number like 11 + 1 = 100
  return res.reverse().join('');
};

/**
 * Bitwise.
 * 获得二进制相加后的个位数
 *    0 ^ 0 = 0 = (0 + 0) % 2
 *    0 ^ 1 = 1 = (0 + 1) % 2
 *    1 ^ 0 = 1 = (1 + 0) % 2
 *    1 ^ 1 = 0 = (1 + 1) % 2
 * 获得二进制相加后的十位数
 *    0 & 0 = 0 = Math.floor((0 + 0) / 2)
 *    0 & 1 = 0 = Math.floor((0 + 1) / 2)
 *    1 & 0 = 0 = Math.floor((1 + 0) / 2)
 *    1 & 1 = 1 = Math.floor((1 + 1) / 2)
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinaryB = (a, b) => {
  if (!a || !b) return '';
  const res = [];
  let carry = 0;

  for (let m = a.length - 1, n = b.length - 1; m >= 0 || n >= 0; ) {
    let num1 = 0;
    let num2 = 0;
    if (m >= 0) {
      num1 = parseInt(a[m]);
      m--;
    }
    if (n >= 0) {
      num2 = parseInt(b[n]);
      n--;
    }
    let cur = carry ^ num1 ^ num2; // 三数相加的个位
    res.push(cur);
    carry = (num1 & num2) | (num1 & carry) | (num2 & carry); // 三数相加的十位, |是因为只要有一次达到1就说明需要进位
  }
  if (carry) res.push(1);
  return res.reverse().join('');
};

// new file: 4/6/2018
