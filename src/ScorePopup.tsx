import { useState, useEffect } from "react";
import { FaRegSmileBeam, FaGrinTongueSquint } from "react-icons/fa";

type ScorePopupProps = {
  points: number;
  color: string;
};

const ScorePopup: React.FC<ScorePopupProps> = ({ points, color }) => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (points !== 0) {
      setOpacity(1);
      setTimeout(() => setOpacity(0), 2000); // Fai svanire il popup dopo 2 secondi
    }
  }, [points]);

  return (
    <div
      style={{ opacity: opacity, color: color }} // Utilizza il CSS in linea per gestire l'opacità e il colore
      className="score-popup fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 m-6 text-2xl transition-opacity duration-1000 ease-in-out"
    >
      {points > 0 ? <FaRegSmileBeam /> : <FaGrinTongueSquint />}{" "}
      {points > 0 ? "+1" : "-1"}
    </div>
  );
};

export default ScorePopup;
