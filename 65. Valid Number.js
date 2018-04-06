/**
 * Validate if a given string is numeric.
 *
 * Some examples:
 * "0" => true
 * " 0.1 " => true
 * "abc" => false
 * "1 a" => false
 * "2e10" => true
 * Note: It is intended for the problem statement to be ambiguous.
 * You should gather all requirements up front before implementing one.
 */

/**
 * Trim heading and trailing whitespaces.
 * Use 3 booleans to remember whether dot, exp, and number have shown.
 * Then check violations.
 * Situations are:
 * 1) Number: No violations. Just set hasNum to true.
 * 2) Dot: Cannot appear after previous dot or 'e'. Then set decimal to true.
 * 3) Exp: Cannot appear after previous 'e' or when there is no number yet.
 * |       Then set hasE to true. IMPORTANT!!! Set hasNum to false.
 * 4) Signs: Can only appear at first or right after e. Otherwise return false.
 * 5) All other characters, like whitespace, or abc: Return false.
 *
 * Some cases may not be asked during interview. Could you give me some valid and invalid cases?
 * only numbers (may start with 0): 123, 023, 003
 * decimals (may omit 0's): 3.0, 3., .3     *invalid if there's no numbers before or after '.'
 * starts with '+' or '-': +3, -.3, -3.
 * use an 'e' to represent "*10^n": 3e3 = 3e+3 = 3000
 * spaces before or after numbers: " 123", "123 ", " 123 "
 * Another solution is regular expression
 * return s.matches("(\\s*)[+-]?((\\.[0-9]+)|([0-9]+(\\.[0-9]*)?))(e[+-]?[0-9]+)?(\\s*)");
 * @param {string} s
 * @return {boolean}
 */
const isNumber = s => {
  s = s.trim(); // Remove whitespaces first. We start with trimming.
  // flags
  let hasDot = false;
  let hasE = false;
  let hasNum = false;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c >= '0' && c <= '9') {
      // Is number.
      hasNum = true;
    } else if (c === '.') {
      // Is decimal.
      if (hasE || hasDot) return false; // Cannot appear after exp or dot.
      hasDot = true;
    } else if (c === 'e') {
      // Is exp.
      if (hasE || !hasNum) return false; // Cannot appear after exp or before number.
      hasNum = false; // NOTE here reset the hasNum flag. Avoid 1e. must have num after e.
      hasE = true;
    } else if (c === '-' || c === '+') {
      // Is sign.
      if (i !== 0 && s[i - 1] !== 'e') return false; // Must be first or after 'e'.
    } else {
      // All other cases are not allowed.
      return false;
    }
  }
  return hasNum; // in all valid cases, there is always at least one number
};

/**
 * The latest version of ECMAScript (ES2015) contains the Number.isNaN() function.
 * Number.isNaN(x) will be a reliable way to test whether x is NaN or not.
 * @param {string} s
 * @return {boolean}
 */
const isNumberB = s => {
  if (s.trim() === '') return false;
  return !Number.isNaN(Number(s));
};

// new file: 4/6/2018
