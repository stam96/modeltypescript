import { model, Schema } from "mongoose";
import {proyectModel} from "../Proyecto/proyecto" 
import {userModel} from "../Usuario/usuario"
interface avance {
    descripcion: String,
    fecha:Date,
    proyecto: Schema.Types.ObjectId
    creadoPor: Schema.Types.ObjectId
}
const avanceSchema = new Schema<avance>({
    descripcion:{
        type:String
    }, 
    fecha:{
        type:Date
    },
    proyecto:{
        type:Schema.Types.ObjectId,
        ref:proyectModel
    },
    creadoPor:{
        type:Schema.Types.ObjectId,
        ref:userModel
    }
},{
    versionKey:false
})

const avanceModel = model("Avances", avanceSchema)
export {avanceModel}