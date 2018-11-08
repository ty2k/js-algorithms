
const round = require('../number-round')

function testRound() {
  const invalidTestCases = [
    ['ninety-nine', -1],
    [12345.12345, NaN],
    [NaN, 0],
    [NaN, NaN]
  ]
  const validTestCases = [
    [12345.12345, -6, 0],
    [12345.12345, -5, 0],
    [12345.12345, -4, 10000],
    [12345.12345, -3, 12000],
    [12345.12345, -2, 12300],
    [12345.12345, -1, 12350],
    [12345.12345, 0, 12345],
    [12345.12345, 1, 12345.1],
    [12345.12345, 2, 12345.12],
    [12345.12345, 3, 12345.123],
    [12345.12345, 4, 12345.1235],
    [12345.12345, 5, 12345.12345],
  ]

  console.log('\nround() should return NaN when the first or second parameter is invalid.\n')

  invalidTestCases.forEach((test) => {
    console.log(`Expect round(${test[0]}, ${test[1]}) to return NaN.`)

    if (isNaN(round(test[0], test[1]))) {
      console.log('Passed.')
    } else {
      console.error('Failed.')
    }
  })

  console.log('\nround() should return valid input rounded to the decimal position provided as the second parameter.\n')

  validTestCases.forEach((test) => {
    console.log(`Expect round(${test[0]}, ${test[1]}) to return ${test[2]}.`)

    if (round(test[0], test[1]) === test[2]) {
      console.log('Passed.')
    } else {
      console.error('Failed.')
    }
  })
}

module.exports = testRound
