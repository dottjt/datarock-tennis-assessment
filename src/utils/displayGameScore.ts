import { Match, Points } from "../types"

const calculateGamePlayerDisplayScore = (match: Match, scoringPlayerName: string, otherPlayerName: string): string => {
  const scoringPlayerPoints = match.players[scoringPlayerName].currentGamePoints
  const otherPlayerPoints = match.players[otherPlayerName].currentGamePoints

  if (scoringPlayerPoints === Points.Fourty && otherPlayerPoints === Points.Fourty) {
    return "Deuce"
  }
  if (scoringPlayerPoints === Points.Advantage) {
    return `Advantage ${scoringPlayerName}`
  }

  const normalPlayerScores = Object.keys(match.players).map(playerName => match.players[playerName].currentGamePoints).join('-')
  return normalPlayerScores
}

export const displayGameScore = (match: Match, scoringPlayerName: string, otherPlayerName: string) => {
  const playerGamesWon = Object.keys(match.players).map(playerName => match.players[playerName].gamesWon).join('-')
  const playerScores = calculateGamePlayerDisplayScore(match, scoringPlayerName, otherPlayerName)

  return `${playerGamesWon}, ${playerScores}`
}
