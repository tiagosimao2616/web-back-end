const express = require("express");
const res = require("express/lib/response");
const app = express();
const mysql = require("mysql");
const port = 3000;
const { Sequelize, Model, DataType } = require("sequelize");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// SQL connection
const sequelize = new Sequelize("employees", "root", "", {
  dialect: "mysql",
  // pool: {
  //   max: 5,
  //   min: 0,
  //   acquire: 30000,
  //   idle: 10000,
  // },
});
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established");
  })
  .catch((err) => {
    console.log("Unable to connect", err);
  });
