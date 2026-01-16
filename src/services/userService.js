import { readUserFile, writeUserFile } from "../utils/userFile.js";
import { randomUUID } from "crypto";

class UserService {

  async getAllUsers() {
    return await readUserFile();
  }

  async createUser(data) {
    const { email, senha, nome } = data;
    const users = await readUserFile();

    if (users.find(user => user.email === email)) {
      throw new Error("E-mail já cadastrado");
    }

    if (!senha || senha.length < 6) {
      throw new Error("Senha deve ter no mínimo 6 caracteres");
    }

    const novoUser = {
      id: randomUUID(),
      nome,
      email,
      senha
    };

    users.push(novoUser);
    await writeUserFile(users);

    return novoUser;
  }

  async updateUser(id, dados) {
    const users = await readUserFile();
    const index = users.findIndex(user => user.id === id);

    if (index === -1) {
      throw new Error("Usuário não encontrado");
    }

    users[index] = { ...users[index], ...dados };
    await writeUserFile(users);

    return users[index];
  }

  async deleteUser(id) {
    const users = await readUserFile();
    const novaLista = users.filter(user => user.id !== id);

    if (users.length === novaLista.length) {
      throw new Error("Usuário não encontrado");
    }

    await writeUserFile(novaLista);
  }
}

export default new UserService();
