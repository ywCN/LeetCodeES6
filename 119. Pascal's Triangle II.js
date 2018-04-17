/**
 * Given an index k, return the kth row of the Pascal's triangle.        1----------0
 * For example, given k = 3,                                            1 1---------1
 * Return [1,3,3,1].                                                   1 2 1--------2
 * Note:                                                              1 3 3 1-------3
 * Could you optimize your algorithm to use only O(k) extra space?   1 4 6 4 1------4
 */
/**
 * from start to end; only update middle numbers, skip head and tail.
 * manipulate the state after inserting front or end.
 *
 *         1------------0
 *       1 1------------1
 *     1 1 1------row.add(0, 1);
 *       |/ ------row[j] = row[j] + row[j + 1];
 *     1 2 1------------2
 *   1 1 2 1------row.add(0, 1);
 *     |/|/ ------row[j] = row[j] + row[j + 1];
 *   1 3 3 1------------3
 * 1 1 3 3 1------row.add(0, 1);
 *   |/|/|/ ------row[j] = row[j] + row[j + 1];
 * 1 4 6 4 1------------4
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = rowIndex => {
  const row = [];
  for (let i = 0; i < rowIndex + 1; i++) {
    // we need rowIndex+1 numbers for 1 based row
    row.unshift(1); // insert 1 at head
    for (let j = 1; j < row.length - 1; j++) {
      // ONLY update CURRENT MIDDLE numbers
      row[j] = row[j] + row[j + 1]; // Pascal's triangle formula
    }
  }
  return row;
};

// new file: 4/17/2018
