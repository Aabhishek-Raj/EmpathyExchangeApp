import express from 'express'
import { expressAdapter } from '../libs/express-adapter'
import { signupUserController } from '../app'

const router = express.Router()

router.post('/api/users/signup', expressAdapter(signupUserController))

export { router } 