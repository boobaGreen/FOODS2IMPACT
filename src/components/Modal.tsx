// Type definition for the props of Modal component
type TModal = {
  confirmRemoveUser: () => void;
  cancelRemoveUser: () => void;
};

// Modal component
export default function Modal({ confirmRemoveUser, cancelRemoveUser }: TModal) {
  // Rendering a modal with confirmation and cancellation buttons
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50 shadow-xl opacity-90">
      <div className="bg-customTurqueseDark p-6 rounded-lg ">
        <p>Sei sicuro di voler rimuovere l'utente?</p>
        <div className="flex justify-center gap-6 ">
          <button
            className="bg-customGrey text-ustomTurquese px-4 py-2 rounded mt-4"
            onClick={confirmRemoveUser}
          >
            Conferma
          </button>
          <button
            className="bg-customGrey text-ustomTurquese px-4 py-2 rounded mt-4"
            onClick={cancelRemoveUser}
          >
            Annulla
          </button>
        </div>
      </div>
    </div>
  );
}
