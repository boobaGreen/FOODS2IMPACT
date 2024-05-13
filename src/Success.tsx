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
    <div className="flex flex-col gap-2 content-center justify-center w-full">
      <p className="flex justify-center">Congratulazioni!</p>
      <p className="flex justify-center">Livello superato</p>
      <p className="flex justify-center">Accedi al livello {user.level}</p>
      <section className="mt-6">
        <div className="flex flex-col w-full">
          <button onClick={handleSetToQuiz} className="text-[#38ded9]">
            INZIA
          </button>
        </div>
      </section>
      <div className="flex justify-center flex-col w-full gap-6 mt-6">
        <div className="flex justify-center">
          <p>Condividi il tuo successo su Twitter</p>
        </div>
        <div className="flex justify-center text-[#38ded9]">
          <TwitterShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button"
          >
            <FiTwitter size={32} />
          </TwitterShareButton>
        </div>
      </div>
    </div>
  );
}
