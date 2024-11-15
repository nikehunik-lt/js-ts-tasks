/**
 * Write a function which for every numbers (negative/positive numbers, zeros) in given array replaces:
 *  one digit numbers with number 1
 *  two digits numbers with number 2
 *  three digits numbers with number 3
 *  the rest numbers with number 4
 * @param {Array<number>} arr
 * @returns {Array<number>}
 */
module.exports.replacement = function replacement(arr) {
  let result = [];

  for (i = 0; i < arr.length; i++) {
    let num = Math.abs(arr[i]).toString().length;
    result.push(num < 4 ? num : 4);
  }
  return result;
};
