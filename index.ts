import express from "express"
import morgan from "morgan"
import cors from "cors"
import bodyParser from "body-parser"
import routeProyectos from "./routes/routeProyect"
import routeUsuario from "./routes/routeUsuario"
import routeObjetivos from "./routes/routeObjetivos"
import routeAvance from "./routes/routeAvance"
import routerInscripcion from "./routes/routeInscripcion"
//Config
import config from "./config"
//BD
import './database/db'
const app = express()

//body Parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
//habilitar middlewares
app.use(cors());
app.use(morgan("tiny"));
//routes
app.use("/", routeProyectos)
app.use("/", routeUsuario)
app.use("/", routeObjetivos)
app.use("/", routeAvance)
app.use("/", routerInscripcion)
//listen port
app.listen(config.PORT, async ()=>{
    console.log(`escuchando desde el puerto ${config.PORT}`)
})
