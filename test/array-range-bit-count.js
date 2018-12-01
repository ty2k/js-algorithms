
const rangeBitCount = require('../array-range-bit-count')

function testRangeBitCount() {
  const testCases = [
    [[2, 7], 11],
    [[0, 1], 1],
    [[1, 10], 17],
    [[8, 9], 3],
    [[9, 10], 4]
  ]

  console.log('\nrangeBitCount() should return the number of potential winners of an election, given an array of candidate votes and the number of outstanding uncounted votes. A tie results in no winner.\n')

  testCases.forEach((test) => {
    console.log(`Expect rangeBitCount(${test[0][0]}, ${test[0][1]}) to return ${test[1]}.`)

    if (rangeBitCount(test[0][0], test[0][1]) === test[1]) {
      console.log('Passed.')
    } else {
      console.error('Failed.')
    }
  })
}

module.exports = testRangeBitCount
