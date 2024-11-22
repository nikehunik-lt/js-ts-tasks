/**
 * Write a function which returns a function that returns array of prime numbers between two specified numbers (included)
 * @param {number} highestNumber - a highest possible number
 * @returns {function}
 */
module.exports.primeNumbers = function primeNumbers(highestNumber) {
  return function isPrime(x, y) {
    let result = [];
    for (let num = x; num <= y; num++) {
      let isPrime = true;
      if (num < 2) {
        continue;
      }
      for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
        if (num % i === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        result.push(num);
      }
    }
    return result;
  };
};
