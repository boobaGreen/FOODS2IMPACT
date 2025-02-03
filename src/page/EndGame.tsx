
import { FC } from "react";

import { GameStatus, TUser } from "../lib/types/types";

import Result from "../components/Result";


type EndQuizProps = {
  user: TUser;
  setGameStatus: React.Dispatch<React.SetStateAction<GameStatus>>;
  setUser: React.Dispatch<React.SetStateAction<TUser>>;
};

const EndGame: FC<EndQuizProps> = ({ user, setGameStatus, setUser }) => {

  function handleSetToQuiz() {
    setGameStatus(GameStatus.Quiz);
    setUser((user) => ({ ...user, singleGamePoints: 0 }));
  }


  return (
    <div
      className="text-white flex justify-center font-press-start text-base"
      data-testid="endgame-component"
    >

      <div>
        <Result user={user} handleSetToQuiz={handleSetToQuiz} />
      </div>
    </div>
  );
};

export default EndGame;
