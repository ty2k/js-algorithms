
const arrRemoveSmallest = require('../array-remove-smallest')

function testArrRemoveSmallest() {
  const testCases = [
    [
      [1, 2, 3, 4],
      [2, 3, 4]
    ],
    [
      [-1, -9999999],
      [-1]
    ],
    [
      [Infinity, -Infinity],
      [Infinity]
    ]
  ]

  console.log('\narrRemoveSmallest() should return a new array with the smallest number removed.')

  testCases.forEach((test) => {
    console.log(`\nExpect arrRemoveSmallest(${test[0]}) to equal ${test[1]}.`)

    arrSmaller = arrRemoveSmallest(test[0])
    arrCompare = test[1]

    for (x = 0; x < arrSmaller.length; x++) {
      arrSmaller[x] === arrCompare[x]
        ? console.log(`Pass for index ${x}: ${arrSmaller[x]} === ${arrCompare[x]}`)
        : console.error(`Fail for index ${x}: ${arrSmaller[x]} !== ${arrCompare[x]}`)
    }
  })
}

module.exports = testArrRemoveSmallest
