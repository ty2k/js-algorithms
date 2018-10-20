
// Returns a rounded number, given a number and digits count
function round(value, exp) {
  if (typeof exp === 'undefined' || +exp === 0) {
    return Math.round(value)
  }

  // Unary plus coerces the operand to a number if it isn't already
  value = +value;
  exp = +exp;

  if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0))
    return NaN;

  // Shift
  value = value.toString().split('e');
  value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp)));

  // Shift back
  value = value.toString().split('e');
  return +(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp));
}

module.exports = round
