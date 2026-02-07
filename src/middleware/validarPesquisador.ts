import type { Request, Response, NextFunction } from "express";
import { PesquisadorService } from "../services/PesquisadorService.js";

export const validarPesquisador = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, matricula, dataNascimento } = req.body;

  const pesquisadorService = new PesquisadorService();

  if (await pesquisadorService.existsByEmail(email)) {
    return res.status(400).json({ message: "E-mail já cadastrado" });
  }

  if (await pesquisadorService.existsByMatricula(matricula)) {
    return res.status(400).json({ message: "Matrícula já cadastrada" });
  }

  const hoje = new Date();
  const nascimento = new Date(dataNascimento);

  let idade = hoje.getFullYear() - nascimento.getFullYear();
  const m = hoje.getMonth() - nascimento.getMonth();

  if (m < 0 || (m === 0 && hoje.getDate() < nascimento.getDate())) {
    idade--;
  }

  if (idade < 18) {
    return res
      .status(400)
      .json({ message: "Pesquisador deve ter no mínimo 18 anos" });
  }

  next();
};
