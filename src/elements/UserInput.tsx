import { SetStateAction } from "react";
import { FaPlay } from "react-icons/fa";


type TuserInput = {
  handleInputChange: (event: {
    target: { value: SetStateAction<string> };
  }) => void;
  handleSubmit: () => void;
  inputValue: string; 
};

export default function UserInput({
  handleInputChange,
  handleSubmit,
  inputValue,
}: TuserInput) {

  return (
    <div className="flex flex-col gap-10 mt-12 items-center">
      <div className="flex justify-center text-customTurquese">
        
        <input
          onChange={handleInputChange}
          value={inputValue} 
          placeholder="Inserisci un Nome"
          className="bg-customGrey text-white p-2 rounded font-press-start"
          maxLength={10}
        />
      </div>
      <div className="flex flex-col items-center w-auto">

        <button
          onClick={handleSubmit}
          data-testid="play-button"
          className="animate-bounce flex items-center justify-center flex-col"
        >
          <FaPlay className="text-customGrey" />
          <div className="flex items-center justify-center mt-2 text-customGrey font-bold">
            <p className="font-press-start">START</p>
          </div>
        </button>
      </div>
    </div>
  );
}
