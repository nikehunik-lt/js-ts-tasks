/**
 * Find a sum of two numbers
 * @param {number|string} firstNumber
 * @param {number|string} secondNumber
 * @returns {number}
 */
module.exports.sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber) {
  if (typeof firstNumber === 'string') {
    firstNumber = firstNumber.replaceAll(' ', '');
    firstNumber = Number(firstNumber);
  }

  if (typeof secondNumber === 'string') {
    secondNumber = secondNumber.replaceAll(' ', '');
    secondNumber = Number(secondNumber);
  }

  const sum = firstNumber + secondNumber;
  return sum;
};
