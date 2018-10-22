import express from  'express';
import db from  './config/db.mjs';
import indexRoute  from './routes/index'
//connect the server to the databse
db();

const app = express();

app.use("/",indexRoute);
app.listen(9000,()=>{
  console.log("the app has started...")
});