
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
    <div className="flex flex-col h-full mt-2">
      <h3 className="text-xs text-customDark text-pretty mb-2 font-press-start ">
        {question}
      </h3>
      <div className="relative pt-1">
        <div className="overflow-hidden h-4 mb-6 text-xs flex rounded bg-customTurqueseMedium">
          <div
            style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-customTurquese"
          ></div>
        </div>
      </div>
      {answers.map((answer, index) => (
        <button
          key={index}
          className={`text-pretty mb-2 p-1 text-xs md:text-sm ${
            selectedAnswer === answer
              ? "bg-customTurquese text-customGrey border-customGrey border-solid border-2 font-press-start"
              : "bg-customTurqueseMedium text-[white] border-customGrey border-solid border-2 font-press-start"
          }`}
          onClick={() => handleAnswerClick(answer)}
        >
          {answer}
        </button>
      ))}
      {selectedAnswer && (
        <button
          className={`mt-2 mb-4 p-2 text-customGrey border-customGrey border-solid border-2 font-press-start ${
            !selectedAnswer ? "bg-[#ffff]" : "bg-[#78e6e2]"
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
