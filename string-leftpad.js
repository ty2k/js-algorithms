
// Returns the input string padded on the left up to the length of the
// second argument, using the character specified as the third argument
function leftpad(string, length, char) {
  const inputStr = String(string)
  const arr = inputStr.split('')
  const pad = []

  if (arr.length >= length) {
    return string
  }

  for (i = 0; i < length - arr.length; i++) {
    pad.push(char)
  }

  const paddedArr = pad.concat(arr)
  return paddedArr.join('')
}

module.exports = leftpad
