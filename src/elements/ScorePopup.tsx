
import { useState, useEffect } from "react";
import { FaRegSmileBeam, FaGrinTongueSquint } from "react-icons/fa";


type ScorePopupProps = {
  forPopUp: boolean;
  color: string;
};


const ScorePopup: React.FC<ScorePopupProps> = ({ forPopUp, color }) => {

  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setOpacity(1);
    setTimeout(() => setOpacity(0), 2000); // Fade out the popup after 2 seconds
  }, []);

  return (
    <div
      style={{ opacity: opacity, color: color }} // Inline CSS to handle the opacity and color
      className="score-popup fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 m-6 text-2xl transition-opacity duration-1000 ease-in-out"
    >
      {forPopUp ? (
        <div className="flex justify-between flex-col content-center">
          <div className="flex justify-center">
            <FaRegSmileBeam />
          </div>
          <p>+1</p>
        </div>
      ) : (
        <div className="flex justify-between flex-col content-center">
          <div className="flex justify-center">
            <FaGrinTongueSquint />
          </div>
          <p></p>
        </div>
      )}
    </div>
  );
};

export default ScorePopup;
