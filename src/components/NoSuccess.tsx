// Type definition for the props of NoSuccess component
type TNoSucces = {
  handleSetToQuiz: () => void;
};

// NoSuccess component
export default function NoSuccess({ handleSetToQuiz }: TNoSucces) {
  // Rendering a message indicating the user did not pass the level and a button to retry
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
