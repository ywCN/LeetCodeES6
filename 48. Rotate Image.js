/**
 * You are given an n x n 2D matrix representing an image.
 *
 * Rotate the image by 90 degrees (clockwise).
 * do this in-place
 */
/**
 * In-place. (Note for this question, height = width)
 * first transpose: for(i -> height) {for(j -> i) {[i][j]=[j][i]}}
 * then swap left right: for(i -> height) {for(j -> width/2) {[i][j]=[i][width-1-j]}}
 *
 * How to transpose?
 * [i][j] = [j][i], but watch the index range for in-place solution.
 * 		although the transpose pattern is the same as the non-inplace transpose
 * 		we need to limit the indices within the inclined top or oblique bottom
 * 		or we will end up with a non-transposed matrix (transposed twice!)
 *
 * Transpose Pattern 1: limit the indices within the oblique bottom (j = 0; j < i)
 *   					        [ ,  ,  ]			    	[1, 2, 3]
 * it's like swapping	[4,  ,  ]	part of		[4, 5, 6]
 * 						        [7, 8,  ]			    	[7, 8, 9]
 *
 * Transpose Pattern 2: limit the indices within the inclined top (j = i; j < n)
 * 						        [ , 2, 3]				    [1, 2, 3]
 * it's like swapping	[ ,  , 6]	part of		[4, 5, 6]
 * 						        [ ,  ,  ]				    [7, 8, 9]
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = matrix => {
  const n = matrix.length; // height === width for this question
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  for (let row of matrix) {
    for (let i = 0; i < n / 2; i++) {
      temp = row[i];
      row[i] = row[n - 1 - i];
      row[n - 1 - i] = temp;
    }
  }
  // same
  // for (let i = 0; i < n; i++) {
  //   for (let j = 0; j < n / 2; j++) {
  //     temp = matrix[i][j];
  //     matrix[i][j] = matrix[i][n - 1 - j];
  //     matrix[i][n - 1 - j] = temp;
  //   }
  // }
};

/**
 * not in place
 * transpose into a new matrix, then rewrite on the input
 */
const rotateB = matrix => {
  const n = matrix.length;
  const trans = [];
  for (let i = 0; i < n; i++) {
    trans.push([]);
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      trans[j][n - 1 - i] = matrix[i][j];
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      matrix[i][j] = trans[i][j];
    }
  }
};

// new file: 4/1/2018
