import type { Request, Response } from "express";
import { AreaService } from "../services/AreaService.js";

const service = new AreaService();

export class AreaController {
  create = async (req: Request, res: Response) =>
    res.status(201).json(await service.create(req.body));

  findAll = async (_: Request, res: Response) =>
    res.json(await service.findAll());

  findOne = async (req: Request, res: Response) =>
    res.json(await service.findOne(String(req.params.id)));

  update = async (req: Request, res: Response) =>
    res.json(await service.update(String(req.params.id), req.body));

  delete = async (req: Request, res: Response) =>
    res.status(204).send(await service.delete(String(req.params.id)));
}
