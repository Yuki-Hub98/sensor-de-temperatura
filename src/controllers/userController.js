import userService from "../services/userService.js";

class UserController {

  async getAll(req, res) {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  }

  async create(req, res) {
    try {
      const user = await userService.createUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const user = await userService.updateUser(req.params.id, req.body);
      res.status(200).json(user);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      await userService.deleteUser(req.params.id);
      res.status(200).json({ message: "Usuário removido com sucesso" });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}

export default new UserController();
