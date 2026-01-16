import { Router } from "express";
import sensorRoutes from "./sensorRoutes.js";
import userRoutes from "./userRoutes.js";

const indexRouter = Router();

indexRouter.use(sensorRoutes);
indexRouter.use(userRoutes);

export default indexRouter;
