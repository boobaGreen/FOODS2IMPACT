import React from "react";

const Instructions: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center font-press-start text-xs md:text-sm ">
      <div className="instructions mt-10 p-4 bg-gray-100 rounded mb-10 max-w-xl bg-white opacity-50">
        <h2 className="text-xl font-bold mb-2">Istruzioni</h2>
        <p className="mb-2">Benvenuto su S2ImpactTrivia game!</p>
        <ul className="list-disc list-inside">
          <li className="mb-2">
            Inserisci il tuo nome e clicca sull'icona PLAY sopra la scritta
            START per iniziare il gioco.
          </li>
          <li className="mb-2">
            Rispondi alle domande del quiz per guadagnare punti.
          </li>
          <li className="mb-2">
            Avanza attraverso i livelli in base alle tue prestazioni.
          </li>
          <li className="mb-2">
            Usa l'icona del pulsante "Cestino" per resettare i progressi.
          </li>
          <li className="mb-2">Condividi il tuo risultato su Twitter(X).</li>
        </ul>
      </div>
    </div>
  );
};

export default Instructions;
