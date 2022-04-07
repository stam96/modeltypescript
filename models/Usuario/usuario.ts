import { model, Schema } from "mongoose";
import {Enum_Rol, Enum_EstadoUsuario} from "../enum" 
interface Usuario{
    correo:String,
    cedula:String,
    nombre:String,
    apellido:String,
    rol:Enum_Rol,
    estado: Enum_EstadoUsuario,
    //inscripciones: Schema.Types.ObjectId,
    //avancesCreados: Schema.Types.ObjectId

}
const usuarioSchema= new Schema<Usuario>({
    correo:{
        type:String,
        required:true,
        unique:true
    },
    cedula:{
        type:String,
        require:true,
        unique:true
    },
    nombre:{
        type:String
    },
    apellido:{
        type:String
    }, 
    rol:{
        enum:Enum_Rol,
        default:Enum_Rol.ESTUDIANTE,
        type:String
    },
    estado:{
        enum:Enum_EstadoUsuario,
        default:Enum_EstadoUsuario.PENDIENTE,
        type:String
    }
},{
    versionKey:false,
    toJSON:{virtuals:true},
    toObject:{virtuals:true}
})

  usuarioSchema.virtual("DataProyectos",{
      ref:"Proyectos",
      localField:"_id",
      foreignField:"lider"
  })
  usuarioSchema.virtual("UsuarioInscripcion",{
    ref:"Inscripciones",
    localField:"_id",
    foreignField:"estudiante"
})

usuarioSchema.virtual("UsuarioAvance",{
    ref:"Avances",
    localField:"_id",
    foreignField:"creadoPor"
})


usuarioSchema.methods.toJSON = function () {
    const obj = this.toObject();
    delete obj.id;
    return obj;
  };

const userModel = model("Usuarios", usuarioSchema)
export {userModel}