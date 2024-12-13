/**
 * Write a function which returns a function that returns array of prime numbers between two specified numbers (included)
 * @param {number} highestNumber - a highest possible number
 * @returns {function}
 */
module.exports.primeNumbers = function primeNumbers() {
  return function(lowestNumber, highestNumber) {
    if (typeof lowestNumber !== 'number' || typeof highestNumber !== 'number' || lowestNumber > highestNumber) {
      return [];
    }
    const primes = [];

    for (let num = Math.max(2, lowestNumber); num <= highestNumber; num++) {
      let isPrime = true;

      for (let divisor = 2; divisor <= Math.sqrt(num); divisor++) {
        if (num % divisor === 0) {
          isPrime = false;
          break;
        }
      }

      if (isPrime) {
        primes.push(num);
      }
    }
    return primes;
  };
};