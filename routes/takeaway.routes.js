import express from 'express'
import { createCategory, createMenuItem, createPayment, createTakeaway, deleteCategory, deleteMenuItem, deletePayment, deleteTakeaway, readCategory, readMenuItem, readPayment, readTakeaway, updateCategory, updateMenuItem, updatePayment, updateTakeaway } from '../controllers/takeaway.controller.js'

const takeawayRouter = express.Router()

router.post('/category', createCategory)
router.get('/category', readCategory)
router.put('/category', updateCategory)
router.delete('/category', deleteCategory)

router.post('/menu', createMenuItem)
router.get('/menu', readMenuItem)
router.update('/menu', updateMenuItem)
router.delete('/menu', deleteMenuItem)

router.post('/takeaway', createTakeaway)
router.get('/takeaway', readTakeaway)
router.put('/takeaway', updateTakeaway)
router.delete('/takeaway', deleteTakeaway)

router.post('/payment', createPayment)
router.get('/payment', readPayment)
router.put('/payment', updatePayment)
router.delete('/payment', deletePayment)

export default takeawayRouter