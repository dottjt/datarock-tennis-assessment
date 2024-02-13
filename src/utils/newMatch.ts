import { Match, Points } from '../types'
import { INITIAL_MATCH_SCORE } from '../constants'

export const newMatch = (player1Name: string, player2Name: string): Match => ({
  players: {
    [player1Name]: {
      currentGamePoints: Points.Love,
      gamesWon: 0,
      setsWon: 0,
    },
    [player2Name]: {
      currentGamePoints: Points.Love,
      gamesWon: 0,
      setsWon: 0,
    },
  },
  gameScore: INITIAL_MATCH_SCORE,
})
