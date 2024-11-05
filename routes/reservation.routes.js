import express from 'express'
import { createReservation, createTable, deleteReservation, deleteTable, readReservation, readTable, updateReservation, updateTable } from '../controllers/reservation.controller.js'

const reservationRouter = express.Router()

reservationRouter.post('/', createReservation)
reservationRouter.get('/', readReservation)
reservationRouter.put('/:id', updateReservation)
reservationRouter.delete('/:id', deleteReservation)

reservationRouter.post('/table', createTable)
reservationRouter.get('/table', readTable)
reservationRouter.put('/table/:id', updateTable)
reservationRouter.delete('/table/:id', deleteTable)

export default reservationRouter