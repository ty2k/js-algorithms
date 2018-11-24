
const fileNaming = require('../array-file-naming')

function testFileNaming() {
  const testCases = [
    [
      ["doc",
       "doc",
       "image",
       "doc(1)",
       "doc"],
      ["doc",
       "doc(1)",
       "image",
       "doc(1)(1)",
       "doc(2)"]
    ],
    [
      ["a(1)",
       "a(6)",
       "a",
       "a",
       "a",
       "a",
       "a",
       "a",
       "a",
       "a",
       "a",
       "a"],
      ["a(1)",
       "a(6)",
       "a",
       "a(2)",
       "a(3)",
       "a(4)",
       "a(5)",
       "a(7)",
       "a(8)",
       "a(9)",
       "a(10)",
       "a(11)"]
    ],
    [
      ["dd",
       "dd(1)",
       "dd(2)",
       "dd",
       "dd(1)",
       "dd(1)(2)",
       "dd(1)(1)",
       "dd",
       "dd(1)"],
      ["dd",
       "dd(1)",
       "dd(2)",
       "dd(3)",
       "dd(1)(1)",
       "dd(1)(2)",
       "dd(1)(1)(1)",
       "dd(4)",
       "dd(1)(3)"]
    ]
  ]

  console.log('\nfileNaming() should return a new array with duplicate filenames appended with a version (#), when given a list of desired filenames in the order they were saved.')

  testCases.forEach((test) => {
    console.log(`\nExpect fileNaming(${test[0]}) to equal ${test[1]}.`)

    arrNamed = fileNaming(test[0])
    arrCompare = test[1]

    for (x = 0; x < arrNamed.length; x++) {
      arrNamed[x] === arrCompare[x]
        ? console.log(`Pass for index ${x}: ${arrNamed[x]} === ${arrCompare[x]}`)
        : console.error(`Fail for index ${x}: ${arrNamed[x]} !== ${arrCompare[x]}`)
    }
  })
}

module.exports = testFileNaming
