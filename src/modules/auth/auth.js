import usermodel from "../../../Data_Base/model.js"
import { Hash , Compare } from "../../utiles/HashandCompare.js"
import { generatetoken } from '../../utiles/GenerareAndVerifyToken.js'
import { signupScema } from './auth.validation.js'

export const signup=async(req,res)=>{
    try {
        const validationResult=signupScema.validate(req.body , {abortEarly:false})
        
        if (validationResult?.error) {
            return res.json({Message:"Error of Validation",validationResult})
        }
        const {username,email,password,gender,address , status}=req.body
    // if (password != Cpassword) {
    //     res.json({message:"Password miss match with Cpassword"})
    // }
    const search=await usermodel.findOne({email})
    if (search) {
        return res.json({Message:"This Email is Exist"})
    }

const hashvalue=Hash({plaintext:password , SaltRound:8})
const user=await usermodel.create({username,email,password:hashvalue,gender,address})

res.json({message:"Done",user})
    } catch (error) {
        console.log(`Error to signup.....${error}`);
    }

}

export const signin=async(req,res)=>{
try {
    const {email , password}=req.body
const user=await usermodel.findOne({email})
if (!user) {
    res.json({Message:"in-valid Email"})
}

const match=Compare({plaintext:password , HashValue:user.password})

//console.log(match);
//console.log({FE:password , BE:user.password});
if (!match) {
    res.json({Message:"in-valid Email or password"})
}

const token=generatetoken({Payload:{id:user._id , islogged:true} ,signature:process.env.TOKEN_SIGNATURE ,  expiresIn:60*60*24*30})
return match ? res.json({Message:"Done",token}) :  res.json({Message:"in-valid Email or Password"})

user.status="online"
await user.save()

//save...>take an instance from the model and update it

} catch (error) {
    console.log(`Error of Token ${error}`);
}
}


// try {
//     const {email,password}=req.body
// const user=await usermodel.findOne({email})
// if (!user) {
//     return res.json({message:"User is not Exist"})
// }
// const match=Compare({plaintext:password , HashValue:user.password})
// if (!match) {
//     res.json({Message:"Password not match"})
// }

// console.log(match);
// console.log({DB:password , FE:user.password});

// const token=jwt.sign({id:user._id , isLoggedIn:true} , process.env.TOKEN_SIGNATURE , {expiresIn:'1h'})
// return match ? res.json({Message:"Done",token}) : res.json({Message:"in_valid Email or Password"})
// } catch (error) {
//     console.log(`Error of Token......${error}`);
// }