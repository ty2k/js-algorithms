
const leftpad = require('../string-leftpad')

function testLeftpad() {
  const testCases = [
    ['123', 10, '0', '0000000123'],
    ['space', 10, ' ', '     space'],
    ['root', 5, 'g', 'groot'],
    ['read', 5, 'b', 'bread']
  ]

  console.log('\nleftpad() should return the string passed as the first argument padded on the left up to the length specified by the second argument with the character specified as the third argument.')

  testCases.forEach((test) => {
    console.log(`\nExpect leftpad(${test[0]}, ${test[1]}, ${test[2]}) to equal "${test[3]}".`)

    leftpad(test[0], test[1], test[2]) === test[3]
      ? console.log(`Passed.`)
      : console.error(`Failed.`)
  })
}

module.exports = testLeftpad
