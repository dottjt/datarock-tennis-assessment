export enum Points {
  Love = "0",
  Fifteen = "15",
  Thirty = "30",
  Fourty = "45",
  Advantage = "Advantage",
  MatchWin = "MatchWin",
}

export type Player = {
  currentGamePoints: Points,
  gamesWon: number,
  setsWon: number,
}

export type Match = {
  players: {
    [key: string]: Player,
  },
  gameScore: string,
}
