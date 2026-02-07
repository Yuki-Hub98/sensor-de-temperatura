import { Router } from "express";
import PesquisadorController from "../controllers/PesquisadorController.js";
import { PesquisadorService } from "../services/PesquisadorService.js";
import { validarPesquisador } from "../middleware/validarPesquisador.js";
import { createPesquisadorSchema } from "../validates/createPesquisadorSchema.js";
import { validarBody } from "../middleware/validarBody.js";

const pesquisadorRouter = Router();

const pesquisadorService = new PesquisadorService();
const pesquisadorController = new PesquisadorController(
  pesquisadorService
);


pesquisadorRouter.post(
  "/pesquisadores",
  validarBody(createPesquisadorSchema),
  validarPesquisador,
  pesquisadorController.create
);

pesquisadorRouter.get(
  "/pesquisadores",
  pesquisadorController.getAll
);

pesquisadorRouter.get(
  "/pesquisadores/:id",
  pesquisadorController.getById
);

pesquisadorRouter.put(
  "/pesquisadores/:id",
  pesquisadorController.update
);

pesquisadorRouter.delete(
  "/pesquisadores/:id",
  pesquisadorController.delete
);

export default pesquisadorRouter;
