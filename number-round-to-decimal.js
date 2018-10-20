
// Returns number rounded to a fixed decimal place, given number and positive decimal
function roundToDecimal(value, dec) {
  value = +value;

  if (isNaN(value) || dec < 0)
    return NaN;

  // Shift
  value = value.toString().split('e');
  value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] + dec) : dec)));

  // Shift back
  value = value.toString().split('e');
  return (+(value[0] + 'e' + (value[1] ? (+value[1] - dec) : -dec))).toFixed(dec);
}

module.exports = roundToDecimal
