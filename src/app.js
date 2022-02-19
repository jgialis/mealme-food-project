//Default Imports
const express = require("express");
const app = express();

//Custom Imports
const usersRoute = require("./routes/usersRoutes");
const mealsRoute = require("./routes/mealsRoutes");

// MIDDLEWARES
app.use("/api/v1/users", usersRoute);
app.use("/api/v1/meals", mealsRoute);
app.use(express.json());

//Export app to server
module.exports = app;
