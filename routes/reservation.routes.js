import express from 'express'
import { createReservation, createTable, deleteReservation, deleteTable, readReservation, readTable, updateReservation, updateTable } from '../controllers/reservation.controller.js'

const reservationRouter = express.Router()

router.post('/', createReservation)
router.get('/', readReservation)
router.put('/:id', updateReservation)
router.delete('/:id', deleteReservation)

reservationRouter.post('/table', createTable)
reservationRouter.get('/table', readTable)
reservationRouter.put('/table/:id', updateTable)
reservationRouter.delete('/table/:id', deleteTable)

export default reservationRouter