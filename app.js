const express = require("express");
require("dotenv").config();
const port = process.env.PORT;
const host = process.env.HOST;

const cors = require("cors");
const Route = require("./Router");
const mongoose = require("mongoose");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use("/", Route);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("dygnify/build"));

  app.get("*", (req, res) => {
    const path = require("path");
    res.sendFile(path.resolve(__dirname, "dygnify", "build", "index.html"));
  });
}
mongoose
  .connect(process.env.URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => {
    app.listen(port, host, () => {
      console.log(`server run on ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
