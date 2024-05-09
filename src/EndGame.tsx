import { FC } from "react";
import { MdPointOfSale } from "react-icons/md";
import { GameStatus } from "./lib/types/types";
import { TwitterShareButton } from "react-share";

type EndQuizProps = {
  points: number;
  singleGamePoints: number;
  level: number;
  setGameStatus: React.Dispatch<React.SetStateAction<GameStatus>>;
};

console.log(MdPointOfSale);

const EndGame: FC<EndQuizProps> = ({
  points,
  singleGamePoints,
  level,
  setGameStatus,
}) => {
  function handleSetToQuiz() {
    setGameStatus(GameStatus.Quiz);
  }

  const shareUrl = "http://your-app-homepage.com"; // URL da condividere
  const title = `Ho superato con successo il livello ${
    level + 1
  } e ho ottenuto ${points} punti sulla conoscenza del foodimpact. Vai sul sito ${shareUrl} se vuoi provare anche tu!`; // Titolo del post

  return (
    <div>
      <p>Hai completato il quiz!</p>
      <p>Hai ottenuto un punteggio di {singleGamePoints} su 10.</p>
      {singleGamePoints >= 6 ? (
        <>
          <p>
            Congratulazioni! Hai superato il livello {level + 1} e sei avanzato
            al livello {level + 2}.
          </p>
          <section>
            <>
              <p>
                Il tuo punteggio totale è di {points} punti. Sei pronto per il
                prossimo livello?
              </p>
            </>
          </section>
          <TwitterShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button"
          >
            <button>Condividi su Twitter</button>
          </TwitterShareButton>
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
