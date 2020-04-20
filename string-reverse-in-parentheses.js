
// From CodeFights Arcade Core 13:

// Given a string with possibly-nested parentheses pairs,
// return a string with the characters in parens reversed.
const reverseString = require('./string-reverse')

function reverseInParentheses(str) {
  if (str.includes('(')){
    return reverseInParentheses(reverseOnce(str))
  }

  return str
}

function reverseOnce(str) {
  var regexp = /\(([^()]*)\)/i
  var subStr = regexp.exec(str)[1]
  subStr = reverseString(subStr)
  return str.replace(regexp, subStr)
}

module.exports = reverseInParentheses
