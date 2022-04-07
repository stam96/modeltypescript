import { Router } from "express";
import * as controllerUsuario from "../controllers/controllerUsuario"
const routeUsuario = Router()
routeUsuario.post("/usuario", controllerUsuario.crearUsuario)
routeUsuario.get("/usuario", controllerUsuario.verDatos)
export default routeUsuario