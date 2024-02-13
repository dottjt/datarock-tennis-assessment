export enum Points {
  Zero,
  Fifteen,
  Thirty,
  FourtyFive,
}

export type Player = {
  currentGamePoints: Points,
  gamesWon: number,
}

export type Match = {
  [key: string]: Player,
}
