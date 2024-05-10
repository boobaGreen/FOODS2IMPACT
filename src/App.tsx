import { SetStateAction, useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";

import { GameStatus, TUser } from "./lib/types/types";

import Layout from "./Layout";
import { Quiz } from "./Quiz";
import UserInput from "./UserInput";
import EndGame from "./EndGame";
import Modal from "./Modal";

const App = () => {
  const [gameStatus, setGameStatus] = useState(GameStatus.Quiz);
  const [user, setUser, removeUser] = useLocalStorage<TUser>(
    "user",
    {
      name: "",
      singleGamePoints: 0,
      level: 0,
    } || null
  );
  const [inputValue, setInputValue] = useState("");
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const handleInputChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    setUser({ name: inputValue, singleGamePoints: 0, level: 1 });
    setGameStatus(GameStatus.Quiz);
  };

  const handleRemoveUser = () => {
    setShowConfirmationModal(true);
  };

  const confirmRemoveUser = () => {
    removeUser();
    setGameStatus(GameStatus.Cover);
    setShowConfirmationModal(false);
  };

  const cancelRemoveUser = () => {
    setShowConfirmationModal(false);
  };
  useEffect(() => {
    setUser((prevUser) => ({ ...prevUser, singleGamePoints: 0 }));
  }, [setUser]);
  return (
    <Layout user={user} handleRemoveUser={handleRemoveUser}>
      {user?.name === "" ? (
        <UserInput
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
        />
      ) : (
        <>
          {gameStatus === "quiz" ? (
            <Quiz user={user} setUser={setUser} setGameStatus={setGameStatus} />
          ) : null}
          {gameStatus === "endGame" ? (
            <EndGame
              user={user}
              setGameStatus={setGameStatus}
              setUser={setUser}
            />
          ) : null}

          {showConfirmationModal ? (
            <Modal
              confirmRemoveUser={confirmRemoveUser}
              cancelRemoveUser={cancelRemoveUser}
            />
          ) : null}
        </>
      )}
    </Layout>
  );
};

export default App;
