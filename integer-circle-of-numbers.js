
// Given an integer representing equidistant points in a circle (n) and an
// integer representing a point on the circle (firstNumber), return the point
// that is opposite firstNumber on the circle
function circleOfNumbers(n, firstNumber) {
  const arr = []

  for (i = 0; i < n; i++) {
    arr.push(i)
  }

  if (firstNumber < n/2) {
    return arr[firstNumber + n/2]
  }

  return arr[firstNumber - n/2]
}

module.exports = circleOfNumbers
