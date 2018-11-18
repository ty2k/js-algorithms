
function findEmailDomain(address) {
  const emailArr = address.split('@')
  return emailArr[emailArr.length - 1]
}

module.exports = findEmailDomain
