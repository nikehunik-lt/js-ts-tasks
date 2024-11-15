/**
 * Write a script that finds the maximal sequence of equal elements in an array. If there are more than one, return the first.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.getMaximalSequence = function getMaximalSequence(arr) {
  let maxLength = 0;
  let nowLength = 1;
  let result = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      nowLength++;
    } else {
      if (nowLength > maxLength) {
        maxLength = nowLength;
        result = i - maxLength;
      }
      nowLength = 1;
    }
  }
  if (nowLength > maxLength) {
    maxLength = nowLength;
    result = arr.length - maxLength;
  }
  return arr.slice(result, result + maxLength);
};
