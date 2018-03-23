/**
 * Implement parseInt in JS.
 * 
 * Make sure all border cases are considered.
 * Whitespace, sign, out of range
 * Trim the unnecessary whitespace
 * initialize a variable as long to store the result
 * use a boolean as a flag to mark whether its negative
 * return MAX or MIN if its out of range
 */
/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = str => {
  const INT_MAX = Math.pow(2, 31) - 1;
  const INT_MIN = -Math.pow(2, 31);
  let trimmed = '';
  for (let i = 0; i < str.length; i++) {
    if ((str[i] >= '0' && str[i] <= '9') || str[i] === '+' || str[i] === '-') { // sign
      trimmed += str[i];
    } else if (trimmed.length > 0 || (str[i] !== ' ' && trimmed.length === 0)) { // stop when not space
      break;
    }
  }    
  let res =  parseInt(trimmed); // parseInt is in face atoi. bad question for JS.
  if (!res) res = 0;
  if (res > INT_MAX) res = INT_MAX;
  if (res < INT_MIN) res = INT_MIN;
  return res;
};

// new file: 3/23/2018
