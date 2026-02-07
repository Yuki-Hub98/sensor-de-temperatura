import type { Request, Response } from "express";
import type { PesquisadorService } from "../services/PesquisadorService.js";

export default class PesquisadorController {
  private pesquisadorService: PesquisadorService;

  constructor(pesquisadorService: PesquisadorService) {
    this.pesquisadorService = pesquisadorService;

    this.create = this.create.bind(this);
    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const pesquisador = await this.pesquisadorService.createPesquisador(
        req.body
      );
      return res.status(201).json(pesquisador);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }

  public async getAll(req: Request, res: Response): Promise<Response> {
    const pesquisadores = await this.pesquisadorService.getAllPesquisador();
    return res.status(200).json(pesquisadores);
  }

  public async getById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const pesquisador = await this.pesquisadorService.getPesquisadorById(String(id));
    if (!pesquisador) {
      return res
        .status(404)
        .json({ message: "Pesquisador não encontrado" });
    }

    return res.status(200).json(pesquisador);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      const pesquisadorAtualizado =
        await this.pesquisadorService.updatePesquisador(String(id), req.body);

      return res.status(200).json(pesquisadorAtualizado);
    } catch (error: any) {
      return res.status(404).json({ message: error.message });
    }
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      await this.pesquisadorService.deletePesquisador(String(id));
      return res.status(204).send();
    } catch (error: any) {
      return res.status(404).json({ message: error.message });
    }
  }
}
