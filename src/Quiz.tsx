import React, { useState, useEffect } from "react";
import QuizQuestion from "./QuizQuestion";
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
  const [quiz, setQuiz] = useState([]);
  const solutions = useDecryptedAnswers(user.level);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [forPopUp, setForPopup] = useState<boolean>(false);
  const [scoreKey, setScoreKey] = useState(Date.now());

  useEffect(() => {
    import(`./quiz/level${user.level}/quiz.ts`)
      .then((module) => {
        setQuiz(module.quiz);
        if (currentQuestion >= module.quiz.length) {
          if (user.singleGamePoints > 7) {
            setUser((prevUser: TUser) => {
              const newLevel = prevUser.level + 1;
              return { ...prevUser, level: newLevel };
            });
          }
          setGameStatus(GameStatus.EndGame);
        }
      })
      .catch((error) =>
        console.error(`Failed to load quiz for level ${user.level}`, error)
      );
  }, [
    user.level,
    currentQuestion,
    user.singleGamePoints,
    setUser,
    setGameStatus,
  ]);

  const handleConfirm = (selectedAnswer: string) => {
    if (selectedAnswer === solutions[currentQuestion]) {
      setForPopup(true);
      setUser((prevUser: TUser) => {
        const newPoints = prevUser.singleGamePoints + 1;
        return { ...prevUser, singleGamePoints: newPoints };
      });
    } else {
      setForPopup(false);
      setUser((prevUser: TUser) => {
        const newPoints = prevUser.singleGamePoints - 1;
        return { ...prevUser, singleGamePoints: newPoints };
      });
    }
    setScoreKey(Date.now());
    setCurrentQuestion(currentQuestion + 1);
  };

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
          color={forPopUp ? "white" : "#454444"}
        />
      ) : null}
    </main>
  );
};
