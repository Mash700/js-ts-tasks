/**
 * Calculate the distance between two points represented on the standard Planar coordinate system
 * with precision 2 decimal places
 * Each Point represented by object contains two property (X and Y)
 * @param {Object} firstPoint
 * @param {Object} secondPoint
 * @returns {number}
 */
  function getDistance(firstPoint, secondPoint) {
    const dx = secondPoint.X - firstPoint.X;
    const dy = firstPoint.Y - secondPoint.Y; 
    const distance = Math.sqrt(dx ** 2 + dy ** 2);
    return parseFloat(distance.toFixed(2)); 
}