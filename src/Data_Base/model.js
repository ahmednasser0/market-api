import mongoose from 'mongoose'
import {Schema , model} from 'mongoose'
const userSchema=new Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        default:"Male",
        enum:['Male' , 'Female']
    },
    status:{
        type:String,
        default:"offline"
    }
})
const usermodel=mongoose.models.user || model('user',userSchema)
export default usermodel