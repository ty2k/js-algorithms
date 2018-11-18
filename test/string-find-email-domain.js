
const findEmailDomain = require('../string-find-email-domain')

function testFindEmailDomain() {
  const testCases = [
    ['prettyandsimple@example.com', 'example.com'],
    ['<>[]:,;@\"!#$%&*+-/=?^_{}| ~.a\"@example.org', 'example.org'],
    ['someaddress@yandex.ru', 'yandex.ru'],
    ['\" \"@xample.org', 'xample.org']
  ]

  console.log('\nfindEmailDomain should return only the email portion of the domain following the @ symbol.\n')

  testCases.forEach((test) => {
    console.log(`Expect findEmailDomain(${test[0]}) to equal "${test[1]}".`)

    findEmailDomain(test[0]) === test[1]
      ? console.log(`Passed.`)
      : console.error(`Failed.`)
  })
}

module.exports = testFindEmailDomain
