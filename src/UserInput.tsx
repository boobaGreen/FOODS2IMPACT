import { SetStateAction } from "react";

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
    <div className="flex flex-col ">
      <div className="flex justify-center">
        <p>Nome</p>
      </div>
      <div className="flex justify-center">
        <input onChange={handleInputChange} />
      </div>
      <div className="flex justify-center">
        <button onClick={handleSubmit}>invia</button>
      </div>
    </div>
  );
}
