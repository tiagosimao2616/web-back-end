const { response } = require('express');
const Sequelize = require('sequelize');
const mysql = require('mysql2');
const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

const sequelize = new Sequelize('ficha9_backend','root','password', {
    dialect: 'mysql'
});

    sequelize.authenticate()
        .then( () => {
            console.log("Connection has been established");
        })
        .catch(err => {
            console.log("Unable to connect", err);
        });

const Person = sequelize.define('person',{
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Profession: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Age: {
        type: Sequelize.INTEGER,
        allowNull: false
    }, 
});

sequelize.sync({force:false})
    .then( () => {
        console.log('Database  & Tables created!');
    }).then(function () {
        return Person.findAll();
    }).then(function(persons){
        console.log(persons);
    });
/*
Person.bulkCreate ([
    {firstName: 'Pedro', lastName: 'Jardim', Profession: 'IT', Age:62},
    {firstName: 'Manuel', lastName: 'Matos', Profession: 'IT', Age:12},
    {firstName: 'Maria', lastName: 'Figueira', Profession: 'IT', Age:32},
    {firstName: 'Ana', lastName: 'Duarte', Profession: 'IT', Age:82},
    {firstName: 'Luís', lastName: 'Faria', Profession: 'IT', Age:42},
]).then(function() {
    return Person.findAll ();
}).then(function (persons) {
    console.log(persons);
});
*/

Person.findAll().then(people => {
    console.log("All people:", JSON.stringify(people, null, 5));
});

app.get('/', (req,res) => {
    Person.findAll().then(persons =>{
        res.send(persons)
    })
});

app.put('/persons', (req,res) => {
    Person.create(req.body)
    .then(newPerson => {
        res.send(newPerson)
    })
});    

app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
});