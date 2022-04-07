import { Router } from "express";
import cacheInit from "../middleware/cache";
import * as controllerObjetivos from "../controllers/controllerObjetivo"
const routeObjetivos = Router()
routeObjetivos.post(("/objetivos"),controllerObjetivos.crearObjetivos)
routeObjetivos.get(("/objetivos"),  cacheInit,  controllerObjetivos.visualizarObjetivos)
export default routeObjetivos