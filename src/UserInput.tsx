// Import SetStateAction from React for typing the state update function
import { SetStateAction } from "react";

// Import FaPlay from react-icons for the play button
import { FaPlay } from "react-icons/fa";

// Define a type for the props that UserInput component will receive
type TuserInput = {
  // handleInputChange is a function that will be called when the input field value changes
  // It receives an event object and doesn't return anything
  handleInputChange: (event: {
    target: { value: SetStateAction<string> };
  }) => void;

  // handleSubmit is a function that will be called when the form is submitted
  // It doesn't receive any arguments and doesn't return anything
  handleSubmit: () => void;
};

// Define the UserInput component
export default function UserInput({
  handleInputChange,
  handleSubmit,
}: TuserInput) {
  // The component returns a form with an input field and a submit button
  return (
    <div className="flex flex-col gap-10 mt-12">
      <div className="flex justify-center text-[#38ded9]">
        {/* The input field calls handleInputChange when its value changes */}
        <input
          onChange={handleInputChange}
          placeholder="Nome"
          className="bg-[#454444]"
          maxLength={10}
        />
      </div>
      <div className="flex justify-center">
        {/* The submit button calls handleSubmit when it's clicked */}
        <button onClick={handleSubmit}>
          <FaPlay color={"#454444"} />
        </button>
      </div>
    </div>
  );
}
