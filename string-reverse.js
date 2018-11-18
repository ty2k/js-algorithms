
// Returns the input string reversed
function reverseString(str) {
  const reverseArr = str.split('').reverse()
  const reverseStr = reverseArr.join('')

  return reverseStr
}

module.exports = reverseString
