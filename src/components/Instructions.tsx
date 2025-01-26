import React from "react";

const Instructions: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="instructions mt-10 p-4 bg-gray-100 rounded bg-opacity-50 mb-10 max-w-xl">
        <h2 className="text-xl font-bold mb-2">Istruzioni</h2>
        <p className="mb-2">Benvenuto su S2ImpactTrivia game!</p>
        <ul className="list-disc list-inside">
          <li>
            Inserisci il tuo nome e clicca sull icona PLAY sopra la scritta
            START per iniziare il gioco.
          </li>
          <li>Rispondi alle domande del quiz per guadagnare punti.</li>
          <li>Avanza attraverso i livelli in base alle tue prestazioni.</li>
          <li>
            Usa l'icona del pulsante "Cestino" per resettare i tuoi progressi.
          </li>
          <li>Condividi il tuo risultato su Twitter(X).</li>
        </ul>
      </div>
    </div>
  );
};

export default Instructions;
