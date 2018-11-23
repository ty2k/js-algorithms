
const validTime = require('../string-valid-time')

function testValidTime() {
  const testCases = [
    ['13:58', true],
    ['25:51', false],
    ['02:76', false],
    ['24:00', false],
    ['02:61', false],
    ['27:00', false],
    ['19:66', false],
    ['12:31', true],
    ['25:73', false],
    ['09:56', true],
  ]

  console.log('\nvalidTime() should return true when given a valid 24 hour time string in the format HH:MM.\n')

  testCases.forEach((test) => {
    console.log(`Expect validTime(${test[0]}) to return ${test[1]}.`)

    if (validTime(test[0]) === test[1]) {
      console.log('Passed.')
    } else {
      console.error('Failed.')
    }
  })
}

module.exports = testValidTime
