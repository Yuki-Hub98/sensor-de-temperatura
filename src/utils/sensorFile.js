import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const sensorFilePath = path.join(__dirname,"..", "database", "sensores.json");

export const readSensorFile = async () => {
  try {
    const data = await fs.readFile(sensorFilePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Erro ao ler o arquivo de sensores:", error);
    throw error;
  }
}

export const writeSensorFile = async (sensors) => {
  try {
    const data = JSON.stringify(sensors, null, 2);
    await fs.writeFile(sensorFilePath, data, "utf-8");
  } catch (error) {
    console.error("Erro ao escrever no arquivo de sensores:", error);
    throw error;
  }   
}