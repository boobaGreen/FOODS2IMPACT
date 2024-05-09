export enum GameStatus {
  Quiz = "quiz",
  EndGame = "endGame",
  Cover = "cover",
}

export type Tuser = {
  name: string;
  points: number;
  singleGamePoints: number;
  level: number;
};
