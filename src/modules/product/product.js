import usermodel from "../../Data_Base/model.js"
import productModel from "../../Data_Base/product.model.js"

export const GetProduct=async(req,res)=>{
const product=await productModel.find().populate({
    path:"userid",
    select:"username email"
})
res.json({Message:"Done",product})
}
//ahmed commit 2
export const addProduct=async(req,res)=>{
try {
    const {pname,price,discription,userid}=req.body
    const user=await usermodel.findById(userid)
    if (!user) {
        res.json({Message:"In-valid User"})
    }
const find=await productModel.findOne({pname})
if (find) {
    res.json({Message:"This product is Exist"})
}
const product=await productModel.create({pname,price,discription,userid})
return res.json({Message:"Done",product})
} catch (error) {
    console.log(`Failer of Addition.....${error}`);
}
}