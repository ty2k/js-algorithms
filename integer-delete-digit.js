
// Given an integer, returns the largest integer that
// can be made by deleting a single digit from it
function deleteDigit(n) {
  const arr = n.toString().split('')
  const numbers = []
  let highest = 0

  for (i = 0; i < arr.length; i++) {
    let strArr = arr.slice()
    strArr.splice(i, 1).map(x => parseInt(x))
    let num = (parseInt(strArr.join('')))

    if (num > highest) {
      highest = num
    }
  }

  return highest
}

module.exports = deleteDigit
