
// Returns a string representing the input number rounded to a fixed point,
// given a number and a fixed-point decimal position.
function roundToDecimal(value, dec) {
  value = +value

  if (isNaN(value) || dec < 0) {
    return NaN
  }

  // Shift
  value = value.toString().split('e')
  value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] + dec) : dec)))

  // Shift back
  value = value.toString().split('e')
  return (+(value[0] + 'e' + (value[1] ? (+value[1] - dec) : -dec))).toFixed(dec)
}

module.exports = roundToDecimal
