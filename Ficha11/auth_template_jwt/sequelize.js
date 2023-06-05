const { Sequelize, DataTypes } = require('sequelize');
const UserDataModel = require('./models/Users');

const sequelize = new Sequelize(process.env.DB_SCHEMA, process.env.DB_USER, process.env.DB_PASS, {
    dialect: "mysql",
    host: process.env.DB_HOST
});

const User = UserDataModel(sequelize,DataTypes);

/*User.create ({
    email: "tiagosimao2616@gmail.com",
    password: "tiagosimao"
}); */

sequelize.authenticate()
    .then(() => {
        console.log("Connection has been established");
    })
    .catch(err => {
        console.error("Unable to connect", err);
    });


sequelize.sync({ force: false })
    .then(() => {
        console.log('Tables created!');
    });

module.exports = {
    User
}
