
// Given a budget in cents s and a phone call cost schedule (min1, min2_10, 
// min11), returns a sum of the total whole minutes a phone call can be at max
function phoneCallMinutes(min1, min2_10, min11, s) {
  if (s < min1) {
    return 0
  }
  
  let call = 0
  
  if (s >= min1) {
    s -= min1
  }
  
  if (s <= min2_10 * 9) {
    return 1 + Math.floor(s / min2_10)
  }
  
  if (s > min2_10 * 9) {
    s -= min2_10 * 9
  }
  
  if (s < min11) {
    return 10
  }
  
  return 10 + Math.floor(s / min11)
}

module.exports = phoneCallMinutes
