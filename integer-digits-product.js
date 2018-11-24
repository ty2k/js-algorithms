
// From CodeFights Arcade 56:

// Given an integer product, returns the smallest positive integer whose digits
// can be multiplied together to equal the product; returns -1 if not possible
function digitsProduct(product) {
  if (product === 0) { return 10 }
  if (product === 1) { return 1 }

  let result = 0
  let power = 1

  for (divisor = 9; divisor > 1; divisor--) {
    while (product % divisor === 0) {
      result += divisor * power
      product /= divisor
      power *= 10
    }
  }

  return product > 1
    ? -1
    : result
}

module.exports = digitsProduct
