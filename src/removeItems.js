/**
 * Write a function which removes from given array items are equal a given value
 * @param {Object} arr
 * @param {Object | number | string | boolean} value
 * @returns {Object}
 */
module.exports.removeItems = function removeItems(arr, value) {
    const deepEqual = (a, b) =>
      a === b ||
      (typeof a === "object" && typeof b === "object" && a !== null && b !== null &&
       Object.keys(a).length === Object.keys(b).length &&
       Object.keys(a).every(key => deepEqual(a[key], b[key])));
    
    return arr.filter(item => !deepEqual(item, value));
  };

