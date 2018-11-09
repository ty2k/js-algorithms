
// Given an array of mixed types, return a new array with only numbers
function arrFilterNumbers(arr) {
  const filtered = []

  arr.forEach((x) => {
    if (typeof x === 'number') {
      filtered.push(x)
    }
  })

  return filtered
}

module.exports = arrFilterNumbers
