import { describe, expect, test } from '@jest/globals';
import { newMatch } from './main'
import { Points } from './types';

describe('newMatch', () => {
  test('create match with initialised player data', () => {
    const match = newMatch('peter', 'john');

    expect(match).toMatchObject({
      peter: {
        currentGamePoints: Points.Zero,
        gamesWon: 0,
      },
      john: {
        currentGamePoints: Points.Zero,
        gamesWon: 0,
      }
    })
  });
});