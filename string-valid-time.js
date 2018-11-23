
// Given a 24 hour time string in the form HH:MM, returns true if valid
function validTime(time) {
  const timeArr = time.split(":")
  const hour = parseInt(timeArr[0], 10)
  const min = parseInt(timeArr[1], 10)

  return hour >= 0 && hour <= 23 && min >= 0 && min <= 59
    ? true
    : false
}

module.exports = validTime
