import Joi from "joi"

export const signupScema=Joi.object({
    username:Joi.string().required(),
    email:Joi.string().email().required(),
    password:Joi.string().required(),
    Cpassword:Joi.string().valid(Joi.ref('password')).required(),
    gender:Joi.string(),
    address:Joi.string(),
    status:Joi.string()
}).required()



//   username:Joi.string().required(),
// email:Joi.string().email().required(),
// password:string().pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]){8,}$/)).required(),
// cpassword:Joi.ref('password')