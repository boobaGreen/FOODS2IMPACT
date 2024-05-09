import { useState } from "react";
import QuizQuestion from "./QuizQuestion";
import { quiz } from "./quiz/level1/quiz";
import useDecryptedAnswers from "./lib/hooks/useDecryptedAnswers";
import ScorePopup from "./ScorePopup";
import App from "./App";
import { GameStatus } from "./lib/types/types";

type TQuizProps = {
  setUser: React.Dispatch<React.SetStateAction<UserType>>;
  setGameStatus: React.Dispatch<React.SetStateAction<GameStatus>>;
};

type UserType = {
  name: string;
  points: number;
  singleGamePoints: number;
  level: number;
};

export const Quiz: React.FC<TQuizProps> = ({ setUser, setGameStatus }) => {
  const solutions = useDecryptedAnswers();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [forPopUp, setforPopup] = useState<boolean>(false);
  const [scoreKey, setScoreKey] = useState(Date.now());

  const handleConfirm = (selectedAnswer: string) => {
    if (selectedAnswer === solutions[currentQuestion]) {
      setforPopup(true);
      setUser((prevUser) => {
        const newPoints = prevUser.singleGamePoints + 1;
        return { ...prevUser, singleGamePoints: newPoints };
      });
    } else {
      setforPopup(false);
      setUser((prevUser) => {
        const newPoints = prevUser.singleGamePoints - 1;
        return { ...prevUser, singleGamePoints: newPoints };
      });
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
      {currentQuestion > 0 ? (
        <ScorePopup
          key={scoreKey}
          forPopUp={forPopUp}
          color={forPopUp ? "green" : "red"}
        />
      ) : null}
    </main>
  );
};
