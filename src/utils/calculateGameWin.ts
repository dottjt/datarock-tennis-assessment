import { Match, Points } from "../types"

export const calculateGameWin = (match: Match, scoringPlayerName: string, otherPlayerName: string) => {
  match.players[scoringPlayerName].gamesWon += 1
  Object.keys(match.players).forEach(player => {
    match.players[player].currentGamePoints = Points.Love
  })

  const scoringPlayerGamesTotal = match.players[scoringPlayerName].gamesWon
  const gamesWonDifference = match.players[scoringPlayerName].gamesWon - match.players[otherPlayerName].gamesWon

  if (scoringPlayerGamesTotal > 6 && gamesWonDifference >= 2) {
    match.players[scoringPlayerName].setsWon += 1
    Object.keys(match.players).forEach(player => {
      match.players[player].currentGamePoints = Points.Love
      match.players[player].gamesWon = 0
    })
  }
}
