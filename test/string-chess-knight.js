
const chessKnight = require('../string-chess-knight')

function testChessKnight() {
  const testCases = [
    ['a1', 2],
    ['c2', 6],
    ['d4', 8],
    ['g6', 6]
  ]

  console.log('\nchessKnight() should return the number of possible moves a knight can make given its position on a chess board in chess notation.\n')

  testCases.forEach((test) => {
    console.log(`Expect chessKnight(${test[0]}) to return ${test[1]}.`)

    if (chessKnight(test[0]) === test[1]) {
      console.log('Passed.')
    } else {
      console.error('Failed.')
    }
  })
}

module.exports = testChessKnight
