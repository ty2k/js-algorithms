
const checkPalindrome = require('../string-check-palindrome')

function testCheckPalindrome() {
  const testCases = [
    ['bed', false],
    ['racecar', true],
    ['race car', true],
    ['', true]
  ]

  console.log('checkPalindrome() should return true or false depending on validity.\n')

  testCases.forEach((test) => {
    console.log(`Expect checkPalindrome(${test[0]}) to return ${test[1]}.`)

    if (checkPalindrome(test[0]) === test[1]) {
      console.log('Passed.')
    } else {
      console.error('Failed.')
    }
  })
}

module.exports = testCheckPalindrome
