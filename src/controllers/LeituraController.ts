import type { Request, Response } from "express";
import { LeituraService } from "../services/LeituraService.js";
import { AppError } from "../errors/AppError.js";

export class LeituraController {
  private service = new LeituraService();

  create = async (req: Request, res: Response) => {
    const leitura = await this.service.create(req.body);
    return res.status(201).json(leitura);
  };

  findAll = async (_: Request, res: Response) => {
    const leituras = await this.service.findAll();
    return res.json(leituras);
  };

  findOne = async (req: Request, res: Response) => {
    const leitura = await this.service.findOne(String(req.params.id));

    if (!leitura) {
      throw new AppError( 404, "Leitura não encontrada" );
    }

    return res.json(leitura);
  };

  update = async (req: Request, res: Response) => {
    const leitura = await this.service.update(String(req.params.id), req.body);
    return res.json(leitura);
  };

  delete = async (req: Request, res: Response) => {
    await this.service.delete(String(req.params.id));
    return res.status(204).send();
  };
}
