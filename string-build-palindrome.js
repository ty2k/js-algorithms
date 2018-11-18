
const checkPalindrome = require('./string-check-palindrome')
const reverseString = require('./string-reverse.js')

// Returns the shortest palindrome possible building off the input string
function buildPalindrome(inputStr) {
  for (i = 0; i < inputStr.length; i++) {
    const subStr = inputStr.substring(0, i)
    const reverseSubStr = reverseString(subStr)
    const testString = inputStr + reverseSubStr

    if (checkPalindrome(testString)) {
      return testString
    }
  }
}

module.exports = buildPalindrome
