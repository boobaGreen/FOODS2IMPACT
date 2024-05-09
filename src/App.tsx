import { SetStateAction, useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";

import { GameStatus, TUser } from "./lib/types/types";

import Layout from "./Layout";
import { Quiz } from "./Quiz";
import UserInput from "./UserInput";
import EndGame from "./EndGame";

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
    <Layout
      user={user}
      handleRemoveUser={handleRemoveUser}
      gameStatus={gameStatus}
    >
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
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg">
                <p>Sei sicuro di voler rimuovere l'utente?</p>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
                  onClick={confirmRemoveUser}
                >
                  Conferma
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded mt-4"
                  onClick={cancelRemoveUser}
                >
                  Annulla
                </button>
              </div>
            </div>
          ) : null}
        </>
      )}
    </Layout>
  );
};

export default App;
