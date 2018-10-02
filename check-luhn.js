
// Returns true if given a valid Luhn integer
function checkLuhn(number) {
  const reverseInput = Number(number.toString().split('').reverse().join(''))
  const reverseInputArray = reverseInput.toString().split('')
  const prodSumArray = []

  let sum = 0

  for (let i = 0; i < reverseInputArray.length; i++) {
    if (i % 2 === 0) {
      prodSumArray.push(Number(reverseInputArray[i]))
    } else {
      if (reverseInputArray[i] <= 4) {
        prodSumArray.push(Number(reverseInputArray[i]) * 2)
      } else {
        const digits = (Number(reverseInputArray[i]) * 2).toString().split('')
        prodSumArray.push(Number(digits[0]) + Number(digits[1]))
      }
    }
  }

  for (let digit of prodSumArray) {
    sum += digit
  }

  return sum % 10 === 0 ? true : false
}

module.exports = checkLuhn
