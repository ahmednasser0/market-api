import jwt from 'jsonwebtoken'
import usermodel from '../../Data_Base/model.js'
import { verfiytoken } from '../utiles/GenerareAndVerifyToken.js';
const auth=async(req,res,next)=>{
    try {
        const {authorization}=req.headers
    console.log({authorization});
    //console.log(authorization.startsWith(process.env.BEARER_TOKEN));
    if (!authorization.startsWith(process.env.BEARER_TOKEN)) {
        return res.json({Massage:"In-valid Bearer Token"})
    }
    //console.log(authorization.split(process.env.BEARER_TOKEN)[1]);
    const token=authorization.split(process.env.BEARER_TOKEN)[1]
    console.log(token);
    if (!token) {
        return res.json({Message:"There is not token"})
    }
    const decoded=verfiytoken({token})
    console.log({decoded});
    if (!decoded?.id || !decoded?.islogged) {
        return res.json({Message:"Decoded in-valid"})
    }
    const authuser=await usermodel.findById(decoded.id).select("username email role")
    if (!authuser) {
        return res.json({Message:"This is not auth user"})
    }
    req.user=authuser
    return next()
    } catch (error) {
        console.log(`Failer of Authorization.......${error}`);
    }
}



export default auth