import { Router } from "express";
import * as controllerAvance from "../controllers/controllerAvances"
const routeAvance = Router()
routeAvance.post(("/avance"), controllerAvance.crearAvances)
export default routeAvance