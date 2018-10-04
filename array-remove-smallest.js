
// Given an array of integers, return the array with the smallest value removed
function arrRemoveSmallest(numbers) {
  let low = {
    'number': Infinity,
    'index': 0
  }

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < low['number']) {
      low['number'] = numbers[i]
      low['index'] = i
    }
  }

  return numbers.slice(0, low['index']).concat(numbers.slice(low['index'] +1))
}

module.exports = arrRemoveSmallest
