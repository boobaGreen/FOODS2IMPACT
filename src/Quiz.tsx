import { useState } from "react";
import QuizQuestion from "./QuizQuestion";
import { quiz } from "./quiz/level1/quiz";
import useDecryptedAnswers from "./lib/hooks/useDecryptedAnswers";
import ScorePopup from "./ScorePopup";
import App from "./App";
import { GameStatus } from "./lib/types/types";

type TQuizProps = {
  setUser: React.Dispatch<React.SetStateAction<UserType>>;
  setGameStatus: React.Dispatch<React.SetStateAction<GameStatus>>; // Usa GameStatus per definire il tipo
};
type UserType = {
  name: string;
  points: number;
  level: number;
};

export const Quiz: React.FC<TQuizProps> = ({ setUser, setGameStatus }) => {
  const solutions = useDecryptedAnswers();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [points, setPoints] = useState(0);
  const [scoreKey, setScoreKey] = useState(Date.now()); // Aggiungi un nuovo stato per la chiave del punteggio

  const handleConfirm = (selectedAnswer: string) => {
    if (selectedAnswer === solutions[currentQuestion]) {
      setUser((prevUser) => {
        const newPoints = prevUser.points + 1;
        const newLevel = newPoints >= 6 ? prevUser.level + 1 : prevUser.level;
        return { ...prevUser, points: newPoints, level: newLevel };
      });
      setPoints(1);
    } else {
      setPoints(-1);
    }
    setScoreKey(Date.now());
    setCurrentQuestion(currentQuestion + 1);
  };

  if (currentQuestion >= quiz.length) {
    setGameStatus(GameStatus.EndGame);
    return <App />;
  }
  const { question, answers } = quiz[currentQuestion];

  return (
    <main className="flex flex-col h-full">
      <QuizQuestion
        question={question}
        answers={answers}
        questionNumber={currentQuestion + 1}
        totalQuestions={quiz.length}
        onConfirm={handleConfirm}
      />
      <ScorePopup
        key={scoreKey}
        points={points}
        color={points > 0 ? "green" : "red"}
      />
    </main>
  );
};
