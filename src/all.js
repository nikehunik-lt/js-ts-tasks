/**
 * Write a function that will work similar to standard Promise.all
 * @param {Array<Promise>} promisesArray
 * @returns Promise
 */
module.exports.all = function all(promisesArray) {
  return new Promise((res, rej) => {
    let result = [];
    promisesArray.forEach((promise, index) => {
      let i = 0;
      while (i < promisesArray.length) {
        promisesArray[i]
          .then(value => {
            result[i] = value;
            if (i === promisesArray.length - 1) {
              res(result);
            }
          })
          .catch(reason => {
            rej(reason);
          });
        i++;
      }
    });
  });
};
