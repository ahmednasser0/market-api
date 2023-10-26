import mongoose from 'mongoose'
const connectDB=async()=>{
    return await mongoose.connect(process.env.CONNECTED_DB).then(result=>{
        console.log('connectedDB.....');
            }).catch(err=>{
                console.log(`FAiler of connection.....${err}`);
            })
}

export default connectDB