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
var dotenv = require("dotenv");
dotenv.config();
// SQL connection
const sequelize = new Sequelize(
  process.env.DB_SCHEMA,
  process.env.DB_HOST,
  process.env.DB_PASS,
  {
    dialect: "mysql",
    //   pool: {
    //     max: 10,
    //     min: 0,
    //     acquire: 30000,
    //     idle: 10000,
    //   },
  }
);
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
    // primaryKey: true,
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

// Employees.bulkCreate([
//   {
//     birth_date: "2001-03-14",
//     first_name: "Pedro",
//     gender: "M",
//     hire_date: "2022-04-20",
//     last_name: "Passalacqua",
//   },
//   {
//     birth_date: "2002-02-02",
//     first_name: "Francisco",
//     gender: "M",
//     hire_date: "2022-03-10",
//     last_name: "Barroca",
//   },
// ])
//   .then(function () {
//     return Employees.findAll();
//   })
//   .then(function (employees) {
//     console.log(employees);
//   });

// Salaries.bulkCreate([
//   {
//     from_date: "2022-05-12",
//     salary: 3000,
//     to_date: "2001-04-14",
//   },
//   {
//     from_date: "2022-04-10",
//     salary: 3000,
//     to_date: "2001-05-14",
//   },
// ])
//   .then(function () {
//     return Employees.findAll();
//   })
//   .then(function (employees) {
//     console.log(employees);
//   });

// exercicio 4
// a
app.get("/employees", function (request, response) {
  log(request, response);
  Employees.findAll({ include: { model: Salaries, required: true } }).then(
    (persons) => {
      response.send(persons);
    }
  );
});

// b (adicionar o salario)
app.post("/employees", function (request, response) {
  var body = request.body;
  if (body == undefined || []) {
    response.status(400).send("Invalid body supplied");
  } else {
    Employees.create(body, {
      include: { model: Salaries, required: true },
    }).then((body) =>
      response.send("id: " + body.id + "Name: " + body.first_name)
    );
  }
});

// c
app.delete("/employees", function (request, response) {
  var id = request.query.id;
  if (isNaN(id)) {
    response.status(400).send("Invalid id supplied");
  } else {
    Employees.destroy({
      where: {
        id: id,
      },
    }).then((result) => {
      if (result === 0) {
        response.status(404).send("Esse id nao existe");
      } else response.send("affectedRows: " + result);
    });
  }
});

// d
app.put("/employees/:id", function (request, response) {
  var id = request.params.id;
  if (isNaN(id)) {
    response.status(400).send("Invalid id supplied");
  }
  Salaries.update(request.body, {
    where: {
      id: id,
    },
  }).then((result) => {
    if (result == 0) {
      response.send("Cannot find id");
    } else {
      Person.findAll({
        where: {
          id: id,
        },
      }).then((result) => {
        response.send(result); //objeto completo
        // response.send(result.salary); apenas o salario
      });
    }
  });
});

// e
app.get("/employees/:id", function (request, response) {
  log(request, response);
  var id = request.params.id;
  if (isNaN(id)) {
    response.status(400).send("Invalid id supplied");
  }
  Employees.findAll({ include: { model: Salaries, required: true } }).then(
    (persons) => {
      response.send(persons);
    }
  );
});

// exercicio 5
function log(request, response) {
  var path = request.route.path;
  var date = new Date();
  var str =
    "Path: " +
    path +
    ", Dia: " +
    date.getDay +
    ", Mês: " +
    date.getMonth +
    ", Ano: " +
    date.getFullYear +
    "\n";
  fs.appendFileSync("log.txt", str);
}

// exercicio 6
app.get("/download", (request, response) => {
  response.download("log.txt");
});
