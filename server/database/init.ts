import mongoose from 'mongoose';

const { MONGODB_USER, MONGODB_PASSWORD, MONGODB_HOST } = process.env;

const connectionString = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_HOST}?authSource=admin`;

export default async function init() {
  try {
    await mongoose.connect(connectionString);
    console.log('Database connected');
  } catch (err) {
    console.log('Database connection error', err);
  }
}
