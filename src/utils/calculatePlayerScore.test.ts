import { describe, expect, test } from '@jest/globals'
import { Points } from '../types'
import { calculateScoringPlayerScore, calculateOtherPlayerScore } from './calculatePlayerScore'

describe('calculateScoring', () => {
  describe('calculateScoringPlayerScore', () => {
    test('should calculate score from 0 to 15', () => {
      const score = calculateScoringPlayerScore(Points.Love, Points.Love)
      expect(score).toBe(Points.Fifteen)
    })
    test('should calculate score from 15 to 30', () => {
      const score = calculateScoringPlayerScore(Points.Fifteen, Points.Love)
      expect(score).toBe(Points.Thirty)
    })
    test('should calculate score from 30 to 40', () => {
      const score = calculateScoringPlayerScore(Points.Thirty, Points.Love)
      expect(score).toBe(Points.Fourty)
    })
    test('should calculate score from 40 to Advantage', () => {
      const score = calculateScoringPlayerScore(Points.Fourty, Points.Fourty)
      expect(score).toBe(Points.Advantage)
    })
    test('should calculate score from 40 to MatchWin', () => {
      const score = calculateScoringPlayerScore(Points.Fourty, Points.Love)
      expect(score).toBe(Points.MatchWin)
    })
    test('should calculate score from Advantage to MatchWin', () => {
      const score = calculateScoringPlayerScore(Points.Advantage, Points.Love)
      expect(score).toBe(Points.MatchWin)
    })
  })

  describe('calculateOtherPlayerScore', () => {
    test('should calculate score from Advantage to 40', () => {
      const score = calculateOtherPlayerScore(Points.Advantage, Points.Advantage)
      expect(score).toBe(Points.Fourty)
    })
  })
})
