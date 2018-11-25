
// From CodeFights Arcade 59:

// Given an integer, returns an array of size n x n with numbers that count
// upward in a spiral pattern starting from the top left and spiraling inward
// in a clockwise pattern
function spiralNumbers(n) {
  const arr = Array(n)
  let x = 0, 
    y = n,
    total = n * n--,
    dx = 1, 
    dy = 0,
    i = 1, 
    j = 0
 
  while (y) arr[--y] = []

  while (i < total + 1) {
    arr[y][x] = i++

    x += dx
    y += dy

    if (++j == n) {
      if (dy < 0) {
        x++
        y++
        n -= 2
      }

      j = dx
      dx = -dy
      dy = j
      j = 0
    }
  }

  return arr
}

module.exports = spiralNumbers
