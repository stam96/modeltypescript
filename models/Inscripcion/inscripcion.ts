import { model, Schema } from "mongoose";
import { Enum_EstadoInscripcion } from "../enum";
import {proyectModel} from "../Proyecto/proyecto" 
import {userModel} from "../Usuario/usuario"
interface inscripcion {
    proyecto:Schema.Types.ObjectId,
    estudiante:Schema.Types.ObjectId,
    estado:Enum_EstadoInscripcion
    fechaIngreso:Date,  
    fechaEgreso:Date
}
const schemaInscripcion = new Schema<inscripcion>({
    proyecto:{
        type:Schema.Types.ObjectId,
        ref:proyectModel
    },
    estudiante:{
        type:Schema.Types.ObjectId,
        ref:userModel
    },
    estado:{
        type:String,
        enum:Enum_EstadoInscripcion,
    },
    fechaIngreso:{
        type:Date
    },
    fechaEgreso:{
        type:Date
    }
}, {
    versionKey:false
})
const modelInscripcion = model("Inscripciones", schemaInscripcion)
export {modelInscripcion}