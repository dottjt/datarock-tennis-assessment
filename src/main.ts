import { Match, Points } from './types';

export const newMatch = (player1Name: string, player2Name: string): Match => ({
  [player1Name]: {
    currentGamePoints: Points.Zero,
    gamesWon: 0,
  },
  [player2Name]: {
    currentGamePoints: Points.Zero,
    gamesWon: 0,
  },
})
