import { model, Schema } from "mongoose";
import { Enum_TipoObjetivo } from "../enum";
import {proyectModel} from "../Proyecto/proyecto"

interface Objetivo{
    descripcion:String,
    tipo:Enum_TipoObjetivo, 
    proyectos:Schema.Types.ObjectId
}
const objetivoSchema = new Schema<Objetivo>({
    descripcion:{
        type:String,
        require:true
    },
    tipo:{
        type:String,
        enum:Enum_TipoObjetivo  
    },
    proyectos:{
        type:Schema.Types.ObjectId,
        ref:proyectModel
    }
},{
    versionKey:false
})
const objetivoModel = model("Objetivos", objetivoSchema)
export {objetivoModel}