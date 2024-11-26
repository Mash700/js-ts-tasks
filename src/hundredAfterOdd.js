/**
 * Write a function which inside given array of numbers puts a number `100` after each odd number.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.hundredAfterOdd = function hundredAfterOdd(arr, value) {
  let result = [];
  
  arr.forEach(item => {
    result.push(item); 
    if (item % 2 !== 0) 
      { 
      result.push(100); 
    }
  });

  return result;
}