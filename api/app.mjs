import express from  'express';
import config from './config/config'
import db from  './config/db.mjs';
import indexRoute  from './routes/index';
import authRoute from './routes/auth';
import User from './model/user';
import bodyParser from 'body-parser';


//connect the server to the databse
db(config).then(data=>{
  console.log(data)
});

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api",indexRoute);
app.use("/api/auth",authRoute)
app.listen(9000,()=>{
  console.log(`the app has started...`)
});