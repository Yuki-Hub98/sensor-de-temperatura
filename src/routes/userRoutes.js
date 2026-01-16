import { Router } from "express";
import userController from "../controllers/userController.js";

const routerUser = Router();

routerUser.get("/user", userController.getAll);
routerUser.post("/user", userController.create);
routerUser.put("/user/:id", userController.update);
routerUser.delete("/user/:id", userController.delete);

export default routerUser;
