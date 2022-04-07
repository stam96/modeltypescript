import mongoose from "mongoose"
import config from "../config"
(async ()=>{
try {
    const options =  {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        keepAlive: true
}
const db = await mongoose.connect(`mongodb+srv://${config.USER}:${config.PASS}@clusterpc.4ofe3.mongodb.net/proyectoData?retryWrites=true&w=majority`, options )
console.log("database connect", db.connection.name)
} catch (error) {
    console.log("Error de conexion")
}
})()