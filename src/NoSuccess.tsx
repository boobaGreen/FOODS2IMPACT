type TNoSucces = {
  handleSetToQuiz: () => void;
};
export default function NoSuccess({ handleSetToQuiz }: TNoSucces) {
  return (
    <div className="flex flex-col text-xs mt-6">
      <p className="flex mb-2">Non hai superato il livello...</p>
      <p>... ma abbiamo scoperto qualcosa insieme sul nostro 🤍 pianeta</p>
      <div className="flex w-full justify-center mt-8">
        <button onClick={handleSetToQuiz} className="text-[#38ded9]">
          RIPROVA
        </button>
      </div>
    </div>
  );
}
