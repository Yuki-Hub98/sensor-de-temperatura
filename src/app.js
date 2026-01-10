import express from 'express';
import {readSensorFile, writeSensorFile} from './utils/sensorFile.js';
const app = express();

const PORT = 3000;
app.use(express.json());

app.get('/api/v1/status', (req, res) => {
  res.status(200).json({ message: 'Servidor rodando' });
});

app.get('/api/v1/sensores', async (req, res) => {
  const sensores = await readSensorFile();
  res.status(200).json({ sensores: sensores, status: 'OK' });
});

app.post('/api/v1/sensores', async (req, res) => {

  try {

    const {id, localizacao, temp} = req.body;

    if (!id || id.length < 3 ) {
      throw new Error('ID do sensor é obrigatório e deve ter no máximo 3 caracteres.');
    }

    const novoSensor = {id, localizacao, temp};
    const sensores = await readSensorFile();
    sensores.push(novoSensor);
    await writeSensorFile(sensores);

    res.status(201).json({ message: 'Sensor adicionado com sucesso', sensor: novoSensor });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  
});

app.put('/api/v1/sensores/:id', async (req, res) => {
  try {

    const sensorId = req.params.id;
    const { localizacao, temp } = req.body; 
    const sensores = await readSensorFile();
    const sensorIndex = sensores.findIndex(sensor => sensor.id === sensorId);
    if (sensorIndex === -1) {
      return res.status(404).json({ error: 'Sensor não encontrado' });
    } 
    sensores[sensorIndex] = { ...sensores[sensorIndex], localizacao, temp };
    await writeSensorFile(sensores);
    res.status(200).json({ message: 'Sensor atualizado com sucesso', sensor: sensores[sensorIndex] });

  } catch (error) {

    res.status(400).json({ error: error.message });
    
  } 
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}...`);
});
