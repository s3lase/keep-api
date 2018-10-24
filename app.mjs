import express from  'express';
import config from './api/config/config'
import db from  './api/config/db.mjs';
import indexRoute  from './api/routes/index';
import authRoute from './api/routes/auth';
import User from './api/model/user';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

//connect the server to the database
db(config).then(data=>{
  console.log(data)
});

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api",indexRoute);
app.use("/api/auth",authRoute)



app.listen(config.port,()=>{
  console.log(`The app is running on ${config.port}`)
});