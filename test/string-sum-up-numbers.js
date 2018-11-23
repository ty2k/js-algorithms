
const sumUpNumbers = require('../string-sum-up-numbers')

function testSumUpNumbers() {
  const testCases = [
    ['2 apples, 12 oranges', 14],
    ['123450', 123450],
    ['Your payment method is invalid', 0],
    ['no digits at all', 0],
    ['there are some (12) digits 5566 in this 770 string 239', 6587]
  ]

  console.log('\nsumUpNumbers() should return the sum of any numbers found in the input string, or zero.\n')

  testCases.forEach((test) => {
    console.log(`Expect sumUpNumbers(${test[0]}) to return ${test[1]}.`)

    if (sumUpNumbers(test[0]) === test[1]) {
      console.log('Passed.')
    } else {
      console.error('Failed.')
    }
  })
}

module.exports = testSumUpNumbers
