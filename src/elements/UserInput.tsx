import { SetStateAction } from "react";
import { FaPlay } from "react-icons/fa";

// Define a type for the props that UserInput component will receive
type TuserInput = {
  handleInputChange: (event: {
    target: { value: SetStateAction<string> };
  }) => void;
  handleSubmit: () => void;
  inputValue: string; // Add inputValue prop
};

// Define the UserInput component
export default function UserInput({
  handleInputChange,
  handleSubmit,
  inputValue,
}: TuserInput) {
  // The component returns a form with an input field and a submit button
  return (
    <div className="flex flex-col gap-10 mt-12 items-center">
      <div className="flex justify-center text-[#38ded9]">
        {/* The input field calls handleInputChange when its value changes */}
        <input
          onChange={handleInputChange}
          value={inputValue} // Bind the input value
          placeholder="Inserisci un Nome"
          className="bg-[#454444] text-white p-2 rounded"
          maxLength={10}
        />
      </div>
      <div className="flex flex-col items-center w-auto">
        {/* The submit button calls handleSubmit when it's clicked */}
        <button
          onClick={handleSubmit}
          data-testid="play-button"
          className="animate-bounce flex items-center justify-center"
        >
          <FaPlay color={"#454444"} />
        </button>
        <div className="flex items-center justify-center mt-2">
          <p>START</p>
        </div>
      </div>
    </div>
  );
}
