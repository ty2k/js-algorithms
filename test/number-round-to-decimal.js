
const roundToDecimal = require('../number-round-to-decimal')

function testRoundToDecimal() {
  const invalidTestCases = [
    ['ninety-nine', 1],
    [12345.12345, NaN],
    [NaN, 0],
    [NaN, NaN]
  ]
  const validTestCases = [
    [12345.12345, 0, '12345'],
    [12345.12345, 1, '12345.1'],
    [12345.12345, 2, '12345.12'],
    [12345.12345, 3, '12345.123'],
    [12345.12345, 4, '12345.1235'],
    [12345.12345, 5, '12345.12345'],
  ]

  console.log('\nroundToDecimal() should return NaN when the first or second parameter is invalid.\n')

  invalidTestCases.forEach((test) => {
    console.log(`Expect roundToDecimal(${test[0]}, ${test[1]}) to return NaN.`)

    if (isNaN(roundToDecimal(test[0], test[1]))) {
      console.log('Passed.')
    } else {
      console.error('Failed.')
    }
  })

  console.log('\nroundToDecimal() should return a string representing the number provided as the first parameter rounded to the decimal position provided as the second parameter.\n')

  validTestCases.forEach((test) => {
    console.log(`Expect roundToDecimal(${test[0]}, ${test[1]}) to return ${test[2]}.`)

    if (roundToDecimal(test[0], test[1]) === test[2]) {
      console.log('Passed.')
    } else {
      console.error('Failed.')
    }
  })
}

module.exports = testRoundToDecimal
