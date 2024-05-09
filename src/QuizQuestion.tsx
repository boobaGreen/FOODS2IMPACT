import { useState } from "react";

type TQuizQuestionProps = {
  question: string;
  answers: string[];
  questionNumber: number;
  totalQuestions: number;
  onConfirm: (selectedAnswer: string) => void;
};

const QuizQuestion: React.FC<TQuizQuestionProps> = ({
  question,
  answers,
  questionNumber,
  totalQuestions,
  onConfirm,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleConfirmClick = () => {
    if (selectedAnswer) {
      onConfirm(selectedAnswer);
      setSelectedAnswer(null);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-2xl mb-4">
        Domanda {questionNumber}/{totalQuestions}
      </h2>
      <h3 className="text-xl mb-4">{question}</h3>
      {answers.map((answer, index) => (
        <button
          key={index}
          className={`mb-2 p-2 ${
            selectedAnswer === answer ? "bg-blue-500 text-white" : "bg-white"
          }`}
          onClick={() => handleAnswerClick(answer)}
        >
          {answer}
        </button>
      ))}
      <button
        className="mt-auto p-2 bg-green-500 text-white"
        onClick={handleConfirmClick}
        disabled={!selectedAnswer}
      >
        Conferma
      </button>
    </div>
  );
};

export default QuizQuestion;
