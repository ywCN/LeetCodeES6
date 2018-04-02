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

/**
 * O(NlogN) Time.
 * variant 1: input is unsorted and has overlapping intervals, output is total non-overlapping time
 * total non-overlapping time is the total time after merging
 */
const totalTime = intervals => {
  if (!intervals || !intervals.length) return 0; // ask input
  intervals.sort((a, b) => a.start - b.start);
  let total = 0;
  let prev = new Interval(0, 0); // zero length interval to init
  for (let cur of intervals) {
    if (prev.end < cur.start) {
      total += cur.end - cur.start; // add the whole part(non-overlapping)
      prev = cur;
    } else if (cur.end > prev.end) {
      total += cur.end - prev.end; // only add the non overlapping part after prev.end
      prev = cur;
    }
  }
  return total;
};

/**
 * variant 2: if the format of intervals are "March, 2014" etc, first convert it to "201403" by "2014" + "03"(hashmap:March->03)
 * or first convert it to 2014 * 12 + 3, if the output is num of months.
 */

const test1 = [
  new Interval(15, 18),
  new Interval(1, 3),
  new Interval(8, 10),
  new Interval(2, 6)
];

console.log(merge(test1));

const test2 = [
  new Interval(15, 18),
  new Interval(1, 3),
  new Interval(8, 10),
  new Interval(2, 6),
  new Interval(16, 17)
];

console.log(totalTime(test2));

// new file: 4/2/2018
