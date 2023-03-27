import express from "express"
import dotenv from 'dotenv'

import errorHandlerMiddleware from "./middleware/error-handler.js"
import notFoundMiddleware from "./middleware/not-found.js"
import dbConnect from "./db/dbConnect.js"
import authRouter from './routes/authRoutes.js'
import jobRouter from './routes/jobRoutes.js'

const app = express()

app.use(express.json())

dotenv.config()

app.get('/',(req,res) => {
    res.send('Welcome')
})

app.use('/api/v1/auth',authRouter)
app.use('/api/v1/job',jobRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000

const start = async() => {
    try {
        dbConnect(process.env.MONGO_URL)
        app.listen(port,()=> console.log(`Server is listening to port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()