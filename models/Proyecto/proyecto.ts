import { model, Schema } from "mongoose";
import { Enum_EstadoProyecto, Enum_FaseProyecto } from "../enum";
import { userModel } from "../Usuario/usuario";


interface Proyecto{
    nombre:String,
    presupuesto:Number,
    fechaInicio:Date,
    fechaFin:Date
    lider:Schema.Types.ObjectId
    estado: Enum_EstadoProyecto,
    fase:Enum_FaseProyecto
    //inscripciones: Schema.Types.ObjectId,
    //avance
}
const proyectoSchema = new Schema<Proyecto>({
    nombre:{
        type:String
    },
    presupuesto:{
        type:Number
    },
    fechaInicio:{
        type:Date
    },
    fechaFin:{
        type:Date
    },
    lider:{        
        type:Schema.Types.ObjectId,
        ref:userModel 
   
    },
    estado:{
        type:String,
        enum:Enum_EstadoProyecto
    },
    fase:{
        type:String,
        enum:Enum_FaseProyecto
    }

},{
    versionKey: false,
    toJSON:{virtuals:true},
    toObject:{virtuals:true}
})


proyectoSchema.virtual("DataObjetivo",{
    ref:"Objetivos",
    localField:"_id",
    foreignField:"proyectos"
})

proyectoSchema.virtual("UsuarioInscripcion"
,{
    ref:"Inscripciones",
    localField:"_id",
    foreignField:"proyecto"
})

proyectoSchema.virtual("UsuarioAvance"
,{
    ref:"Avances",
    localField:"_id",
    foreignField:"proyecto"
})

proyectoSchema.methods.toJSON = function () {
    const obj = this.toObject();
    delete obj.id;
    return obj;
  };
const proyectModel = model("Proyectos", proyectoSchema)
export {proyectModel}