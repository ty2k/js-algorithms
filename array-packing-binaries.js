
// From CodeFights Arcade Core 18:

const leftpad = require('./string-leftpad')

// Given an array of up to four non-negative integers, concatenates them into a 
// number by formed by their 8 bit segments, and returns the numerical value
function arrayPacking(a) {
  const arr = a.map(x => leftpad(x.toString(2), 8, 0)).reverse().join('')
  
  return parseInt(arr, 2)
}

module.exports = arrayPacking
