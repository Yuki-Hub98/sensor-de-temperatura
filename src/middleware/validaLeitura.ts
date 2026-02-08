import type { Request, Response, NextFunction } from "express";

export const validarLeitura = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { dataHora } = req.body;

  if (dataHora) {
    const data = new Date(dataHora);

    if (isNaN(data.getTime())) {
      return res.status(400).json({
        message: "dataHora inválida",
      });
    }

    if (data > new Date()) {
      return res.status(400).json({
        message: "Data da leitura não pode ser futura",
      });
    }
  }

  next();
};
