/**
 * Calculate the distance between two points represented on the standard Planar coordinate system
 * with precision 2 decimal places
 * Each Point represented by object contains two property (X and Y)
 * @param {Object} firstPoint
 * @param {Object} secondPoint
 * @returns {number}
 */
module.exports.getDistance = function getDistance(firstPoint, secondPoint) {
  const difX = secondPoint.X - firstPoint.X;
  const difY = secondPoint.Y - firstPoint.Y;

  const distance = Math.sqrt(difX ** 2 + difY ** 2);

  return distance.toFixed(2);
};
