// Import necessary libraries
import CryptoJS from "crypto-js";
import fs from "fs";
import dotenv from "dotenv";
import process from "process";

// Manually load environment variables from .env file
dotenv.config({ path: ".env" });

// Get the decryption key from .env file
const key = process.env.VITE_KEY_DECRYPTION;

// Define a function to encrypt answers
const encryptAnswers = (level) => {
  // File containing the unencrypted correct answers
  const filePath = `./src/quiz/level${level}/originalAnsewer.json`;

  // Read the content of the JSON file
  const rawData = fs.readFileSync(filePath, "utf8");

  // Parse the content of the JSON file into a JavaScript array
  const answersArray = JSON.parse(rawData);

  // Convert the answers array into a JSON string
  const jsonString = JSON.stringify(answersArray);

  // Encrypt the correct answers using AES from CryptoJS object
  const encryptedAnswers = CryptoJS.AES.encrypt(jsonString, key).toString();

  // Write the encrypted data to a new JSON file
  fs.writeFileSync(
    `./src/quiz/level${level}/solutionEncrypted.json`,
    JSON.stringify({ encryptedAnswers }),
    "utf8"
  );
};

// Encrypt answers for each level
for (let level = 1; level <= 3; level++) {
  encryptAnswers(level);
}

console.log("Correct answers successfully encrypted!");
