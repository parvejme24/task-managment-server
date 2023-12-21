const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const { route } = require("./src/routes");
const { MongoClient, ServerApiVersion } = require("mongodb");

dotenv.config();

const app = new express();

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());

// Connect to MongoDB using a demo connection URI from MongoDB Atlas
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.gbcelyw.mongodb.net`;
// const uri = `mongodb+srv://taskManager:FJpcES7qzuHEgpNr@cluster0.gbcelyw.mongodb.net/?retryWrites=true&w=majority`
// mongoose.connect(process.env.URI || uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   // useCreateIndex: true, // Set useCreateIndex directly here
// });
console.log("DB URI", uri)

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const db = client;

db.on("error", (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.get("/", (req, res) => {
  res.send("Welcome to TaskUp Server");
});

app.get("*", (req, res) => {
  res.status(404).json({ type: "fail", data: "Page Not foud" });
});

app.use("/api", route);

module.exports = app;
