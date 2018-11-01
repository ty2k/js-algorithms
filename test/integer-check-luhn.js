
const checkLuhn = require('../integer-check-luhn')

function testCheckLuhn() {
  const testCases = [
    [9, false],
    [10, false],
    [42, true],
    [4000000000000000, false],
    [4242424242424242, true],
    [NaN, false]
  ]

  console.log('checkLuhn() should return true or false depending on validity.\n')

  testCases.forEach((test) => {
    console.log(`Expect checkLuhn(${test[0]}) to return ${test[1]}.`)

    if (checkLuhn(test[0]) === test[1]) {
      console.log('Passed.')
    } else {
      console.error('Failed.')
    }
  })
}

module.exports = testCheckLuhn
