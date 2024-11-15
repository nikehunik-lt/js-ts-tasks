/**
 * Write a function which finds a maximal common substring of two given strings
 * example
 * str1 = 'xavgabcdefmokd'
 * str2 = 'hkotogabcdefl'
 * answer: 'gabcdef' - a common substring for both strings
 * @param {string} str1
 * @param {string} str2
 * @returns {number}
 */
module.exports.maxCommonSub = function maxCommonSub(str1, str2) {
  let resultMax = '';
  let x1 = str1.length;
  let x2 = str2.length;

  for (let i = 0; i < x1; i++) {
    for (let j = 0; j < x2; j++) {
      let result = '';
      while (str1[i] === str2[j] && i < x1 && j < x2) {
        result += str1[i];
        i++;
        j++;
      }
      if (result.length > resultMax.length) {
        resultMax = result;
      }
    }
  }
  return resultMax;
};
