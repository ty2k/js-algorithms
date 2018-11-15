
const isBeautifulString = require('../string-check-is-beautiful')

function testIsBeautifulString() {
  const testCases = [
    ['bbbaacdafe', true],
    ['aabbb', false],
    ['bbc', false],
    ['bbbaa', false],
    ['abcdefghijklmnopqrstuvwxyzz', false],
    ['abcdefghijklmnopqrstuvwxyz', true],
    ['abcdefghijklmnopqrstuvwxyzqwertuiopasdfghjklxcvbnm', true],
    ['fyudhrygiuhdfeis', false],
    ['zaa', false],
    ['zyy', false]
  ]

  console.log('\nisBeautifulString() should return true if a string is "beautiful" (each later letter in the alphabet appears as frequently or more than each earlier letter).\n')

  testCases.forEach((test) => {
    console.log(`Expect isBeautifulString(${test[0]}) to equal "${test[1]}".`)

    isBeautifulString(test[0]) === test[1]
      ? console.log(`Passed.`)
      : console.error(`Failed.`)
  })
}

module.exports = testIsBeautifulString
