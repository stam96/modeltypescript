import { Router } from "express";
import * as controllerProyectos from "../controllers/controllerProyecto"
const routeProyectos = Router()
routeProyectos.post("/proyecto", controllerProyectos.crearProyecto)
routeProyectos.get("/proyecto", controllerProyectos.verDatos)
export default routeProyectos