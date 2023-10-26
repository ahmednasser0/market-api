import mongoose, { Schema , model  , Types} from "mongoose";
const ProductSchema=new Schema({
    pname:{
        type:String,
        required:true
    },
    price:{
        type:Number
    },
    discription:{
        type:String,
        required:true
    },
    userid:{
type:Types.ObjectId,
ref:"user",
required:true
    }
},{timestamps:true})

const productModel=mongoose.model.product || model("Product" , ProductSchema)
export default productModel