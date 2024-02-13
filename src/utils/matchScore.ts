import { Match } from "../types"

export const matchScore = (match: Match) => () => console.log(match.gameScore)
