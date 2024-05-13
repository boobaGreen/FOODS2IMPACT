import { FC } from "react";

import { GameStatus, TUser } from "./lib/types/types";

import NoSuccess from "./NoSuccess";
import Success from "./Success";

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
    <div className="text-white flex justify-center font-press-start text-base">
      {user.singleGamePoints >= 6 ? (
        <Success user={user} handleSetToQuiz={handleSetToQuiz} />
      ) : (
        <NoSuccess handleSetToQuiz={handleSetToQuiz} />
      )}
    </div>
  );
};

export default EndGame;
