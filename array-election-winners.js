
// From Codefights (Arcade 46)

// Given an array of vote counts and a number of remaining uncounted votes,
// returns a count of potential election winners; tie results in no winner
function electionsWinners(votes, k) {
  const potentials = []
  let highCount = 0

  votes.forEach((vote) => {
    if (highCount < vote) {
      highCount = vote
    }
  })

  if (k === 0) {
    const highs = []

    votes.forEach((vote) => {
      if (vote === highCount) {
        highs.push(vote)
      }
    })

    return highs.length > 1 ? 0 : 1
  } else {
    votes.forEach((vote) => {
      if (vote + k > highCount) {
        potentials.push(vote)
      }
    })
  }

  return potentials.length
}

module.exports = electionsWinners
