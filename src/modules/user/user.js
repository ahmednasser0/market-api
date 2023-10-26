import usermodel from "../../../Data_Base/model.js"
import jwt from 'jsonwebtoken'

export const finduser=async(req,res)=>{
const user=await usermodel.find()
res.json({Message:"Done",user})
}

export const profile=async(req,res)=>{

try {
//     const {token}=req.headers
// if (!token) {
//     res.json({Message:"Token is required"})
// }

// const decoded=jwt.verify(token , process.env.TOKEN_SIGNATURE)
// console.log({decoded});
console.log({user:req.user});

const user=await usermodel.findById(req.user._id)
return res.json({Message:"Done",user})
} catch (error) {
    console.log(`Failer of Profile.....${error}`);
}


}

export const deleteUser=async(req,res)=>{
    try {
        

    const user=await usermodel.findByIdAndDelete(req.user.id)
    res.json({user})
    } catch (error) {
        console.log(`Failer of Delete.....${error}`);
    }
}

export const updateUser=async(req,res)=>{
try {
    const {username,email,password,gender,address}=req.body
// const finduser= await usermodel.findOne({email})
// if (!finduser) {
//     res.json({Message:"This is in-valid account"})
// }
const user=await usermodel.findByIdAndUpdate(req.user.id , req.body , {new:true})
user ? res.json({Message:"Done",user}) : res.json({Message:"wrong"})
} catch (error) {
    console.log(`Failer of update....${error}`);
}
}