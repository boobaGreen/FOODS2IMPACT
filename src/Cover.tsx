
type TCover = {
  gameStatus: string;
  setGameStatus: (newStatus: string) => void;
};

export default function Cover({ gameStatus, setGameStatus }: TCover) {
  function startGame(): void {
    setGameStatus("quiz");
  }
  return (
    <main className="flex flex-col justify-around h-full bg-red-500 ">
      <h2 className="flex justify-center text-4xl">cover</h2>
      <button onClick={startGame}>start</button>
      <p>gameStatus = {gameStatus}</p>
    </main>
  );
}
