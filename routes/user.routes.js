import express from 'express'
import { deleteProfile, getProfile, login, signup, updateProfile } from '../controllers/user.controller.js'

const userRouter = express.Router()

userRouter.post('/signup', signup)
userRouter.post('/login', login)

// authenticate
userRouter.get('/profile/:id', getProfile)
userRouter.put('/profile/:id', updateProfile)
userRouter.delete('/profile/:id', deleteProfile)

export default userRouter