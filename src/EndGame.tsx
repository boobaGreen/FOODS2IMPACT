import { FC } from "react";

import { GameStatus, TUser } from "./lib/types/types";
import { TwitterShareButton } from "react-share";

type EndQuizProps = {
  user: TUser;
  setGameStatus: React.Dispatch<React.SetStateAction<GameStatus>>;
};

const EndGame: FC<EndQuizProps> = ({ user, setGameStatus }) => {
  function handleSetToQuiz() {
    setGameStatus(GameStatus.Quiz);
  }

  const shareUrl = "http://your-app-homepage.com"; // URL da condividere
  const title = `Ho superato con successo il livello ${
    user.level - 1
  } sulla conoscenza del foodimpact. Vai sul sito ${shareUrl} se vuoi provare anche tu!`; // Titolo del post

  return (
    <div>
      <p>Hai completato il quiz!</p>
      <p>Hai ottenuto un punteggio di {user.singleGamePoints} su 10.</p>
      {user.singleGamePoints >= 6 ? (
        <>
          <p>
            Congratulazioni! Hai superato il livello {user.level + 1} e sei
            avanzato al livello {user.level + 2}.
          </p>
          <section>
            <>
              <p>Sei pronto per il prossimo livello?</p>
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
