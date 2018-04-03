/**
 * Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).
 * You may assume that the intervals were initially sorted according to their start times.
 *
 * Example 1:
 * Given intervals [1,3],[6,9], insert and merge [2,5] in as [1,5],[6,9].
 *
 * Example 2:
 * Given [1,2],[3,5],[6,7],[8,10],[12,16], insert and merge [4,9] in as [1,2],[3,10],[12,16].
 */
class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}
/**
 * Not in-place. Note the given intervals are sorted.
 * Skip the non-overlapping intervals whose end is before new interval's start.
 * For overlapped intervals that start before new interval end.
 * | Remove this overlapped interval from list.
 * | Merge it with the new interval by: update start to min start and update end to max end
 * Add new interval in the position i.
 * [][  ][ ][ ][  ][] ----original intervals
 *     [       ] ---------insert interval
 * [][            ][] ----after merging
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
const insert = (intervals, newInterval) => {
  const res = [];
  let i = 0; // tracking the inserting location
  while (i < intervals.length && intervals[i].end < newInterval.start) {
    // non-overlap cases
    res.push(intervals[i++]); // add and increase i
  } // if the first while loop end, it means dup detected or reaches end
  while (i < intervals.length && intervals[i].start <= newInterval.end) {
    // overlapped cases
    const overlap = intervals[i]; // get overlapped interval.
    newInterval.start = Math.min(overlap.start, newInterval.start); // merge into newInterval
    newInterval.end = Math.max(overlap.end, newInterval.end);
    i++;
  }
  res.push(newInterval); // Insert the merged newInterval
  while (i < intervals.length) {
    // add all leftoverinterval
    res.push(intervals[i++]);
  }
  return res;
};

/**
 * In-place version of same solution.
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
const insertB = (intervals, newInterval) => {};
// new file: 4/3/2018
