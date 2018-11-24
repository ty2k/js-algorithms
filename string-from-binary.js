
// Given a binary input string, returns plain ASCII text string
function messageFromBinaryCode(code) {
  return code.match(/.{1,8}/g)
    .map(x => String.fromCharCode(parseInt(x, 2)))
    .join('')
}

module.exports = messageFromBinaryCode
