/**
 * Find a sum in a range of consecutive numbers
 * @param {number|string} start
 * @param {number|string} end
 * @returns {number}
 */
module.exports.sumInRange = function sumInRange(start, end) {
  if (end < start) {
    const replacement = end;
    end = start;
    start = replacement;
  }

  var sum = 0;

  for (var i = end; i >= start; i--) {
    sum += i;
  }
  return sum;
};
