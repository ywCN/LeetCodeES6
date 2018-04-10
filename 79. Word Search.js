/**
 * Given a 2D board and a find if the word exists in the grid.
 * }
 * The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally
 * or vertically neighboring. The same letter cell may not be used more than once.
 * }
 * For example,
 * Given board =
 * | [
 * |   ['A','B','C','E'],
 * |   ['S','F','C','S'],
 * |   ['A','D','E','E']
 * | ]
 * word = "ABCCED", -> returns true,
 * word = "SEE", -> returns true,
 * word = "ABCB", -> returns false.
 */
/**
 * Backtracking.
 * Search 4 directions, 1 will be terminated immediately.
 * Time: O((m*n)*3^l), m: width, n: length, l: length of word
 * For each character in board, start backtracking if the first character matches.
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = (board, word) => {
  if (!board || !board.length || !board[0].length || !word) return false;
  if (word.length === 0) return true;
  // boolean[][] visited = new boolean[board.length][board[0].length];

  const search = (i, j, pos) => {
    if (word.length === pos) return true;
    // Out of board or doesn't match.
    if (
      i < 0 ||
      i >= board.length ||
      j < 0 ||
      j >= board[0].length ||
      board[i][j] != word.charAt(pos) ||
      board[i][j] == '#'
      // || visited[i][j]
    ) {
      return false;
    }
    board[i][j] = '#'; // mark visited // visited[i][j] = true;
    let found =
      search(i - 1, j, pos + 1) || // up     ,visited
      search(i + 1, j, pos + 1) || // down   ,visited
      search(i, j - 1, pos + 1) || // left   ,visited
      search(i, j + 1, pos + 1); // right    ,visited
    board[i][j] = word[pos]; // restore visited // visited[i][j] = false;
    return found;
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] == word[0]) {
        // find a match, start searching
        if (search(i, j, 0)) return true;
      }
    }
  }
  return false;
};

// TODO: add variant

// new file: 4/9/2018
