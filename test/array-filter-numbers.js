
const arrFilterNumbers = require('../array-filter-numbers')

function testRound() {
  const testCases = [
    [
      [1, 2, 3, 4, 'five'],
      [1, 2, 3, 4]
    ],
    [
      [-1, 99.99999, NaN],
      [-1, 99.99999]
    ],
    [
      [{"one": 1}, 2, 3, 4],
      [2, 3, 4]
    ]
  ]

  console.log('\narrFilterNumbers() should return a new array with only numbers when given an array with mixed types.')

  testCases.forEach((test) => {
    console.log(`\nExpect arrFilterNumbers(${test[0]}) to equal ${test[1]}.`)

    arrFiltered = arrFilterNumbers(test[0])
    arrCompare = test[1]

    for (x = 0; x < arrFiltered.length; x++) {
      arrFiltered[x] === arrCompare[x]
        ? console.log(`Pass for index ${x}: ${arrFiltered[x]} === ${arrCompare[x]}`)
        : console.error(`Fail for index ${x}: ${arrFiltered[x]} !== ${arrCompare[x]}`)
    }
  })
}

module.exports = testArrFilterNumbers
