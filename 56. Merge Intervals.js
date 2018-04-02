/**
 * Given a collection of intervals, merge all overlapping intervals.
 *
 * For example,
 * Given [1,3],[2,6],[8,10],[15,18],
 * return [1,6],[8,10],[15,18].
 */
class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}
/**
 * Sort. O(NlogN) Time.
 * Sort the intervals by start, ascending.
 * Use a cache, prev, for previous merged interval.
 * For each of the intervals:
 * | If prev == null, merged is empty, add directly and update prev.
 * | If prev.end < i.start, no overlap, add directly and update prev.
 * | Else if prev.end >= i.start, there is overlap.
 * |   We already know i.start >= prev.start because of sorting. No need to update start.
 * |   Only update end is enough.
 * |   If prev.end >= i.end, no need to update end.
 * |   If prev.end < i.end, update end to i.end.
 *
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
const merge = intervals => {
  if (!intervals || !intervals.length) return intervals; // ask input
  const res = [];
  intervals.sort((a, b) => a.start - b.start);
  let prev = null; // cache prev
  for (let cur of intervals) {
    if (!prev || prev.end < cur.start) {
      // first interval or no overlap
      res.push(cur); // so add.
      prev = cur; // update cached
    } else {
      // overlapped, update cached
      prev.end = Math.max(cur.end, prev.end); // Math for inclusive case
    }
  }
  return res;
};
// new file: 4/2/2018
