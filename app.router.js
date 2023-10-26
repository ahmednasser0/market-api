import connectDB from "./Data_Base/connection.js";
import AuthRouter from './src/modules/auth/controller/auth.router.js'
import UserRouter from './src/modules/user/controller/user.router.js'
import ProductRouter from './src/modules/product/controller/product.router.js'
const initApp=(app,express)=>{

app.use(express.json({}))
app.use('/auth',AuthRouter)
app.use('/user',UserRouter)
app.use('/product',ProductRouter)

    connectDB()
}

export default initApp