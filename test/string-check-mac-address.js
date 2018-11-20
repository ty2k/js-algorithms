
const isMAC48Address = require('../string-check-mac-address')

function testIsMAC48Address() {
  const testCases = [
    ['00-1B-63-84-45-E6', true],
    ['Z1-1B-63-84-45-E6', false],
    ['not a MAC-48 address', false],
    ['FF-FF-FF-FF-FF-FF', true],
    ['00-00-00-00-00-00', true],
    ['G0-00-00-00-00-00', false],
    ['02-03-04-05-06-07-', false],
    ['12-34-56-78-9A-BC', true],
    ['FF-FF-AB-CD-EA-BC', true],
    ['12-34-56-78-9A-BG', false]
  ]

  console.log('\nisMAC48Address() should return true when given a valid MAC 48 address string as input.\n')

  testCases.forEach((test) => {
    console.log(`Expect isMAC48Address(${test[0]}) to return ${test[1]}.`)

    if (isMAC48Address(test[0]) === test[1]) {
      console.log('Passed.')
    } else {
      console.error('Failed.')
    }
  })
}

module.exports = testIsMAC48Address
