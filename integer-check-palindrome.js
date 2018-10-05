
// Return true if the input string is a palindrome
function checkPalindrome(inputStr) {
    const cleanStr = inputStr.toLowerCase().replace(/\s/g, '')
    const reverseStr = cleanStr.split('').reverse().join('')
    return cleanStr === reverseStr ? true : false
}

module.exports = checkPalindrome
