/**
 * Given two numbers represented as strings, return multiplication of the numbers as a string.
 *
 * Note:
 * The numbers can be arbitrarily large and are non-negative.
 * Converting the input string to integer is NOT allowed.
 * You should NOT use internal library such as BigInteger.
 */
/**
 * O(mn) time, O(m+n) space
 * See the picture in below link. Multplying 2 single digits uses max 2 digits, so p1, p2 are enough.
 * https:
 *
 * Math. String.
 * How to do multiplication?
 * Start from right to left, multiply each pair of digits, and add them together.
 * Result num1[i] * num2[j] will be placed at i + j and i + j + 1.
 * Mimic this process.
 * Special cases:
 * 1) If one of the strings is null, return empty.
 * 2) If one of the strings is zero, return zero.
 * From the following draft, we can immediately conclude:
 * num1[i] * num2[j] will be placed at indices [i + j, i + j + 1]
 * 123*45=5535
 * 3:4[0, 0, 0, 1, 5] => 2:3[0, 0, 1, 1, 5] => 1:2[0, 0, 6, 1, 5]
 * 2:3[0, 0, 7, 3, 5] => 1:2[0, 1, 5, 3, 5] => 0:1[0, 5, 5, 3, 5]
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const multiply = (num1, num2) => {
  if (!num1 || !num2) return '';
  if (num1 === '0' || num2 === '0') return '0';
  let m = num1.length;
  let n = num2.length;
  const product = new Array(m + n);
  product.fill(0); // important for JS
  for (let j = n - 1; j >= 0; j--) {
    for (let i = m - 1; i >= 0; i--) {
      let p = parseInt(num1.charAt(i)) * parseInt(num2.charAt(j));
      let p1 = i + j;
      let p2 = i + j + 1;
      let sum = p + product[p2];
      product[p2] = sum % 10;
      product[p1] += Math.floor(sum / 10);
    }
  }
  const res = [];
  for (let p of product) {
    if (p || res.length !== 0) res.push(p);
  }
  return res.join('');
};

// new file: 3/28/2018
