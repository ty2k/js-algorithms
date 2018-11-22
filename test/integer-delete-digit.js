
const deleteDigit = require('../integer-delete-digit')

function testDeleteDigit() {
  const testCases = [
    [152, 52],
    [1001, 101],
    [10, 1],
    [222219, 22229]
  ]

  console.log('\ndeleteDigit() should return the largest possible integer that can be made by deleting a digit from the input integer.\n')

  testCases.forEach((test) => {
    console.log(`Expect deleteDigit(${test[0]}) to return ${test[1]}.`)

    if (deleteDigit(test[0]) === test[1]) {
      console.log('Passed.')
    } else {
      console.error('Failed.')
    }
  })
}

module.exports = testDeleteDigit
