
const phoneCallMinutes = require('../integer-phone-call-minutes')

function testPhoneCallMinutes() {
  const testCases = [
    [[3, 1, 2, 20], 14],
    [[2, 2, 1, 2], 1],
    [[10, 1, 2, 22], 11],
    [[2, 2, 1, 24], 14],
    [[1, 2, 1, 6], 3]
  ]

  console.log('\nphoneCallMinutes(min1, min2_10, min11, s) should return an integer representing the maximum number of whole minutes you can afford with a budget of (s) cents given the phone call prices for the first minute (min1), the next nine minutes (min2_10), and every minute thereafter (min11).\n')

  testCases.forEach((test) => {
    console.log(`Expect phoneCallMinutes(${test[0][0]}, ${test[0][1]}, ${test[0][2]}, ${test[0][3]}) to return ${test[1]}.`)

    if (phoneCallMinutes(test[0][0], test[0][1], test[0][2], test[0][3]) === test[1]) {
      console.log('Passed.')
    } else {
      console.error('Failed.')
    }
  })
}

module.exports = testPhoneCallMinutes
