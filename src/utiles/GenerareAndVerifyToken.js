import jwt from 'jsonwebtoken'
export const generatetoken=({Payload = {} , signature = process.env.TOKEN_SIGNATURE , expiresIn=60*60}={})=>{
const token=jwt.sign(Payload , signature , {expiresIn:parseInt(expiresIn)})
return token
}

export const verfiytoken=({token = {} , signature = process.env.TOKEN_SIGNATURE }={})=>{
    const decoded=jwt.verify(token , signature )
    return decoded
    }