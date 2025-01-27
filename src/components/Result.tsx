// Importing necessary libraries and icons
import { TwitterShareButton } from "react-share";
import { FiTwitter } from "react-icons/fi";
import { TUser } from "../lib/types/types";

// Type definition for the props of Success component
type TResult = {
  user: TUser;
  handleSetToQuiz: () => void;
};

// Success component
export default function Success({ user, handleSetToQuiz }: TResult) {
  // URL to share
  const shareUrl = "https://foods-2-impact.vercel.app/";

  // Post title

  const skill =
    user.singleGamePoints < 4
      ? "base"
      : user.singleGamePoints == 10
      ? "master"
      : "inetrmedio";
  const titleSuccess = `Ho superato con successo il livello ${user.level} su Food(s2I)mpact con rank ${skill}. Vai sul sito ${shareUrl} se vuoi provare anche tu!`;
  const titleNoSuccess = `Non ho superato il livello ${user.level} su Food(s2I)mpact. Vai sul sito ${shareUrl} se vuoi provare anche tu!`;
  const title = user.singleGamePoints > 4 ? titleSuccess : titleNoSuccess;
  // Rendering the Success component
  const phrase1Success = "Congratulazioni!";
  const phrase2Success = "Livello superato";
  const phrase1NoSuccess = "Non hai superato il livello...";
  const phrase2NoSuccess =
    "... ma abbiamo scoperto qualcosa insieme sul nostro 🤍 pianeta";
  const phrase1 = user.singleGamePoints > 4 ? phrase1Success : phrase1NoSuccess;
  const phrase2 = user.singleGamePoints > 4 ? phrase2Success : phrase2NoSuccess;

  return (
    <div className="flex flex-col gap-2 content-center justify-center w-full">
      <p className="flex justify-center">{phrase1}</p>
      <p className="flex justify-center">{phrase2}</p>
      <p className="flex justify-center">
        Skill :&nbsp; <span className="text-customTurquese">{skill}</span>
      </p>
      <p className="flex justify-center">
        Livello&nbsp;
        <span className="text-customTurquese">{user.level}</span>
      </p>

      <section className="mt-6">
        <div className="flex flex-col w-full">
          <button onClick={handleSetToQuiz} className="text-customTurquese">
            INZIA
          </button>
        </div>
      </section>
      <div className="flex justify-center flex-col w-full gap-6 mt-6">
        <div className="flex justify-center">
          <p>Condividi su Twitter</p>
        </div>
        <div className="flex justify-center text-customTurquese animate-bounce">
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
