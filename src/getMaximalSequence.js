/**
 * Write a script that finds the maximal sequence of equal elements in an array. If there are more than one, return the first.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.getMaximalSequence = function getMaximalSequence(arr) {
    let maxSeq = [], currentSeq = [];
    arr.forEach((num, index) => {
        if (num === arr[index - 1]) {
            currentSeq.push(num);
        } else {
            if (currentSeq.length > maxSeq.length) maxSeq = currentSeq;
            currentSeq = [num];
        }
    });

    return currentSeq.length > maxSeq.length ? currentSeq : maxSeq;
}