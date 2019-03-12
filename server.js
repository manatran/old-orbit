const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const v1Routes = require("./server/api/routes");

const app = express();

// DB Config
const db = require("./server/config/config").database.connectionString;

// Connect to MongoDB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(success => console.log("MongoDB connected"))
  .catch(error => console.log(error));

// Express settings
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "client/build")));
app.use("", v1Routes);
app.use("/*", express.static(path.join(__dirname, "client/build")));

// Launch server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server now running on port ${port}`);
});
