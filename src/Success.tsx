import { TwitterShareButton } from "react-share";
import { FiTwitter } from "react-icons/fi";
import { TUser } from "./lib/types/types";
type TSucces = {
  user: TUser;
  handleSetToQuiz: () => void;
};
export default function Success({ user, handleSetToQuiz }: TSucces) {
  const shareUrl = "http://your-app-homepage.com"; // URL to share
  const title = `Ho superato con successo il livello ${user.level} sulla conoscenza del foodimpact. Vai sul sito ${shareUrl} se vuoi provare anche tu!`; // Post title
  return (
    <div>
      <p>
        Congratulazioni! Hai superato il livello {user.level + 1} e sei avanzato
        al livello {user.level + 2}.
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
        <FiTwitter size={32} />
      </TwitterShareButton>
    </div>
  );
}
