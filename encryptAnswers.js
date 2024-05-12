// Importa crypto-js come default export
import CryptoJS from "crypto-js";
import fs from "fs";
import dotenv from "dotenv";
import process from "process";

// Carica manualmente le variabili d'ambiente da .env
dotenv.config({ path: ".env" });

// Ottieni la chiave di crittografia dal .env
const key = process.env.VITE_KEY_DECRYPTION;

// File contenente le risposte corrette non crittografate
const filePath1 = "./src/quiz/level1/originalAnsewer.json";
const filePath2 = "./src/quiz/level2/originalAnsewer.json";
const filePath3 = "./src/quiz/level3/originalAnsewer.json";

// Leggi il contenuto del file JSON
const rawData1 = fs.readFileSync(filePath1, "utf8");
const rawData2 = fs.readFileSync(filePath2, "utf8");
const rawData3 = fs.readFileSync(filePath3, "utf8");

// Parsa il contenuto del file JSON in un array JavaScript
const answersArray1 = JSON.parse(rawData1);
const answersArray2 = JSON.parse(rawData2);
const answersArray3 = JSON.parse(rawData3);

// Converti l'array delle risposte in una stringa JSON
const jsonString1 = JSON.stringify(answersArray1);
const jsonString2 = JSON.stringify(answersArray2);
const jsonString3 = JSON.stringify(answersArray3);

// Crittografa le risposte corrette utilizzando AES dall'oggetto CryptoJS
const encryptedAnswers1 = CryptoJS.AES.encrypt(jsonString1, key).toString();
const encryptedAnswers2 = CryptoJS.AES.encrypt(jsonString2, key).toString();
const encryptedAnswers3 = CryptoJS.AES.encrypt(jsonString3, key).toString();

// Scrivi i dati crittografati su un nuovo file JSON
fs.writeFileSync(
  "./src/quiz/level1/solutionEncrypted.json",
  JSON.stringify({ encryptedAnswers1 }),
  "utf8"
);
fs.writeFileSync(
  "./src/quiz/level2/solutionEncrypted.json",
  JSON.stringify({ encryptedAnswers2 }),
  "utf8"
);
fs.writeFileSync(
  "./src/quiz/level3/solutionEncrypted.json",
  JSON.stringify({ encryptedAnswers3 }),
  "utf8"
);

console.log("Risposte corrette crittografate con successo!");
