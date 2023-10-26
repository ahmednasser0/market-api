import auth from '../../../middleWare/authorization.js'
import * as UserController from '../user.js'
import Router from 'express'
const router=Router()

router.get('/finduser',UserController.finduser)
router.get('/profile',auth,UserController.profile)
router.delete('/delete',auth ,UserController.deleteUser)
router.put('/update',auth,UserController.updateUser)


export default router