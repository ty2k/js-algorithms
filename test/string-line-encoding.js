
const lineEncoding = require('../string-line-encoding')

function testLineEncoding() {
  const testCases = [
    ['aabbbc', '2a3bc'],
    ['abbcabb', 'a2bca2b'],
    ['abcd', 'abcd'],
    ['zzzz', '4z'],
    ['wwwwwwwawwwwwww', '7wa7w'],
    ['ccccccccccccccc', '15c'],
    ['qwertyuioplkjhg', 'qwertyuioplkjhg'],
    ['ssiiggkooo', '2s2i2gk3o'],
    ['adfaaa', 'adf3a'],
    ['bbjaadlkjdl', '2bj2adlkjdl']
  ]

  console.log('\nlineEncoding() should return a string encoded with digits representing repeating character patterns.\n')

  testCases.forEach((test) => {
    console.log(`Expect lineEncoding(${test[0]}) to return ${test[1]}.`)

    if (lineEncoding(test[0]) === test[1]) {
      console.log('Passed.')
    } else {
      console.error('Failed.')
    }
  })
}

module.exports = testLineEncoding
