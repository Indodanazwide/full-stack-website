import express from 'express'
import { createCategory, createMenuItem, createPayment, createTakeaway, deleteCategory, deleteMenuItem, deletePayment, deleteTakeaway, readCategory, readMenuItem, readPayment, readTakeaway, updateCategory, updateMenuItem, updatePayment, updateTakeaway } from '../controllers/takeaway.controller.js'

const takeawayRouter = express.Router()


takeawayRouter.post('/category', createCategory)
takeawayRouter.get('/category', readCategory)
takeawayRouter.put('/category', updateCategory)
takeawayRouter.delete('/category', deleteCategory)

takeawayRouter.post('/menu', createMenuItem)
takeawayRouter.get('/menu', readMenuItem)
takeawayRouter.put('/menu', updateMenuItem)
takeawayRouter.delete('/menu', deleteMenuItem)

takeawayRouter.post('/takeaway', createTakeaway)
takeawayRouter.get('/takeaway', readTakeaway)
takeawayRouter.put('/takeaway', updateTakeaway)
takeawayRouter.delete('/takeaway', deleteTakeaway)

takeawayRouter.post('/payment', createPayment)
takeawayRouter.get('/payment', readPayment)
takeawayRouter.put('/payment', updatePayment)
takeawayRouter.delete('/payment', deletePayment)

export default takeawayRouter