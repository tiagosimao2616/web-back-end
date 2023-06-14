const { Sequelize, DataTypes } = require("sequelize")
require('dotenv').config();
const UserDataModel = require('./models/Users');

const sequelize = new Sequelize(process.env.DB,process.env.USER,process.env.PASSWORD,{
    host:process.env.HOST,
    dialect: process.env.DIALECT
});

const User = UserDataModel(sequelize,DataTypes);

// User.create({
//     password:"testestes",
//     email:"teste@gmail.com"
// });

sequelize.sync({force:false})
    .then(()=>{
        console.log('Tables Created!');
});



sequelize.authenticate()
.then(()=>{
    console.log("Connection has been established");
})
.catch(err =>{
    console.log("unable to connect" + err);
})


module.exports = {
    User
}