import { describe, expect, test } from '@jest/globals'
import { newMatch } from './newMatch'
import { Points } from '../types'

describe('newMatch', () => {
  test('create match with initialised player data', () => {
    const match = newMatch('peter', 'john')

    expect(match).toMatchObject({
      players: {
        peter: {
          currentGamePoints: Points.Love,
          gamesWon: 0,
          setsWon: 0,
        },
        john: {
          currentGamePoints: Points.Love,
          gamesWon: 0,
          setsWon: 0,
        }
      },
      gameScore: "0-0, 0-0",
    })
  })
})