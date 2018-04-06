/**
 * Given an array of words and a length L, format the text such that each line has exactly L characters and is fully
 * (left and right) justified.
 *
 * You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra
 * spaces ' ' when necessary so that each line has exactly L characters.
 *
 * Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line do not
 * divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.
 *
 * For the last line of text, it should be left justified and no extra space is inserted between words.
 *
 * For example,
 * words: ["This", "is", "an", "example", "of", "text", "justification."]
 * L: 16.
 *
 * Return the formatted lines as:
 * [
 * "This    is    an",
 * "example  of text",
 * "justification.  "
 * ]
 * Note: Each word is guaranteed not to exceed L in length.
 *
 * Corner Cases:
 * A line other than the last line might contain only one word. What should you do in this case?
 * In this case, that line should be left-justified.
 */

/**
 * https://www.youtube.com/watch?v=RORuwHiblPc&t=540s
 * https://www.youtube.com/watch?v=ENyox7kNKeY&t=1165s
 * String.
 * First figure out how many words to fit current line.
 * | Init a length as -1, to exclude the last space.
 * | Start from i, add word length + 1 to length as long as w is still within array and length within maxWidth.
 * Then append the words and generate line.
 * Start from the first word.
 * | Append the first word.
 * | Calculate number of spaces and extra spaces.
 * |    space -> 1, at least one space
 * |    extra -> 0,
 * |    If w moved and w != words.length, meaning not the last line
 * |      space = remain length / intervals between words + 1(at least 1 space)
 * |      extra = remain length % intervals between words
 * Append the rest of the words. The first one is appended already.
 * | Append spaces and extra spaces first. Then append word.
 * Deal with padding spaces if it is the last line.
 * | If maxWidth > current line length, it's the last line.
 * |   Pad spaces at the end.
 * Add current line to res.
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
const fullJustify = (words, maxWidth) => {
  const res = [];
  // i: slow pointer, w: fast pointer
  for (let i = 0, w; i < words.length; i = w) {
    // Find the number of words to fit this line //
    let len = -1; // Length of current line. Init as -1 to remove last space.
    for (
      w = i;
      w < words.length && len + words[w].length + 1 <= maxWidth;
      w++
    ) {
      len += words[w].length + 1; // 1 is an extra space in between words.
    }
    // Append the first word. //
    const line = [...words[i]];
    // Calculate number of spaces, number of extra in for each space //
    let space = 1; // Number of spaces between words.
    let extra = 0; // Extra spaces at the end of line.
    if (w != i + 1 && w != words.length) {
      // w moved and not last line.
      space = Math.floor((maxWidth - len) / (w - 1 - i)) + 1; // w - i - 1 is actually (w - 1) - i + 1 - 1.
      extra = (maxWidth - len) % (w - 1 - i); // Extra is the modular.
    }
    // Append the rest of the words //
    for (let j = i + 1; j < w; j++) {
      // Append space first. //
      for (let s = space; s > 0; s--) {
        line.push(' ');
      }
      // distribute extra spaces //
      if (extra > 0) {
        line.push(' ');
        extra--;
      }
      // Append the word. //
      line.push(...words[j]);
    }
    // Deal with last line's padding spaces //
    let remain = maxWidth - line.length; // If not last line, remain will be 0.
    while (remain > 0) {
      // Last line.
      line.push(' ');
      remain--;
    }
    res.push(line.join(''));
  }
  return res;
};

// new file: 4/6/2018
