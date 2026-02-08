import { Router } from "express";
import SensorController from "../controllers/SensorController.js";
import SensorService from "../services/SensorService.js";
import { validarBody } from "../middleware/validarBody.js";
import { createSensorSchema } from "../validates/createSensorSchema.js";
import { validarSensor } from "../middleware/validaSensor.js";

const sensorRouter =  Router();
const sensorService = new SensorService();
const sensorController = new SensorController(sensorService)

// localhost:6060/api/sensors

sensorRouter.get('/sensors', (req, res) => sensorController.getAllSensors(req, res));
sensorRouter.post('/sensors', validarBody(createSensorSchema), validarSensor  ,(req, res) => sensorController.addSensor(req, res));
sensorRouter.put('/sensors/:id',  validarBody(createSensorSchema), validarSensor, (req, res) => sensorController.updateSensor(req, res));
sensorRouter.delete('/sensors/:id', (req, res) => sensorController.deleteSensor(req, res));

export default sensorRouter;