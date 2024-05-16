// Importing necessary libraries and icons
import { useState, useEffect } from "react";
import { FaRegSmileBeam, FaGrinTongueSquint } from "react-icons/fa";

// Type definition for the props of ScorePopup component
type ScorePopupProps = {
  forPopUp: boolean;
  color: string;
};

// ScorePopup component
const ScorePopup: React.FC<ScorePopupProps> = ({ forPopUp, color }) => {
  // State variable for the opacity of the popup
  const [opacity, setOpacity] = useState(0);

  // useEffect hook to handle the fading of the popup
  useEffect(() => {
    setOpacity(1);
    setTimeout(() => setOpacity(0), 2000); // Fade out the popup after 2 seconds
  }, []);

  // Rendering the ScorePopup component
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

// Exporting the ScorePopup component
export default ScorePopup;
