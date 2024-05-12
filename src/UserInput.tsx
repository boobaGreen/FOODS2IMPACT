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
    <div className="flex flex-col gap-10 mt-12">
      <div className="flex justify-center text-[#38ded9]">
        <input
          onChange={handleInputChange}
          placeholder="Nome"
          className="bg-[#454444]"
          maxLength={10}
        />
      </div>
      <div className="flex justify-center">
        <button onClick={handleSubmit}>
          <FaPlay color={"#454444"} />
        </button>
      </div>
    </div>
  );
}

// #3e6c6a
// #454444
// #38ded9
// #35c4c4
// #3a908d
