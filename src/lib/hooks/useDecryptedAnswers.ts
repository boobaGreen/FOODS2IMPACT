// Importing necessary libraries
import { useState, useEffect } from "react";
import CryptoJS from "crypto-js";

// useDecryptedAnswers hook: This hook takes a level number as input and returns the decrypted answers for that level.
const useDecryptedAnswers = (level: number): string[] => {
  // State to hold the decrypted answers
  const [answers, setAnswers] = useState<string[]>([]);

  // Effect hook to decrypt the answers when the level changes
  useEffect(() => {
    // Dynamically import the encrypted solutions for the current level
    import(`../../quiz/level${level}/solutionEncrypted.json`)
      .then((module) => {
        // Get the decryption key from environment variables
        const key = import.meta.env.VITE_KEY_DECRYPTION as string;

        // Access the encrypted data
        const encryptedData = module.default.encryptedAnswers;

        // Decrypt the data using CryptoJS
        const bytes = CryptoJS.AES.decrypt(encryptedData, key);
        const decryptedData = bytes.toString(CryptoJS.enc.Utf8);

        // Log the decrypted data
        console.log(`Decrypted data for level ${level}:`, decryptedData);

        let decryptedAnswers: string[] = [];
        if (decryptedData) {
          try {
            // Parse the decrypted data into an array of answers
            decryptedAnswers = JSON.parse(decryptedData);
          } catch (error) {
            console.error(
              `Failed to parse decrypted data for level ${level}`,
              error
            );
          }
        }

        // Update the state with the decrypted answers
        setAnswers(decryptedAnswers);
      })
      .catch((error) =>
        console.error(
          `Failed to load encrypted solutions for level ${level}`,
          error
        )
      );
  }, [level]);

  // Return the decrypted answers
  return answers;
};

export default useDecryptedAnswers;
