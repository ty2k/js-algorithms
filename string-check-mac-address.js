
// Given a string, returns true if it's a valid MAC48 address
function isMAC48Address(inputString) {
  const hexArr = inputString.split('-')
  const testArr = []

  if (hexArr.length !== 6) {
    return false
  }

  hexArr.forEach((chunk) => {
    chunk.match(/^[0-9A-Fa-f]{2}$/)
      ? testArr.push(true)
      : testArr.push(false)
  })

  return testArr.indexOf(false) === -1
}

module.exports = isMAC48Address
