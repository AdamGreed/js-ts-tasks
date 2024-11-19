/**
 * Write a function which returns a function that returns array of prime numbers between two specified numbers (included)
 * @param {number} highestNumber - a highest possible number
 * @returns {function}
 */
module.exports.primeNumbers = function primeNumbers(highestNumber) {
  function isPrime(num) {
    if (num < 1) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  return function (start, end) {
    const primes = [];
    for (let i = Math.max(2, start); i <= Math.min(end, highestNumber); i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
    return primes;
  };
};
