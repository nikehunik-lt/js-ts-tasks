/**
 * Copy and paste defined amount of a string's symbols to the front and back of a string
 * @param {string} str
 * @param {number} symbolsCount
 * @returns {string}
 */
module.exports.backToFront = function backToFront(str, symbolsCount) {
  if (str.length < symbolsCount) return str;
  symbol = '';
  for (var i = str.length - symbolsCount; i < str.length; i++) {
    symbol += str[i];
  }
  var result = symbol + str + symbol;
  return result;
};
