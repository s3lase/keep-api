import express from  'express';
import config from './config/config'
import db from  './config/db.mjs';
import indexRoute  from './routes/index';
import User from './model/user'

//connect the server to the databse
db(config).then(data=>{
  console.log(data)
});

const app = express();

app.use("/",indexRoute);
app.listen(9000,()=>{
  console.log("the app has started...")
});