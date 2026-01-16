import { readSensorFile, writeSensorFile } from "../utils/sensorFile.js";

class SensorService {

  async getAllSensors() {
    return await readSensorFile();
  }

  async createSensor(data) {
    const { id, localizacao, temp } = data;

    if (!id || id.length < 3) {
      throw new Error(
        "ID do sensor é obrigatório e deve ter no mínimo 3 caracteres."
      );
    }

    const sensores = await readSensorFile();

    sensores.push({ id, localizacao, temp });
    await writeSensorFile(sensores);

    return { id, localizacao, temp };
  }

  async updateSensor(id, novosDados) {
    const sensores = await readSensorFile();
    const index = sensores.findIndex(sensor => sensor.id === id);

    if (index === -1) {
      throw new Error("Sensor não encontrado");
    }

    sensores[index] = { ...sensores[index], ...novosDados };
    await writeSensorFile(sensores);

    return sensores[index];
  }

  async deleteSensor(id) {
    const sensores = await readSensorFile();
    const novaLista = sensores.filter(sensor => sensor.id !== id);

    if (sensores.length === novaLista.length) {
      throw new Error("Sensor não encontrado");
    }

    await writeSensorFile(novaLista);
  }
}

export default new SensorService();
