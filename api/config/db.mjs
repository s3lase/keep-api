import mongoose from 'mongoose';

const dbConnect = config => new Promise((resolve, reject) => {
  mongoose.connect(config.db, { useNewUrlParser: true })
    .then(() => {
      resolve({ 'DB connection': 'success' });
    })
    .catch((err) => {
      reject(
        new Error(`an error occured while connecting to the database ${err}`),
      );
    });
});

export default dbConnect;
