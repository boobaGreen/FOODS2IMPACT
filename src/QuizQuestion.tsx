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
      <h3 className="text-xl text-[#202020] mb-4 text-pretty my-6">
        {question}
      </h3>
      <div className="relative pt-1">
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-[#3e6c6a]">
          <div
            style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#38ded9]"
          ></div>
        </div>
      </div>
      {answers.map((answer, index) => (
        <button
          key={index}
          className={`text-pretty mb-2 p-2 ${
            selectedAnswer === answer
              ? "bg-[#78e6e2] text-[#454444]] border-[#454444] border-solid border-2"
              : "bg-[#31807d] text-[white] border-[#454444] border-solid border-2"
          }`}
          onClick={() => handleAnswerClick(answer)}
        >
          {answer}
        </button>
      ))}
      <button
        className="mt-6 p-2 bg-[#78e6e2] text-[#454444] border-[#454444] border-solid border-2"
        onClick={handleConfirmClick}
        disabled={!selectedAnswer}
      >
        Conferma
      </button>
    </div>
  );
};

export default QuizQuestion;
