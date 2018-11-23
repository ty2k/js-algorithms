
const differentSquares = require('../array-different-squares')

function testDifferentSquares() {
  const testCases = [
    [
      [[1,2,1],
       [2,2,2],
       [2,2,2],
       [1,2,3],
       [2,2,1]],
      6
    ],
    [
      [[9,9,9,9,9],
       [9,9,9,9,9],
       [9,9,9,9,9],
       [9,9,9,9,9],
       [9,9,9,9,9],
       [9,9,9,9,9]],
      1
    ],
    [
      [[3]],
      0
    ],
    [
      [[3,4,5,6,7,8,9]],
      0
    ],
    [
      [[3],
       [4],
       [5],
       [6],
       [7]],
      0
    ],
    [
      [[2,5,3,4,3,1,3,2],
       [4,5,4,1,2,4,1,3],
       [1,1,2,1,4,1,1,5],
       [1,3,4,2,3,4,2,4],
       [1,5,5,2,1,3,1,1],
       [1,2,3,3,5,1,2,4],
       [3,1,4,4,4,1,5,5],
       [5,1,3,3,1,5,3,5],
       [5,4,4,3,5,4,4,4]],
      54
    ],
    [
      [[1,1,1,1,1,1,2,2,2,3,3,3,9,9,9,2,3,9]],
      0
    ]
  ]

  console.log('\ndifferentSquares() should return a number representing the number of unique 2x2 squares that can be found in a matrix of digits represented by an array.\n')

  testCases.forEach((test) => {
    console.log(`Expect differentSquares(${test[0]}) to return ${test[1]}.`)

    if (differentSquares(test[0]) === test[1]) {
      console.log('Passed.')
    } else {
      console.error('Failed.')
    }
  })
}

module.exports = testDifferentSquares
