import { RequestHandler } from "express";
import { avanceModel } from "../models/Avance/avance"; 
export const crearAvances :RequestHandler = async (req, res)=>{
    const body = req.body
    try {
        const crearAvance = await avanceModel.create(body)
        console.log(crearAvance)
        res.json(crearAvance)
    } catch (error) {
        res.json(error)
    }
}