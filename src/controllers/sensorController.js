import sensorService from "../services/sensorService.js";

class SensorController {

  async getAll(req, res) {
    const sensores = await sensorService.getAllSensors();
    res.status(200).json({ sensores, status: "OK" });
  }

  async create(req, res) {
    try {
      const sensor = await sensorService.createSensor(req.body);
      res.status(201).json({
        message: "Sensor adicionado com sucesso",
        sensor
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const sensor = await sensorService.updateSensor(id, req.body);
      res.status(200).json({
        message: "Sensor atualizado com sucesso",
        sensor
      });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      await sensorService.deleteSensor(id);
      res.status(200).json({ message: "Sensor deletado com sucesso" });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}

export default new SensorController();
