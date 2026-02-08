import { AreaService } from "../services/AreaService.js";
import type { Request, Response, NextFunction } from "express";


export const validarArea = async (req: Request, res: Response, next: NextFunction) => {
  const { nome } = req.body;  
  const areaService = new AreaService();

  if (await areaService.existsByName(nome)) {
    return res.status(400).json({ message: "Área já cadastrada" });
  }   

}