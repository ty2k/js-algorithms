
// Given an integer representing minutes since midnight, returns a sum of the 
// equivalent digits on a 24 hour clock
function minutesToDigitSum(n) {
  const hours = (Math.floor(n / 60)).toString().split('')
  const minutes = (n % 60).toString().split('')
  const digits = hours.concat(minutes)
  
  let sum = 0
  
  digits.forEach((digit) => {
    sum += parseInt(digit)
  })
  
  return sum
}

module.exports = minutesToDigitSum
