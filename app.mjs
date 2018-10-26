import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import config from './api/config/config';
import db from './api/config/db';
import indexRoute from './api/routes/index';
import authRoute from './api/routes/auth';

dotenv.config();

// connect the server to the database
db(config).then((data) => {
  console.log(data);
});

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
bodyParser.json(true);
app.use('/api', indexRoute);
app.use('/api/auth', authRoute);

app.listen(config.port, () => {
  console.log(`The app is running on ${config.port}`);
});
