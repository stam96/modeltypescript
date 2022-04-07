import { RequestHandler } from "express";
import { modelInscripcion } from "../models/Inscripcion/inscripcion";
export const crearInscripciones :RequestHandler = async (req, res)=>{
    const body = req.body
    try {
        const crearInscripcion = await modelInscripcion.create(body)
        console.log(crearInscripcion)
        res.json(crearInscripcion)
    } catch (error) {
        res.json(error)
    }
}
export const verInscripciones :RequestHandler = async (req, res)=>{
    try {
        const visualizar = await modelInscripcion.find()
        res.json(visualizar)
    } catch (error) {
        res.json(error)
    }
}