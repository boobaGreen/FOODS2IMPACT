export enum GameStatus {
  Quiz = "quiz",
  EndGame = "endGame",
  Cover = "cover",
}

export type TUser = {
  name: string;

  singleGamePoints: number;
  level: number;
};
