require("express-async-errors");
require("dotenv").config();
import express from "express";
import connectDB from "./db/connect";
import Product from "./models/Product";
import jsonProducts from "./mockData/products.json";
const app = express();

const port = 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Product.create(jsonProducts);
    // await Product.deleteMany();

    console.log("success");
  } catch (error) {
    console.log(error);
  }
};
start();
