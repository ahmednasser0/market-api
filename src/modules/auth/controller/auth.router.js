
import * as AuthController from '../auth.js'
import { Router } from "express";
const router=Router()


router.post('/signup',AuthController.signup)
router.post('/signin', AuthController.signin)


export default router