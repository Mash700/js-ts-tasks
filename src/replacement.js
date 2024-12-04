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
    const digitCount = absNum === 0 ? 1 : Math.floor(Math.log10(absNum)) + 1; 
    if (digitCount === 1) return 1; 
    if (digitCount === 2) return 2; 
    if (digitCount === 3) return 3; 
    return 4; 
  });
}

