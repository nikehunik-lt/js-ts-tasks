/**
 * Write a function that will work similar to standard Promise.race
 * @param {Array<Promise>} promisesArray
 * @returns Promise
 */
module.exports.race = function race(promisesArray) {
  return new Promise((res, rej) => {
    let i = 0;
    while (i < promisesArray.length) {
      promisesArray[i].then(
        value => {
          res(value);
        },
        reason => {
          rej(reason);
        }
      );
      i++;
    }
  });
};
