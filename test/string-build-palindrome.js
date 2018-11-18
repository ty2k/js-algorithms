
const buildPalindrome = require('../string-build-palindrome')

function testBuildPalindrome() {
  const testCases = [
    ['abcdc', 'abcdcba'],
    ['ababab', 'abababa'],
    ['abba', 'abba'],
    ['abaa', 'abaaba']
  ]

  console.log('\nbuildPalindrome() should return the smallest possible palindrome built off the input string.\n')

  testCases.forEach((test) => {
    console.log(`Expect buildPalindrome(${test[0]}) to return ${test[1]}.`)

    if (buildPalindrome(test[0]) === test[1]) {
      console.log('Passed.')
    } else {
      console.error('Failed.')
    }
  })
}

module.exports = testBuildPalindrome
