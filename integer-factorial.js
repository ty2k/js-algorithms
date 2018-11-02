
// Given a non-negative integer, returns the factorial
function intFactorial(int) {
  if (int < 0) {
    return NaN
  }

  let number = 1

  for (let i = 1; i <= int; i++) {
    number *= i
  }

  return number
}

module.exports = intFactorial
