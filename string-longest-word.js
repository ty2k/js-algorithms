
// Given a string, returns the (first) longest word (sequence of a-z characters)
function longestWord(text) {
  const words = text.match(/[A-Za-z]+/g)
  let longest = words[0]

  words.forEach((word) => {
    if (word.length > longest.length) {
      longest = word
    }
  })

  return longest
}

module.exports = longestWord
