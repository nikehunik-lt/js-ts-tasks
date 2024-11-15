/**
 * Calculate the distance between two points represented on the standard Planar coordinate system
 * with precision 2 decimal places
 * Each Point represented by object contains two property (X and Y)
 * @param {Object} firstPoint
 * @param {Object} secondPoint
 * @returns {number}
 */
module.exports.getDistance = function getDistance(firstPoint, secondPoint) {
  const distanceX = secondPoint.X - firstPoint.X;
  const distanceY = secondPoint.Y - firstPoint.Y;
  const distanceXY = Math.sqrt(distanceX ** 2 + distanceY ** 2);
  return distanceXY.toFixed(2);
};
