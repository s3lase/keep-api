import express from  'express';
import db from  './config/db.mjs';

//connect the server to the databse
db();

const app = express();


app.listen(9000,()=>{
  console.log("the app has started...")
});