/**
 * Write a function that will work similar to standard Promise.all
 * @param {Array<Promise>} promisesArray
 * @returns Promise
 */
module.exports.all = function all(promisesArray) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promisesArray)) {
      return reject(new TypeError());
    }

    let results = new Array(promisesArray.length);
    let completed = 0;

    if (promisesArray.length === 0) {
      return resolve([]);
    }

    promisesArray.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(value => {
          results[index] = value;
          completed += 1;
          if (completed === promisesArray.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
};
