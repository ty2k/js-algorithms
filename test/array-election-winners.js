
const electionWinners = require('../array-election-winners')

function testElectionWinners() {
  const testCases = [
    [[[2, 3, 5, 2], 3], 2],
    [[[1, 3, 3, 1, 1], 0], 0],
    [[[5, 1, 3, 4, 1], 0], 1],
    [[[1, 1, 1, 1], 1], 4],
    [[[1, 1, 1, 1], 0], 0],
    [[[3, 1, 1, 3, 1], 2], 2]
  ]

  console.log('\nelectionWinners() should return the number of potential winners of an election, given an array of candidate votes and the number of outstanding uncounted votes. A tie results in no winner.\n')

  testCases.forEach((test) => {
    console.log(`Expect electionWinners(${test[0][0]}, ${test[0][1]}) to return ${test[1]}.`)

    if (electionWinners(test[0][0], test[0][1]) === test[1]) {
      console.log('Passed.')
    } else {
      console.error('Failed.')
    }
  })
}

module.exports = testElectionWinners
