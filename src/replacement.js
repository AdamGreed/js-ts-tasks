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
  return arr.map(num => {
    const absNum = Math.abs(num);

    if (absNum < 10) {
      return 1;
    } else if (absNum < 100) {
      return 2;
    } else if (absNum < 1000) {
      return 3;
    } else {
      return 4;
    }
  });
};
