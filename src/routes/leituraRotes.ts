import { Router } from "express";
import { LeituraController } from "../controllers/LeituraController.js";
import { validarLeitura } from "../middleware/validaLeitura.js";
import { validarBody } from "../middleware/validarBody.js";
import { createLeituraSchema } from "../validates/createLeituraSchema.js";

const leituraRouter = Router();
const controller = new LeituraController();

leituraRouter.post("/leituras", validarBody(createLeituraSchema), validarLeitura, controller.create);
leituraRouter.get("/leituras", controller.findAll);
leituraRouter.get("/leituras/:id", controller.findOne);
leituraRouter.put("/leituras/:id", validarBody(createLeituraSchema),validarLeitura, controller.update);
leituraRouter.delete("/leituras/:id", controller.delete);

export default leituraRouter;