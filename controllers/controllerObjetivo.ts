import { RequestHandler } from "express";
import { objetivoModel } from "../models/Objetivo/objetivo";
export const crearObjetivos :RequestHandler = async (req, res)=>{
    const body = req.body
    try {
        const crearA = await objetivoModel.create(body)
        console.log(crearA)
        res.json(crearA)
    } catch (error) {
        res.json(error)
    }
}
export const visualizarObjetivos: RequestHandler = async (req, res)=>{
    const visualizar = await objetivoModel.find()
    console.log(visualizar)
    res.json(visualizar)
}