/**
 * Given two sorted integer arrays nums1 and nums2, merge nums2 INTO nums1 as one sorted array.
 *
 * Note:
 * You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from
 * nums2. The number of elements initialized in nums1 and nums2 are m and n respectively.
 */
/**
 * 3 Pointers. You may assume that nums1 has enough space.
 * One pointer i at the end of nums1. Another pointer j at the end of nums2.
 * Compare their values and put the larger one at the end of nums1.
 * The end index is m+n+1.
 * If m == 0, nums1 is fully merged, merge the rest of nums2.
 * starts from last index, values in nums won't get messed up
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function(nums1, m, nums2, n) {
  // sync indices
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;
  while (i >= 0 && j >= 0) {
    // write on nums1
    if (nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  }
  // write rest
  while (j >= 0) {
    nums1[k--] = nums2[j--];
  }
  // for (let i = m + n - 1; i >= 0; i--) {
  //   // m+n-1 is the index track the insert position
  //   if (m > 0 && n > 0) {
  //     // both not empty
  //     if (nums2[n - 1] > nums1[m - 1]) {
  //       nums1[i] = nums2[n - 1];
  //       n--; // also decrease its own index
  //     } else {
  //       nums1[i] = nums1[m - 1];
  //       m--; // also decrease its own index
  //     }
  //   } else if (n > 0) {
  //     // m is empty
  //     nums1[i] = nums2[n - 1];
  //     n--; // also decrease its own index
  //   } else if (m > 0) {
  //     // n is empty
  //     nums1[i] = nums1[m - 1];
  //     m--; // also decrease its own index
  //   }
  // }
};

// new file: 4/11/2018
