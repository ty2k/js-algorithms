
// Given a two-dimensional 9 x 9 array, returns true if a valid Sudoku solution
function sudoku(grid) {
  let isValid = true

  grid.forEach((row) => {
    if (
      !(row.includes(1)) ||
      !(row.includes(2)) ||
      !(row.includes(3)) ||
      !(row.includes(4)) ||
      !(row.includes(5)) ||
      !(row.includes(6)) ||
      !(row.includes(7)) ||
      !(row.includes(8)) ||
      !(row.includes(9)) ||
      row.length !== 9
    ) {
      isValid = false
    }
  })

  const transGrid = grid[0].map((col, i) => grid.map(row => row[i]))

  transGrid.forEach((col) => {
    if (
      !(col.includes(1)) ||
      !(col.includes(2)) ||
      !(col.includes(3)) ||
      !(col.includes(4)) ||
      !(col.includes(5)) ||
      !(col.includes(6)) ||
      !(col.includes(7)) ||
      !(col.includes(8)) ||
      !(col.includes(9)) ||
      col.length !== 9
    ) {
      isValid = false
    }
  })

  function checkSubGrid(x1, x2, y1, y2) {
    const sub = []

    for (i = x1; i < x2; i++) {
      for (j = y1; j < y2; j++) {
        sub.push(grid[i][j])
      }
    }

    if (
      !(sub.includes(1)) ||
      !(sub.includes(2)) ||
      !(sub.includes(3)) ||
      !(sub.includes(4)) ||
      !(sub.includes(5)) ||
      !(sub.includes(6)) ||
      !(sub.includes(7)) ||
      !(sub.includes(8)) ||
      !(sub.includes(9)) ||
      sub.length !== 9
    ) {
      isValid = false
    }
  }

  checkSubGrid(0, 3, 0, 3)
  checkSubGrid(3, 6, 0, 3)
  checkSubGrid(6, 9, 0, 3)
  checkSubGrid(0, 3, 3, 6)
  checkSubGrid(3, 6, 3, 6)
  checkSubGrid(6, 9, 3, 6)
  checkSubGrid(0, 3, 6, 9)
  checkSubGrid(3, 6, 6, 9)
  checkSubGrid(6, 9, 6, 9)

  return isValid
}

module.exports = sudoku
