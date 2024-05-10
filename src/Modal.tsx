import React from "react";

type TModal = {
  confirmRemoveUser: () => void;
  cancelRemoveUser: () => void;
};
export default function Modal({ confirmRemoveUser, cancelRemoveUser }: TModal) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg">
        <p>Sei sicuro di voler rimuovere l'utente?</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
          onClick={confirmRemoveUser}
        >
          Conferma
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded mt-4"
          onClick={cancelRemoveUser}
        >
          Annulla
        </button>
      </div>
    </div>
  );
}
