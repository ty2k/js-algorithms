
// From Codefights Arcade 55:

// Given an array representing a rectangular matrix, calculate the number of
// unique 2x2 squares inside of it
function differentSquares(matrix) {
  const squares = []

  for (i = 0; i < matrix.length - 1; i++) {
    for (j = 0; j < matrix[i].length - 1; j++) {
      let square = (
        matrix[i][j] * 1000 +
        matrix[i][j + 1] * 100 +
        matrix[i + 1][j] * 10 +
        matrix[i + 1][j + 1]
      )

      if (squares.indexOf(square) === -1) {
        squares.push(square)
      }
    }
  }

  return squares.length
}

module.exports = differentSquares
