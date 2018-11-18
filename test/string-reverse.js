
const reverseString = require('../string-reverse')

function testReverseString() {
  const testCases = [
    ['ab', 'ba'],
    ['abc', 'cba'],
    ['abcd', 'dcba']
  ]

  console.log('\nreverseString() should return the input string reversed.\n')

  testCases.forEach((test) => {
    console.log(`Expect reverseString(${test[0]}) to return ${test[1]}.`)

    if (reverseString(test[0]) === test[1]) {
      console.log('Passed.')
    } else {
      console.error('Failed.')
    }
  })
}

module.exports = testReverseString
