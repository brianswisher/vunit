var defaultUnitType = "h";

/**
 * unitType = "w" (width) || "h" (height)
 */
module.exports = function(pixels, unitType) {
  unitType = unitType || defaultUnitType;

  if (!pixels) throw "pixels is undefined!"

  return function(px) {
    return ( (px / pixels) * 100 ) + "v" + unitType;
  };
};
