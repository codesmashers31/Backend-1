import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import crudroute from './routes/crudroute.js'
import connectdb from './config/db.js'


dotenv.config()
connectdb()

const app = express()
app.use(cors())
app.use(express.json())
app.use("/api/crud",crudroute)

const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log(`Server Connected Successfully http://localhost:${PORT}`);
    
})

// http://localhost:5000/api/crud
