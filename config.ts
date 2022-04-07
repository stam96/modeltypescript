import dotenv from "dotenv"
dotenv.config()
export default  {
    PORT: process.env.PORT || 3000,
    PASS: process.env.PASS,
    USER: process.env.USER,
    HOST: process.env.REDIS_HOST,
    PORTR: process.env.REDIS_PORT
}