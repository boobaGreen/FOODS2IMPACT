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
    <div className="flex flex-col h-full mt-4">
      <h3 className="text-base text-[#202020]  text-pretty mb-10 ">
        {question}
      </h3>
      <div className="relative pt-1">
        <div className="overflow-hidden h-4 mb-6 text-xs flex rounded bg-[#3e6c6a]">
          <div
            style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#38ded9]"
          ></div>
        </div>
      </div>
      {answers.map((answer, index) => (
        <button
          key={index}
          className={`text-pretty mb-2 p-1 text-md ${
            selectedAnswer === answer
              ? "bg-[#78e6e2] text-[#454444]] border-[#454444] border-solid border-2"
              : "bg-[#31807d] text-[white] border-[#454444] border-solid border-2"
          }`}
          onClick={() => handleAnswerClick(answer)}
        >
          {answer}
        </button>
      ))}
      {selectedAnswer && (
        <button
          className={`mt-2 mb-4 p-2 text-[#454444] border-[#454444] border-solid border-2 ${
            !selectedAnswer ? "bg-[#yourDisabledColor]" : "bg-[#78e6e2]"
          }`}
          onClick={handleConfirmClick}
          disabled={!selectedAnswer}
        >
          Conferma
        </button>
      )}
    </div>
  );
};

export default QuizQuestion;
