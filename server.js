// setup .env file
require("dotenv").config();

// import modules
const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

// imports routes
const home = require("./routes/home");
const blog = require("./routes/blog");

// middlewares
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("set view", "ejs");
app.use(methodOverride("_method"));

// routes
app.use("/", home);
app.use("/blog", blog);

// using mongoose to connect to mongodb
const uri = process.env.MONGODB_URI;

mongoose
  .connect(uri)
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err));

// web server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
