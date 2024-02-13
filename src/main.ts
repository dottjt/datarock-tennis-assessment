import { matchScore } from "./utils/matchScore"
import { newMatch } from "./utils/newMatch"
import { pointWonBy } from "./utils/pointWonBy"

// play random match
const players = ['peter', 'john']
const match = newMatch(players[0], players[1])
const pointWonByPlayer = pointWonBy(match)
const checkMatchScore = matchScore(match)

Array.from(Array(100).keys()).forEach(() => {
  pointWonByPlayer(players[Math.round(Math.random())])
  checkMatchScore()
})
