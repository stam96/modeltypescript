import { RequestHandler } from "express";
import { proyectModel } from "../models/Proyecto/proyecto";
export const crearProyecto :RequestHandler = async (req, res)=>{
    const body = req.body
    try {
        const crearA = await proyectModel.create(body)
        console.log(crearA)
        res.json(crearA)
    } catch (error) {
        res.json(error)
    }
}


export const verDatos :RequestHandler = async (req, res)=>{
    const visualizar = await proyectModel.find().populate("DataObjetivo").populate("UsuarioInscripcion").populate("UsuarioAvance")
    console.log(visualizar)
    res.json(visualizar)
}