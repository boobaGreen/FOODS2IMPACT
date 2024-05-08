import { FC } from "react";
import { MdPointOfSale } from "react-icons/md";
import { GameStatus } from "./lib/types/types";

type EndQuizProps = {
  points: number;
  level: number;
  setGameStatus: React.Dispatch<React.SetStateAction<GameStatus>>;
};

console.log(MdPointOfSale);

const EndGame: FC<EndQuizProps> = ({ points, level, setGameStatus }) => {
  function handleSetToQuiz() {
    setGameStatus(GameStatus.Quiz);
  }
  return (
    <div>
      <p>Hai completato il quiz!</p>
      <p>Hai ottenuto un punteggio di {points} su 10.</p>
      {points >= 6 ? (
        <>
          <p>
            Congratulazioni! Hai superato il livello {level - 1} e sei avanzato
            al livello {level}.
          </p>
          <button>Condividi sui social</button>
        </>
      ) : (
        <>
          <p>Non hai superato il quiz. Non ti scoraggiare, riprova!</p>
          <button onClick={handleSetToQuiz}>riprova</button>
        </>
      )}
    </div>
  );
};

export default EndGame;
