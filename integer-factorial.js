
// Given a non-negative integer, returns the factorial
function intFactorial(int) {
  let number

  if (int < 0) {
    return NaN
  } else {
    number = 1
  }

  for (let i = 1; i <= int; i++) {
    number *= i
  }

  return number
}

module.exports = intFactorial
