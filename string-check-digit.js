
function isDigit(symbol) {
  const char = symbol.toString()

  return char.match(/^[0-9]{1}$/)
    ? true
    : false
}

module.exports = isDigit
