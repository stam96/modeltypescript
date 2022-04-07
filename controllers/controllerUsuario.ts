import { RequestHandler } from "express";
import { userModel } from "../models/Usuario/usuario";
export const crearUsuario :RequestHandler = async (req, res)=>{
    const body = req.body
    try {
        const crearA = await userModel.create(body)
        console.log(crearA)
        res.json(crearA)
    } catch (error) {
        res.json(error)
    }
}

export const verDatos :RequestHandler = async (req, res)=>{
    const visualizar = await userModel.find().populate("DataProyectos").populate("UsuarioInscripcion").populate("UsuarioAvance")
    console.log(JSON.stringify(visualizar))
    res.json(visualizar)
}