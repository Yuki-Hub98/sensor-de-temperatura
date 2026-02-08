import { Router } from "express";
import { AreaController } from "../controllers/AreaController.js";
import { validarArea } from "../middleware/validarArea.js";
import { createAreaSchema } from "../validates/createAreaSchema.js";
import { validarBody } from "../middleware/validarBody.js";

const areaRouter = Router();
const controller = new AreaController();

areaRouter.post("/", validarBody(createAreaSchema), validarArea, controller.create);
areaRouter.get("/", controller.findAll);
areaRouter.get("/:id", controller.findOne);
areaRouter.put("/:id", validarBody(createAreaSchema), validarArea, controller.update);
areaRouter.delete("/:id", controller.delete);

export default areaRouter;
