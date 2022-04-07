import { Router } from "express";
import * as controllerInscripcion from "../controllers/controllerInscripcion"
const routerInscripcion = Router()
routerInscripcion.post(("/inscripcion"), controllerInscripcion.crearInscripciones)
routerInscripcion.get(("/inscripcion"), controllerInscripcion.verInscripciones)
export default routerInscripcion