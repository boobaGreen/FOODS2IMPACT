// Importing necessary libraries and components
import React, { useState, useEffect } from "react";
import useDecryptedAnswers from "../lib/hooks/useDecryptedAnswers";
import { GameStatus } from "../lib/types/types";
import { TUser } from "../lib/types/types";
import QuizQuestion from "../elements/QuizQuestion";
import ScorePopup from "../elements/ScorePopup";

// Type definition for the props of Quiz component
type TQuizProps = {
  user: TUser;
  setUser: React.Dispatch<React.SetStateAction<TUser>>;
  setGameStatus: React.Dispatch<React.SetStateAction<GameStatus>>;
};

// Quiz component
export const Quiz: React.FC<TQuizProps> = ({
  user,
  setUser,
  setGameStatus,
}) => {
  // State variables for the quiz
  const [quiz, setQuiz] = useState([]);
  const solutions = useDecryptedAnswers(user.level);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [forPopUp, setForPopup] = useState<boolean>(false);
  const [scoreKey, setScoreKey] = useState(Date.now());

  // Effect hook to load the quiz for the current level
  useEffect(() => {
    import(`../quiz/level${user.level}/quiz.ts`)
      .then((module) => {
        setQuiz(module.quiz);
        if (currentQuestion >= module.quiz.length) {
          if (user.singleGamePoints >= 6) {
            setUser((prevUser: TUser) => {
              let newLevel = prevUser.level + 1;
              console.log(newLevel);
              if (newLevel > 3) {
                newLevel = 1;
              }
              console.log("2", newLevel);
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

  // Function to handle the confirmation of an answer
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
        const newPoints = prevUser.singleGamePoints;
        return { ...prevUser, singleGamePoints: newPoints };
      });
    }
    setScoreKey(Date.now());
    setCurrentQuestion(currentQuestion + 1);
  };

  // Extracting the current question and answers
  let question, answers;
  if (currentQuestion < quiz.length) {
    ({ question, answers } = quiz[currentQuestion]);
  }

  // Rendering the Quiz component
  return (
    <main className="flex flex-col h-full  items-center mt-10">
      <div className="max-w-2xl">
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
      </div>
    </main>
  );
};
