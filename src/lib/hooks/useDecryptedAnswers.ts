import { useState, useEffect } from "react";
import CryptoJS from "crypto-js";

const useDecryptedAnswers = (level: number): string[] => {
  const [answers, setAnswers] = useState<string[]>([]);

  useEffect(() => {
    import(`../../quiz/level${level}/solutionEncrypted`)
      .then((module) => {
        const key = import.meta.env.VITE_KEY_DECRYPTION as string;
        const encryptedData = module.default.encryptedAnswers; // Access the encrypted data
        const bytes = CryptoJS.AES.decrypt(encryptedData, key);
        const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
        console.log(`Decrypted data for level ${level}:`, decryptedData); // Add logging here
        let decryptedAnswers: string[] = [];
        if (decryptedData) {
          try {
            decryptedAnswers = JSON.parse(decryptedData);
          } catch (error) {
            console.error(
              `Failed to parse decrypted data for level ${level}`,
              error
            );
          }
        }
        setAnswers(decryptedAnswers);
      })
      .catch((error) =>
        console.error(
          `Failed to load encrypted solutions for level ${level}`,
          error
        )
      );
  }, [level]);

  return answers;
};

export default useDecryptedAnswers;
