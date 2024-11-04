import express from 'express'
import dotenv from 'dotenv'
import userRouter from './user.routes.js'
import reservationRouter from './reservation.routes.js'
import takeawayRouter from './takeaway.routes.js'

dotenv.config()

const router = express.Router()

router.use('/user', userRouter)

router.use('/reservation', reservationRouter)

router.use('/takeaway', takeawayRouter)

export default router