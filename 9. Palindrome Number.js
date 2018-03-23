/**
 * Determine whether an integer is a palindrome. Do this without extra space.
 */

/**
 * This solution is like doing a half work of reversing integer, stop reversing when reversed >= original(changed), 
 * then return reversed == original(changed), or reversed/10 == original(changed) for odd cases.
 * time: O(log10 N) space: O(1)
 * Could negative integers be palindromes? (ie, -1)
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = x => {
  if (x < 0) return false;
  if (x && x%10 === 0) return false;
  let reversed = 0;
  while (reversed < x) {
    reversed = reversed*10 + x%10;
    x = Math.floor(x/10);
  }
  return x === reversed || x === Math.floor(reversed/10);
};

console.log(isPalindrome(12321));
console.log(isPalindrome(123321));

// new file: 3/23/2018
