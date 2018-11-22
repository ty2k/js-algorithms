
// From Codefights (Arcade 50)

// Given a knight's position in chess notation, returns number of possible moves
function chessKnight(cell) {
  const cellArr = cell.split('')
  const x = cellArr[0].charCodeAt(0) - 96
  const y = parseInt(cellArr[1])
  const vectors = [
    [1, 2], // one right, two up
    [2, 1], // two right, one up
    [2, -1], // two right, one down
    [1, -2], // one right, two down
    [-1, -2], // one left, two down
    [-2, -1], // two left, one down
    [-2, 1], // two left, one up
    [-1, 2] // one left, two up
  ]
  const potentialMoves = []

  vectors.forEach((vector) => {
    if (
      x + vector[0] > 0 &&
      x + vector[0] < 9 &&
      y + vector[1] > 0 &&
      y + vector[1] < 9
    ) {
      potentialMoves.push(vector)
    }
  })

  return potentialMoves.length
}

module.exports = chessKnight
