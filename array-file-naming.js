
// From CodeFights Arcade 57:

// Given an array of desired filenames in the order they were created, returns
// an array of given names using numbered parentheses for duplicate names
function fileNaming(names) {
  const givenNames = []

  names.forEach((name) => {
    if (givenNames.indexOf(name) === -1) {
      givenNames.push(name)
    } else {
      if (givenNames.indexOf(`${name}(1)`) === -1) {
        givenNames.push(`${name}(1)`)
      } else {
        let version = 2

        while (givenNames.indexOf(`${name}(${version})`) !== -1) {
          version += 1
        }

        givenNames.push(`${name}(${version})`)
      }
    }
  })

  return givenNames
}

module.exports = fileNaming
