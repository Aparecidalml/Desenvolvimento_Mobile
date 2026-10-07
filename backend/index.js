import express from 'express'
import path from 'path'
import sequelize, {sincronizarBD} from './src/config/database.js'
import User from './src/models/modelUser.js'
import routeUser from './src/routes/routeUser.js'
import cors from "cors"

sincronizarBD()

const app = express()

let PORT = 3000
let HOST = '10.6.2.57'

app.use(express.json()) 
app.use(express.urlencoded({extended: true}))

app.use(express.static(path.join(import.meta.dirname, './public'))) 

app.use(
  cors({
    origin: ["http://10.6.2.57:8081", "http://localhost:8081", "http://172.22.224.1:8081"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    credentials: true,
  }),
)

app.use(routeUser)

app.get('/', (req, res) => {
    res.send('<h1> Página Inicial </h1>')
})

app.listen(PORT, HOST, () => {
    console.log(`Servidor em execução em: http://${HOST}:${PORT}`)
})