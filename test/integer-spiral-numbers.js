
const spiralNumbers = require('../integer-spiral-numbers')

function testSpiralNumbers() {
  const testCases = [
    [
      3,
      [[1,2,3], 
       [8,9,4], 
       [7,6,5]]
    ],
    [
      5,
      [[1,2,3,4,5], 
       [16,17,18,19,6], 
       [15,24,25,20,7], 
       [14,23,22,21,8], 
       [13,12,11,10,9]]
    ],
    [
      6,
      [[1,2,3,4,5,6], 
       [20,21,22,23,24,7], 
       [19,32,33,34,25,8], 
       [18,31,36,35,26,9], 
       [17,30,29,28,27,10], 
       [16,15,14,13,12,11]]
    ],
    [
      7,
      [[1,2,3,4,5,6,7], 
       [24,25,26,27,28,29,8], 
       [23,40,41,42,43,30,9], 
       [22,39,48,49,44,31,10], 
       [21,38,47,46,45,32,11], 
       [20,37,36,35,34,33,12], 
       [19,18,17,16,15,14,13]]
    ],
    [
      10,
      [[1,2,3,4,5,6,7,8,9,10], 
       [36,37,38,39,40,41,42,43,44,11], 
       [35,64,65,66,67,68,69,70,45,12], 
       [34,63,84,85,86,87,88,71,46,13], 
       [33,62,83,96,97,98,89,72,47,14], 
       [32,61,82,95,100,99,90,73,48,15], 
       [31,60,81,94,93,92,91,74,49,16], 
       [30,59,80,79,78,77,76,75,50,17], 
       [29,58,57,56,55,54,53,52,51,18], 
       [28,27,26,25,24,23,22,21,20,19]]
    ]
  ]

  console.log('\nspiralNumbers() should return a two-dimensional array representing a spiral matrix of values ascending up to the input integer n * n.\n')

  testCases.forEach((test) => {
    console.log(`\nExpect spiralNumbers(${test[0]}) to equal ${test[1]}.`)

    arrSpiral = spiralNumbers(test[0])
    arrCompare = test[1]

    for (x = 0; x < arrSpiral.length; x++) {
      for (y = 0; y < arrSpiral[x].length; y++) {
        arrSpiral[x][y] === arrCompare[x][y]
          ? console.log(`Pass for index [${x}][${y}]: ${arrSpiral[x][y]} === ${arrCompare[x][y]}`)
          : console.error(`Fail for index [${x}][${y}]: ${arrSpiral[x][y]} !== ${arrCompare[x][y]}`)
      }
    }
  })
}

module.exports = testSpiralNumbers
