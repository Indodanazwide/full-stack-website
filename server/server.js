import express from 'express'
import db from '../database/db.js'
import router from '../routes/router.js'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const server = express()
const port = process.env.PORT || 3000

server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(cors({ origin: '*' }))

server.use('/', router)

server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})