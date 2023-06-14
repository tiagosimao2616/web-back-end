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

//   tabela Employees
const Employees = sequelize.define("employees", {
  birth_date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  emp_no: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  first_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  gender: {
    type: Sequelize.ENUM("M", "F"),
    allowNull: false,
  },
  hire_date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  last_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

// tabela salaries
const Salaries = sequelize.define("salaries", {
  from_date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  salary: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  to_date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});

Employees.hasMany(Salaries);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Database & tables created!");
  })
  .then(function () {
    return Employees.findAll();
  })
  .then(function (employees) {
    console.log(employees);
  });

Employees.bulkCreate([
  {
    birth_date: "2001-03-14",
    first_name: "Pedro",
    gender: "M",
    hire_date: "2022-04-20",
    last_name: "Passalacqua",
  },
  {
    birth_date: "2002-02-02",
    first_name: "Francisco",
    gender: "M",
    hire_date: "2022-03-10",
    last_name: "Barroca",
  },
])
  .then(function () {
    return Person.findAll();
  })
  .then(function (persons) {
    console.log(persons);
  });
