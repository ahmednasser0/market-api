import * as ProductController from '../product.js'
import Router from 'express'
const router=Router()


router.get('/getproduct',ProductController.GetProduct)
router.post('/addproduct',ProductController.addProduct)




export default router