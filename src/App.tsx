// Importing necessary libraries and components
import { SetStateAction, useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";

import { GameStatus, TUser } from "./lib/types/types";

import Layout from "./Layout";
import { Quiz } from "./Quiz";
import UserInput from "./UserInput";
import EndGame from "./EndGame";
import Modal from "./Modal";

// Main App component
const App = () => {
  // State variables for game status, user data, input value and modal visibility
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

  // Handler for input change event
  const handleInputChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setInputValue(event.target.value);
  };

  // Handler for form submission
  const handleSubmit = () => {
    setUser({ name: inputValue, singleGamePoints: 0, level: 1 });
    setGameStatus(GameStatus.Quiz);
  };

  // Handler for removing user
  const handleRemoveUser = () => {
    setShowConfirmationModal(true);
  };

  // Handler for confirming user removal
  const confirmRemoveUser = () => {
    removeUser();
    setGameStatus(GameStatus.Cover);
    setShowConfirmationModal(false);
  };

  // Handler for cancelling user removal
  const cancelRemoveUser = () => {
    setShowConfirmationModal(false);
  };

  // Resetting single game points on component mount
  useEffect(() => {
    setUser((prevUser) => ({ ...prevUser, singleGamePoints: 0 }));
  }, [setUser]);

  // Rendering the main layout with conditional rendering based on game status and user data
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
