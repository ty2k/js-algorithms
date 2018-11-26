
const binarySearchTreeDepth = require('../array-binary-search-tree-depth')

function testBinarySearchTreeDepth() {
  const testCases = [
    [[1, 2, 3], 3],
    [[100], 1],
    [[], 0],
    [[2, 1, 3], 2],
    [[34, 96, -73, 10, -98, 25], 4],
    [[-782, 320, 508, 219, -480, -285, -135, -313, 909, 95], 7],
    [[38, 48, 30, 50, -5], 3],
    [[86, 536, 310, 903, 215, -949, 481, -973, 716, -465], 4],
    [[-86, -45, 69, -4, -44, 80, 17, -10, -76, 95, 83, -1, 18, 37, -59, -54, -87, 33, -48, 6, 78, -52, 99], 8],
    [[0, -7, 11, -10, -3, 3, 15, -12, -9, -5, -1, 2, 7, 13, 16], 4],
    [[-84, -88, -11, -44, 50, -23, 53, -49, -50, 3, -71, -66, 83, -51, -69, -70, -21, -92, -81, -62, 100, -3, 15], 9],
    [[-25, 18, 34, 24, -2, 94, 66, -3, 25, 74, 40, -15, 56, -35, -61, -45, -23, -85, 3, 65, 100, 84, -42, -14, 5, 98, -16, -98, -32, -82, 64, 99, -97, -31, 91, 78, 36, 90, -4, 83, -30, -78], 9],
    [[-30, 64, -97, 50, -80, 90, 60, -32, -93, 29, 99, -99, 74, -11, 83, -42, -76, 63, -73, 75, -74, 59, -87, -45, 67, -2, -33, 23, 35, -47, 47, -12, 77, -84, -59, 53, -27, -41, -50, -26, -52, -88, 14, 89, 79, -92, 45, 7, 69, -78], 12],
    [[-5, 0], 2]
  ]

  console.log('\nbinarySearchTreeDepth() should take an array of integers, create a binary search tree out of them, and report the depth of the tree (levels of nodes).\n')

  testCases.forEach((test) => {
    console.log(`Expect binarySearchTreeDepth(${test[0]}) to return ${test[1]}.`)

    if (binarySearchTreeDepth(test[0]) === test[1]) {
      console.log('Passed.')
    } else {
      console.error('Failed.')
    }
  })
}

module.exports = testBinarySearchTreeDepth
