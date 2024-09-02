const express = require("express");
const mongoose = require("mongoose");
const dataService = require("./services/data.service.js");
const router = require("./routes/index.js");
const globalHandler = require("./utils/globalHandler.js");
mongoose.connect("mongodb://localhost:27017/mockData").then(() => {
  console.log("Connected to MongoDB");
  dataService.getData(2, 10);
});

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api", router);
app.use(globalHandler);
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
