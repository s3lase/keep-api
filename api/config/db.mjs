import mongoose from 'mongoose';

const dbConnect  = ()=>{
 return new Promise((resolve,reject)=>{
  mongoose.connect('mongodb://localhost:27017/keep').then(()=>{
    resolve({'connection':"success"})
  }).catch(err=>{
    reject("an error occured while connecting to the database")
  })
 })
}

export default  dbConnect;