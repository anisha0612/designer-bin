import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log(
      `MongoDB connected : ${conn.connection.host}`.cyan.bgBlack.inverse
    );
  } catch (err) {
    console.log(`Error :${err}`);
    process.exit(1);
  }
};

export default connectDB;
