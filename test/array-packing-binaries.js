
const arrayPacking = require('../array-packing-binaries')

function testArrayPacking() {
  const testCases = [
    [[24, 85, 0], 21784],
    [[23, 45, 39], 2567447],
    [[1, 2, 4, 8], 134480385],
    [[5], 5],
    [[187, 99, 42, 43], 724198331]
  ]

  console.log('\narrayPacking() should return a single number representing the numbers in the input array converted to 8-bit binary segments and concatenated before being parsed.\n')

  testCases.forEach((test) => {
    console.log(`Expect arrayPacking(${test[0]}) to return ${test[1]}.`)

    if (arrayPacking(test[0]) === test[1]) {
      console.log('Passed.')
    } else {
      console.error('Failed.')
    }
  })
}

module.exports = testArrayPacking
