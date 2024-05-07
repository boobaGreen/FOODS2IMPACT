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
const filePath = "./src/quiz/level1/s.json";

// Leggi il contenuto del file JSON
const rawData = fs.readFileSync(filePath, "utf8");

// Parsa il contenuto del file JSON in un array JavaScript
const answersArray = JSON.parse(rawData);

// Converti l'array delle risposte in una stringa JSON
const jsonString = JSON.stringify(answersArray);

// Crittografa le risposte corrette utilizzando AES dall'oggetto CryptoJS
const encryptedAnswers = CryptoJS.AES.encrypt(jsonString, key).toString();

// Scrivi i dati crittografati su un nuovo file JSON
fs.writeFileSync(
  "./src/quiz/level1/solutionEncrypted2.json",
  JSON.stringify({ encryptedAnswers }),
  "utf8"
);

console.log("Risposte corrette crittografate con successo!");
