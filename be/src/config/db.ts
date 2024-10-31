import mongoose from 'mongoose';

async function authenticate() {
  return mongoose.connect(process.env.MONGO_DB_URL!, {
    dbName: process.env.MONGO_DB_NAME,
  });
}

export default authenticate();
