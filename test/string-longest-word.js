
const longestWord = require('../string-longest-word')

function testLongestWord() {
  const testCases = [
    ['Ready, steady, go!', 'steady'],
    ['Ready[[[, steady, go!', 'steady'],
    ['ABCd', 'ABCd'],
    ['To be or not to be', 'not'],
    ['You are the best!!!!!!!!!!!! CodeFighter ever!', 'CodeFighter']
  ]

  console.log('\nlongestWord() should return the longest word (a-z sequence) when given a string of text.\n')

  testCases.forEach((test) => {
    console.log(`Expect longestWord(${test[0]}) to return ${test[1]}.`)

    if (longestWord(test[0]) === test[1]) {
      console.log('Passed.')
    } else {
      console.error('Failed.')
    }
  })
}

module.exports = testLongestWord
