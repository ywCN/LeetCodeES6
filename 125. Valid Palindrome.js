/**
 * Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
 *
 * For example,
 * "A man, a plan, a canal: Panama" is a palindrome.
 * "race a car" is not a palindrome.
 *
 * Note:
 * Have you consider that the string might be empty? This is a good question to ask during an interview.
 *
 * For the purpose of this problem, we define empty string as valid palindrome.
 */
/**
 * Can also use charCodeAt(0) to check ascii value, which should < 128
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = s => {
  if (!s || !s.length) return true;
  const regex = RegExp('[a-zA-Z0-9]'); // alphanumeric, '^[a-zA-Z0-9]+$' also works
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    const head = s[i]; // char at head
    const tail = s[j]; // char at tail
    if (!regex.test(head)) i++;
    // ignore non-char or non-number
    else if (!regex.test(tail)) j--;
    // ignore non-char or non-number
    else if (head.toLowerCase() !== tail.toLowerCase()) {
      // Note: .toLowerCase
      return false; // failed for palindrome pattern
    } else {
      // same char or number, move both pointers
      i++;
      j--;
    }
  }
  return true; // passed all tests
};

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindromeB = s => {
  let parsed = s.replace(/[^A-Z0-9a-z]/g, '').toLowerCase(); // The g after the regular expression is an option or flag that performs a global search, looking in the whole string and returning all matches.
  // empty -> rtn true
  if (parsed.length < 2) return true; // ask for this condition
  // compare last and first until middle (math floor len/2), rtn false if no match
  for (let i = 0, j = parsed.length - 1; i < j; i++, j--) {
    if (parsed[i] !== parsed[j]) {
      return false;
    }
  }
  // all matched if we get to end, rtn true
  return true;
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('a b;c,b a'));

console.log(isPalindromeB('A man, a plan, a canal: Panama'));
console.log(isPalindromeB('a b;c,b a'));

// new file: 4/17/2018
