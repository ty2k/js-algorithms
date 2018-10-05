
// Given an array of numbers and strings, return a new array with only numbers
function arrFilterStrings(arr) {
  const filtered = []

  arr.forEach((x) => {
    if (typeof x === 'number') {
      filtered.push(x)
    }
  })

  return filtered
}

module.exports = arrFilterStrings
