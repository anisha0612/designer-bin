import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import products from "./data/shopData.js";
import User from "./models/usersModel.js";
import Product from "./models/productsModel.js";
import Order from "./models/ordersModel.js";
import connectDB from "./config/db.js";

// configure .env to use mongoDB URI in connectDB
dotenv.config();

// import data for data seeding when the project is initially set up
const importData = async () => {
  try {
    await connectDB();
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });
    await Product.insertMany(sampleProducts);
    console.log("Data imported".bgGreen.bold);
    process.exit();
  } catch (error) {
    console.log(`Error message :${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await connectDB();
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data destroyed".bgRed.bold);
    process.exit();
  } catch (error) {
    console.log(`Error message :${error}`);
    process.exit(1);
  }
};

// if an additional argument is passed (-d) then run destroyData function
process.argv[2] === "-d" ? destroyData() : importData();
