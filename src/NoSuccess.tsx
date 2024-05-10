import React from "react";

type TNoSucces = {
  handleSetToQuiz: () => void;
};
export default function NoSuccess({ handleSetToQuiz }: TNoSucces) {
  return (
    <>
      <p>Non hai superato il livello...</p>
      <p>... ma abbiamo scoperto qualcosa insieme sul nostro 🤍 pianeta</p>
      <div className="flex w-full justify-center mt-8">
        <button onClick={handleSetToQuiz}>Riprova</button>
      </div>
    </>
  );
}
