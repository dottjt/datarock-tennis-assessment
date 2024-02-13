import { Points } from "../types"

export const calculateScoringPlayerScore = (scoringPlayerPoints: Points, otherPlayerPoints: Points): Points => {
  if (scoringPlayerPoints === Points.Love) return Points.Fifteen
  if (scoringPlayerPoints === Points.Fifteen) return Points.Thirty
  if (scoringPlayerPoints === Points.Thirty) return Points.Fourty
  if (scoringPlayerPoints === Points.Fourty && otherPlayerPoints === Points.Fourty) return Points.Advantage
  return Points.MatchWin
}

export const calculateOtherPlayerScore = (otherPlayerPoints: Points, scoringPlayerPoints: Points): Points => {
  if (scoringPlayerPoints === Points.Advantage) return Points.Fourty
  return otherPlayerPoints
}
