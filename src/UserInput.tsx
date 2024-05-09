import { SetStateAction } from "react";
import { FaPlay } from "react-icons/fa";

type TuserInput = {
  handleInputChange: (event: {
    target: { value: SetStateAction<string> };
  }) => void;
  handleSubmit: () => void;
};

export default function UserInput({
  handleInputChange,
  handleSubmit,
}: TuserInput) {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-center">
        <input onChange={handleInputChange} placeholder="Nome" />
      </div>
      <div className="flex justify-center">
        <button onClick={handleSubmit}>
          <FaPlay />
        </button>
      </div>
    </div>
  );
}
