import { describe, expect, test } from '@jest/globals'
import { newMatch } from './newMatch'
import { matchScore } from './matchScore'

describe('matchScore', () => {
  test('displayMatchScore', () => {
    const logSpy = jest.spyOn(global.console, 'log')
    const match = newMatch('peter', 'john')
    const checkMatchScore = matchScore(match)
    checkMatchScore()

    expect(logSpy).toBeCalledWith("0-0, 0-0")
  })
})