
// From Codefights (Arcade 49):
// Given a string, return its encoding using these rules:
// 1. First, the string is divided into the least possible number of disjoint
// substrings consisting of identical characters, for example, "aabbbc" is
// divided into ["aa", "bbb", "c"].
// 2. Next, each substring with length greater than one is replaced with a
// concatenation of its length and the repeating character for example,
// substring "bbb" is replaced by "3b".
// 3. Finally, all the new strings are concatenated together in the same order
// and a new string is returned.


// Given a string, return its encod
function lineEncoding(str) {
  function replacer(match, char) {
    return match.length + char
  }

  const regex = /([a-z])\1+/gi
  const encoded = str.replace(regex, replacer)

  return encoded
}

module.exports = lineEncoding
