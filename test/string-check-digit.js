
const isDigit = require('../string-check-digit')

function testIsDigit() {
  const testCases = [
    ['0', true],
    ['-', false],
    ['O', false],
    ['1', true],
    ['2', true],
    ['!', false],
    ['@', false],
    ['+', false],
    ['6', true],
    ['(', false],
    [')', false]
  ]

  console.log('\nisDigit() should return true when given a valid digit as a string or number.\n')

  testCases.forEach((test) => {
    console.log(`Expect isDigit(${test[0]}) to return ${test[1]}.`)

    if (isDigit(test[0]) === test[1]) {
      console.log('Passed.')
    } else {
      console.error('Failed.')
    }
  })
}

module.exports = testIsDigit
