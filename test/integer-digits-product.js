
const digitsProduct = require('../integer-digits-product')

function testDigitsProduct() {
  const testCases = [
    [12, 26],
    [19, -1],
    [450, 2559],
    [0, 10],
    [13, -1],
    [1, 1],
    [243, 399],
    [576, 889],
    [360, 589]
  ]

  console.log('\ndigitsProduct() should return the smaller possible integer whose digits produce the input product when multiplied together (or -1 if not possible).\n')

  testCases.forEach((test) => {
    console.log(`Expect digitsProduct(${test[0]}) to return ${test[1]}.`)

    if (digitsProduct(test[0]) === test[1]) {
      console.log('Passed.')
    } else {
      console.error('Failed.')
    }
  })
}

module.exports = testDigitsProduct
