
const minutesToDigitSum = require('../integer-minutes-to-digit-sum')

function testMinutesToDigitSum() {
  const testCases = [
    [240, 4],
    [808, 14],
    [1439, 19],
    [0, 0],
    [23, 5],
    [8, 8]
  ]

  console.log('\nminutesToDigitSum(n) should return the sum of a 24 hour clock\'s digits representing the minutes passed since midnight (n).\n')

  testCases.forEach((test) => {
    console.log(`Expect minutesToDigitSum(${test[0]}) to return ${test[1]}.`)

    if (minutesToDigitSum(test[0]) === test[1]) {
      console.log('Passed.')
    } else {
      console.error('Failed.')
    }
  })
}

module.exports = testMinutesToDigitSum
