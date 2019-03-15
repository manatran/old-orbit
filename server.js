const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const auth = require("./server/api/v1/providers/auth")();
const v1Routes = require("./server/api/routes");
const models = require("./server/api/v1/models");

const app = express();

// Connect to Postgres
// const db = require("./server/db");

// db.authenticate()
//   .then(() => console.log("Connected to Postgres"))
//   .catch(err => console.log("Error connecting", err));

// CORS options
app.use(cors());

// Initialize passport via provider
app.use(auth.initialize());

// BodyParser settings
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set static folder and API routes
app.use(express.static(path.join(__dirname, "client/build")));
// app.use("", v1Routes);
app.use("/*", express.static(path.join(__dirname, "client/build")));

// Launch server
const port = process.env.PORT || 5000;

models.sequelize.sync({ force: true }).then(() => {
  app.listen(port, () => {
    console.log(`Server now running on port ${port}`);
  });
});
