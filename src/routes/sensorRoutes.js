import { Router } from "express";
import sensorController from "../controllers/sensorController.js";

const sensorRoutes = Router();

sensorRoutes.get("/sensores", sensorController.getAll);
sensorRoutes.post("/sensores", sensorController.create);
sensorRoutes.put("/sensores/:id", sensorController.update);
sensorRoutes.delete("/sensores/:id", sensorController.delete);

export default sensorRoutes;
