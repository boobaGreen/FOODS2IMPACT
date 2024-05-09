import { FC } from "react";

import { GameStatus, TUser } from "./lib/types/types";
import { TwitterShareButton } from "react-share";

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

  const shareUrl = "http://your-app-homepage.com"; // URL to share
  const title = `Ho superato con successo il livello ${user.level} sulla conoscenza del foodimpact. Vai sul sito ${shareUrl} se vuoi provare anche tu!`; // Post title

  return (
    <div>
      {/* <p>Hai ottenuto un punteggio di {user.singleGamePoints} su 10.</p> */}
      {user.singleGamePoints >= 6 ? (
        <>
          <p>
            Congratulazioni! Hai superato il livello {user.level + 1} e sei
            avanzato al livello {user.level + 2}.
          </p>
          <section>
            <>
              <p>Sei pronto per il prossimo livello?</p>
              <button onClick={handleSetToQuiz}>Inizia</button>
            </>
          </section>
          <TwitterShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button"
          >
            Condividi su Twitter
          </TwitterShareButton>
        </>
      ) : (
        <>
          <p>Non hai superato il quiz. Non ti scoraggiare, riprova!</p>
          <button onClick={handleSetToQuiz}>Riprova</button>
        </>
      )}
    </div>
  );
};

export default EndGame;
