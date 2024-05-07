import { useState } from "react";
import QuizQuestion from "./QuizQuestion";
import { quiz } from "./quiz/level1/quiz";
import useDecryptedAnswers from "./lib/hooks/useDecryptedAnswers";
import ScorePopup from "./ScorePopup";

type TQuizProps = {
  setUser: React.Dispatch<React.SetStateAction<UserType>>;
};
type UserType = {
  name: string;
  points: number;
  level: number;
};

export const Quiz: React.FC<TQuizProps> = ({ setUser }) => {
  const solutions = useDecryptedAnswers();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [scoreKey, setScoreKey] = useState(Date.now()); // Aggiungi un nuovo stato per la chiave del punteggio

  const handleConfirm = (selectedAnswer: string) => {
    if (selectedAnswer === solutions[currentQuestion]) {
      setUser((prevUser) => ({ ...prevUser, points: prevUser.points + 1 }));
      setScore(1);
    } else {
      setScore(-1);
    }
    setScoreKey(Date.now()); // Aggiorna la chiave del punteggio ogni volta che il punteggio cambia
    setCurrentQuestion(currentQuestion + 1);
  };

  if (currentQuestion >= quiz.length) {
    return <div>Hai completato il quiz! </div>;
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
        score={score}
        color={score > 0 ? "green" : "red"}
      />{" "}
    </main>
  );
};
