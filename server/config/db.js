const mongoose = require('mongoose');
const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false);
    const conn = await mongoose.connect("mongodb+srv://FATAL:d5WvEEupNvq8yB7S@cluster0.mzugl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log(`Database connected: ${conn.connection.host}`);

  } catch (error) {
    console.log(error);
  }
}


module.exports = connectDB;