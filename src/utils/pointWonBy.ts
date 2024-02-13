import { Match, Points } from "../types"
import { calculateGameWin } from "./calculateGameWin"
import { calculateOtherPlayerScore, calculateScoringPlayerScore } from "./calculatePlayerScore"
import { displayGameScore } from "./displayGameScore"

const scoreWinningPlayer = (match: Match, scoringPlayerName: string, otherPlayerName: string) => {
  const scoringPlayerScore = calculateScoringPlayerScore(
    match.players[scoringPlayerName].currentGamePoints,
    match.players[otherPlayerName].currentGamePoints,
  )
  match.players[scoringPlayerName].currentGamePoints = scoringPlayerScore
}

const scoreOtherPlayer = (match: Match, scoringPlayerName: string, otherPlayerName: string) => {
  const otherPlayerScore = calculateOtherPlayerScore(
    match.players[otherPlayerName].currentGamePoints,
    match.players[scoringPlayerName].currentGamePoints,
  )
  match.players[otherPlayerName].currentGamePoints = otherPlayerScore
}

const updateGameScore = (match: Match, scoringPlayerName: string, otherPlayerName: string) => {
  match.gameScore = displayGameScore(
    match,
    scoringPlayerName,
    otherPlayerName,
  )
}

export const pointWonBy = (match: Match) =>
  (scoringPlayerName: string) => {
    const otherPlayerName = Object.keys(match.players).find(player => player !== scoringPlayerName) as string
    scoreWinningPlayer(match, scoringPlayerName, otherPlayerName)

    if (match.players[scoringPlayerName].currentGamePoints === Points.MatchWin) {
      calculateGameWin(match, scoringPlayerName, otherPlayerName)
      updateGameScore(match, scoringPlayerName, otherPlayerName)
    } else {
      scoreOtherPlayer(match, scoringPlayerName, otherPlayerName)
      updateGameScore(match, scoringPlayerName, otherPlayerName)
    }
  }
