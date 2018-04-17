/**
 * Given numRows, generate the first numRows of Pascal's triangle.
 *
 * For example, given numRows = 5,
 * Return
 * [
 *     [1],
 *    [1,1],
 *   [1,2,1],
 *  [1,3,3,1],
 * [1,4,6,4,1]
 * ]
 */
/**
 * Look at pattern below.
 *
 * 1
 * 1 1
 *  \|
 * 1 2 1
 *  \|\|
 * 1 3 3 1
 *  \|\|\|
 * 1 4 6 4 1
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = numRows => {
  if (numRows === 0) return []; // edge case
  const res = [[1]]; // init res and its level 1

  for (let i = 1; i < numRows; i++) {
    const row = []; // new row
    const prevRow = res[i - 1];

    row.push(1); // The first row element is always 1.

    for (let j = 1; j < i; j++) {
      // skip first and last element as they are default 1
      row.push(prevRow[j - 1] + prevRow[j]);
    }

    row.push(1); // The last row element is always 1.

    res.push(row);
  }
  return res;
};

/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generateB = numRows => {
  const res = [];
  if (numRows <= 0) return res;
  const temp = [];
  for (let i = 0; i < numRows; i++) {
    temp.unshift(1);
    for (let j = 1; j < temp.length - 1; j++) {
      // ignore head and tail
      temp[j] = temp[j] + temp[j + 1];
    }
    res.push([...temp]);
  }
  return res;
};

// new file: 4/17/2018
