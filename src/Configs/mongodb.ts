import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect("mongodb://localhost:27017/nextgram");
    }
    console.log("DB-CONNECTED");
  } catch (error) {
    console.log(error);
  }
};

export default connectToDB;
