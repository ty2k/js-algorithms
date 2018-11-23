
// Given a string, returns the sum of any numbers within it (or zero)
function sumUpNumbers(inputString) {
  const arr = inputString.match(/[0-9]+/g)
  let sum = 0

  if (arr && arr.length > 0) {
    arr.map(x => sum += parseInt(x))
  }

  return sum
}

module.exports = sumUpNumbers
