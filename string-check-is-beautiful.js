
// From Codefights (Arcade 43):
// A string is said to be beautiful if b occurs in it no more times than a;
// c occurs in it no more times than b; etc.

// Given a string, returns true if it is 'beautiful'
function isBeautifulString(inputString) {
  const inputArr = inputString.split('')
  const alphabet = ('abcdefghijklmnopqrstuvwxyz').split('')
  const alphaCounts = []

  alphabet.forEach((letter) => {
    alphaCounts.push(0)
  })

  for (let i = 0; i < inputArr.length; i++) {
    if (alphabet.indexOf(inputArr[i]) !== -1) {
      alphaCounts[alphabet.indexOf(inputArr[i])] += 1
    }
  }

  for (let j = 1; j < alphaCounts.length; j++) {
    if (alphaCounts[j - 1] < alphaCounts[j]) {
      return false
    }
  }

  return true
}

module.exports = isBeautifulString
