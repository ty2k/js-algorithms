
const reverseInParentheses = require('../string-reverse-in-parentheses')

function testReverseInParentheses() {
  const testCases = [
    ['(bar)', 'rab'],
    ['foo(bar)baz', 'foorabbaz'],
    ['foo(bar)baz(blim)', 'foorabbazmilb'],
    ['foo(bar(baz))blim', 'foobazrabblim'],
    ['', ''],
    ['()', ''],
    ['(abc)d(efg)', 'cbadgfe']
  ]

  console.log('\nreverseInParentheses() should return the input string reversed.\n')

  testCases.forEach((test) => {
    console.log(`Expect reverseInParentheses(${test[0]}) to return ${test[1]}.`)

    if (reverseInParentheses(test[0]) === test[1]) {
      console.log('Passed.')
    } else {
      console.error('Failed.')
    }
  })
}

module.exports = testReverseInParentheses
