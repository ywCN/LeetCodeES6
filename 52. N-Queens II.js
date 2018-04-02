/**
 * Follow up for N-Queens problem.
 *
 * Now, instead outputting board configurations, return the total number of distinct solutions.
 */
/**
 * @param {number} n
 * @return {number}
 */
const totalNQueens = n => {
  let count = 0;
  const cols = []; // columns   |
  // d1 and d2 are just places to mark diagonals, do not think them in a matrix
  const d1 = []; // diagonals \  *2 just to make it > sqrt(2)
  const d2 = []; // diagonals /  *2 just to make it > sqrt(2)

  const backtrack = rowIndex => {
    if (rowIndex === n) count++; // if able to reach last row, add count
    for (let col = 0; col < n; col++) {
      let id1 = col - rowIndex + n; // index in d1 always < 2*n
      let id2 = col + rowIndex; // index in d2 always < 2*n
      if (cols[col] || d1[id1] || d2[id2]) continue; // skip attacked spots
      cols[col] = true;
      d1[id1] = true;
      d2[id2] = true;
      backtrack(rowIndex + 1); // increase row immediately because no 2 queens on same row
      cols[col] = false;
      d1[id1] = false;
      d2[id2] = false;
    }
  };

  backtrack(0);
  return count;
};

// new file: 4/1/2018
