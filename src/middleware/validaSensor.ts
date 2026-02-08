import type { Request, Response, NextFunction } from "express";
import { appDataSource } from "../database/appDataSource.js";
import { Sensor } from "../entities/Sensor.js";

export const validarSensor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const sensorRepository = appDataSource.getRepository(Sensor);
    const { serialNumber, status } = req.body;
    const sensorId = req.params.id;

    if (!sensorId && serialNumber) {
      const exists = await sensorRepository.findOne({
        where: { serialNumber },
      });

      if (exists) {
        return res
          .status(400)
          .json({ message: "serialNumber já cadastrado" });
      }
    }

    if (status === "Manutencao") {
      req.body.dataManutencao = new Date();
    }

    next();
  } catch (error) {
    next(error);
  }
};
