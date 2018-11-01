
const checkLuhn = require('../integer-check-luhn.js')

function testCheckLuhn() {
  const invalidOneDigit = 9
  const invalidTwoDigit = 10
  const validTwoDigit = 42
  const invalidCC = 4000000000000000
  const validCC = 4242424242424242
  const notNum = NaN

  const resultOne = checkLuhn(invalidOneDigit)
  const resultTwo = checkLuhn(invalidTwoDigit)
  const resultThree = checkLuhn(validTwoDigit)
  const resultFour = checkLuhn(invalidCC)
  const resultFive = checkLuhn(validCC)
  const resultSix = checkLuhn(notNum)

  console.log('checkLuhn() should return true or false depending on validity.\n')

  console.log(`Expect checkLuhn(${invalidOneDigit}) to return false.`)
  if (resultOne === false) {
    console.log('Passed.')
  } else {
    console.error('Failed.')
  }

  console.log(`Expect checkLuhn(${invalidTwoDigit}) to return false.`)
  if (resultTwo === false) {
    console.log('Passed.')
  } else {
    console.error('Failed.')
  }

  console.log(`Expect checkLuhn(${validTwoDigit}) to return true.`)
  if (resultThree === true) {
    console.log('Passed.')
  } else {
    console.error('Failed.')
  }

  console.log(`Expect checkLuhn(${invalidCC}) to return false.`)
  if (resultFour === false) {
    console.log('Passed.')
  } else {
    console.error('Failed.')
  }

  console.log(`Expect checkLuhn(${validCC}) to return true.`)
  if (resultFive === true) {
    console.log('Passed.')
  } else {
    console.error('Failed.')
  }

  console.log(`Expect checkLuhn(${notNum}) to return false.`)
  if (resultSix === false) {
    console.log('Passed.')
  } else {
    console.error('Failed.')
  }
}

module.exports = testCheckLuhn
