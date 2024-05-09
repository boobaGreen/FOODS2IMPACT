import { useState, useEffect } from "react";
import QuizQuestion from "./QuizQuestion";
import { quiz } from "./quiz/level1/quiz";
import useDecryptedAnswers from "./lib/hooks/useDecryptedAnswers";
import ScorePopup from "./ScorePopup";
import { GameStatus } from "./lib/types/types";
import { TUser } from "./lib/types/types";

type TQuizProps = {
  user: TUser;
  setUser: React.Dispatch<React.SetStateAction<TUser>>;
  setGameStatus: React.Dispatch<React.SetStateAction<GameStatus>>;
};

export const Quiz: React.FC<TQuizProps> = ({
  user,
  setUser,
  setGameStatus,
}) => {
  const solutions = useDecryptedAnswers();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [forPopUp, setforPopup] = useState<boolean>(false);
  const [scoreKey, setScoreKey] = useState(Date.now());

  const handleConfirm = (selectedAnswer: string) => {
    if (selectedAnswer === solutions[currentQuestion]) {
      setforPopup(true);
      setUser((prevUser: TUser) => {
        const newPoints = prevUser.singleGamePoints + 1;
        return { ...prevUser, singleGamePoints: newPoints };
      });
    } else {
      setforPopup(false);
      setUser((prevUser: TUser) => {
        const newPoints = prevUser.singleGamePoints - 1;
        return { ...prevUser, singleGamePoints: newPoints };
      });
    }
    setScoreKey(Date.now());
    setCurrentQuestion(currentQuestion + 1);
  };

  useEffect(() => {
    if (currentQuestion >= quiz.length) {
      if (user.singleGamePoints > 7) {
        setUser((prevUser: TUser) => {
          const newLevel = prevUser.level + 1;
          return { ...prevUser, level: newLevel };
        });
      }
      setGameStatus(GameStatus.EndGame);
    }
  }, [currentQuestion, user.singleGamePoints, setUser, setGameStatus]);

  let question, answers;
  if (currentQuestion < quiz.length) {
    ({ question, answers } = quiz[currentQuestion]);
  }

  return (
    <main className="flex flex-col h-full">
      {question && answers && (
        <QuizQuestion
          question={question}
          answers={answers}
          questionNumber={currentQuestion + 1}
          totalQuestions={quiz.length}
          onConfirm={handleConfirm}
        />
      )}
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
