
const circleOfNumbers = require('../integer-circle-of-numbers')

function testCircleOfNumbers() {
  const testCases = [
    [[10, 2], 7],
    [[10, 7], 2],
    [[4, 1], 3],
    [[6, 3], 0]
  ]

  console.log('\ncircleOfNumbers(n, firstNumber) should return an integer representing a point on a circle made of equidistant points (of count n) that is opposite a starting point (firstNumber).\n')

  testCases.forEach((test) => {
    console.log(`Expect circleOfNumbers(${test[0][0], test[0][1]}) to return ${test[1]}.`)

    if (circleOfNumbers(test[0][0], test[0][1]) === test[1]) {
      console.log('Passed.')
    } else {
      console.error('Failed.')
    }
  })
}

module.exports = testCircleOfNumbers
