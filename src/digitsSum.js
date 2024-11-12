/**
 * Given number n (-1000000 <= n <= 1000000). Create a function that counts sum of all digits
 * @param {number} n - number
 * @returns {number}
 */
module.exports.digitsSum = function digitsSum(n) {
  const number = Math.abs(n).toString().split('');
  var sum = 0;

  for (var i = 0; i < number.length; i++) {
    sum += Number(number[i]);
  }
  return sum;
};
