// useDecryptedAnswers.js

import { useState, useEffect } from "react";
import CryptoJS from "crypto-js";
import encryptedAnswers from "../../quiz/level1/solutionEncrypted";


const useDecryptedAnswers = () => {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    // Chiave di crittografia per decifrare le risposte
    const key = import.meta.env.VITE_KEY_DECRYPTION;

    // Decifra le risposte corrette
    const bytes = CryptoJS.AES.decrypt(encryptedAnswers, key);
    const decryptedData = bytes.toString(CryptoJS.enc.Utf8);

    // Parsa le risposte decifrate in un array
    const decryptedAnswers = JSON.parse(decryptedData);

    // Imposta le risposte decifrate nello stato
    setAnswers(decryptedAnswers);
  }, []);

  return answers;
};

export default useDecryptedAnswers;
