
// From CodeFights Arcade Core 19:

// Given a and b where 0 <= a <= b, return a count of the 1's in the binary 
// representations of a through b inclusive
function rangeBitCount(a, b) {
  const arr = []
  let count = 0
  
  for (i = a; i < b + 1; i++) {
    arr.push(i.toString(2))
  }
  
  arr.forEach((chunk) => {
    const chunkArr = chunk.split('')
    
    chunkArr.forEach((digit) => {
      if (digit === '1') {
        count++
      }
    })
  })
  
  return count
}

module.exports = rangeBitCount
