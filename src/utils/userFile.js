import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const userFilePath = path.join(__dirname, "..", "database", "usuarios.json");

export const readUserFile = async () => {
  try {
    const data = await fs.readFile(userFilePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Erro ao ler o arquivo de usuários:", error);
    throw error;
  }
};

export const writeUserFile = async (users) => {
  try {
    const data = JSON.stringify(users, null, 2);
    await fs.writeFile(userFilePath, data, "utf-8");
  } catch (error) {
    console.error("Erro ao escrever no arquivo de usuários:", error);
    throw error;
  }
};
