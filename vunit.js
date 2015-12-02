var defaultUnitType = "h";

/**
 * unitType = "w" (width) || "h" (height)
 */
module.exports = function(pixels, unitType) {
  unitType = unitType || defaultUnitType;

  if (!pixels) throw "pixels is undefined!"

  return function(px, vw) {
    if (!vw) {
      return ( px / pixels * 100 ) + "v" + unitType;
    } else {
      return vw / pixels * px;
    }
  }
};
