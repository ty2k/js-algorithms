
const intFactorial = require('../integer-factorial')

function testIntFactorial() {
  const invalidCases = [-1, -10]
  const validCases = [
    [0, 1],
    [1, 1],
    [2, 2],
    [3, 6],
    [4, 24],
    [5, 120],
    [10, 3628800],
    [100, 9.33262154439441e+157]
  ]

  console.log('\nintFactorial() should return NaN for negative integers.\n')

  invalidCases.forEach((test) => {
    console.log(`Expect intFactorial(${test}) to return NaN.`)

    if (isNaN(intFactorial(test))) {
      console.log('Passed.')
    } else {
      console.error('Failed.')
    }
  })

  console.log('\nintFactorial() should return a postive integer\'s factorial.\n')

  validCases.forEach((test) => {
    console.log(`Expect intFactorial(${test[0]}) to return ${test[1]}.`)

    if (intFactorial(test[0]) === test[1]) {
      console.log('Passed.')
    } else {
      console.error('Failed.')
    }
  })
}

module.exports = testIntFactorial
