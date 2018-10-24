import mongoose from 'mongoose';

const dbConnect  = (config)=>{
 return new Promise((resolve,reject)=>{
  mongoose.connect(config.db,{ useNewUrlParser: true }).then(()=>{
    resolve({'DB connection':`success`})
  }).catch(err=>{
    reject(`an error occured while connecting to the database ${err}`)
  })
 });
}

export default  dbConnect;