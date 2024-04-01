const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const Water = require("./model/waterModel"); // Import the Water model

var app = express();

mongoose
  .connect(
    "mongodb+srv://pitabaspradhan834:pitabasp934@cluster0.p6ocoqf.mongodb.net/water?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error(err);
  });

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));


app.get("/", async (req, res) => {
  try {
    const latestWaterData = await Water.findOne().sort({ _id: -1 }).exec();
    if (!latestWaterData) {
      res.render('index', { waterLevel: 0 });
      return;
    }
    res.render('index', { waterLevel: latestWaterData.waterLevel });
  } catch (err) {
    res.status(500).send("Error while retrieving data: " + err);
  }
});

app.get("/val1/:water", async (req, res) => {
  try {
    const newWaterData = new Water({
      waterLevel: req.params.water,
    });

    const savedWaterData = await newWaterData.save();
  } catch (err) {
    res.status(400).send("Error while saving data: " + err);
  }
});

app.listen(5000, () => {
  console.log("Server started at port no 5000");
});
