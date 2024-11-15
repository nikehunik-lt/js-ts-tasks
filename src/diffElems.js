/**
 * Write a function which inside given array of numbers counts amount of different elements.
 * @param {Object} arr
 * @returns {number}
 */
module.exports.diffElems = function diffElems(arr) {
  let num = [];
  let result = 0;
  for (i = 0; i < arr.length; i++) {
    if (!num.includes(arr[i])) {
      result++;
      num.push(arr[i]);
    }
  }
  return result;
};
