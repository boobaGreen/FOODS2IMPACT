// Importing necessary libraries and components
import { FC } from "react";

import { GameStatus, TUser } from "./lib/types/types";

import NoSuccess from "./NoSuccess";
import Success from "./Success";

// Type definition for the props of EndGame component
type EndQuizProps = {
  user: TUser;
  setGameStatus: React.Dispatch<React.SetStateAction<GameStatus>>;
  setUser: React.Dispatch<React.SetStateAction<TUser>>;
};

// EndGame component
const EndGame: FC<EndQuizProps> = ({ user, setGameStatus, setUser }) => {
  // Handler for setting the game status back to Quiz and resetting the single game points
  function handleSetToQuiz() {
    setGameStatus(GameStatus.Quiz);
    setUser((user) => ({ ...user, singleGamePoints: 0 }));
  }

  // Rendering the Success or NoSuccess component based on the user's single game points
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
