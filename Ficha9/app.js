const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;
const Sequelize = require('sequelize');
const mysql2 = require('mysql2');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');


// middleware converte o body para json
app.use(express.json());
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const sequelize = new Sequelize('ficha9_backend', 'root', 'password', {
    dialect: 'mysql'
});
sequelize.authenticate()
    .then(() => {
        console.log("Connection has been established");
    })
    .catch(err => {
        console.error("Unable to connect", err);
    });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

const Person = sequelize.define('person', {
    //atributes
    firstname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING
        //allowNull defaults to true
    },
    profession: {
        type: Sequelize.STRING,
        allowNull: false
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    //options
})

sequelize.sync({ force: false })
    .then(() => {
        console.log('Database & tables created!');
    })
    .then(function () {
        return Person.findAll();
    })
    .then(function (persons) {
        console.log(persons);
    });
/*apos criar comentar para nao tar sempre a criar pessoas iguais
Person.bulkCreate([
    { firstname: 'Rodrigo', lastName: 'Rocha', profession: 'IT', age: 21 },
    { firstname: 'João', lastName: 'Rodrigues', profession: 'IT', age: 26 },
    { firstname: 'Fábio', lastName: 'Gonçalves', profession: 'IT', age: 28 },
    { firstname: 'Alberto', lastName: 'João', profession: 'Presidente', age: 75 },
    { firstname: 'Pedro', lastName: 'Jardim', profession: 'Jardineiro', age: 62 }
]) .then(function (){
    return Person.findAll();
}) .then(function (people){
    console.log(people);
}); */

//exercicios dos endpoints
// Person.findAll().then(persons => {
//     console.log("All persons:", JSON.stringify(persons, null, 4));
// });
app.get('/', (req, res) => {
    var id = req.query.id;
    if (id == undefined) {
        Person.findAll().then(persons => {
            res.send(persons);
        })
    } else {
        Person.findOne({
            where: {
                id: id
            }
        }).then(persons => {
            if (persons == 0) {
                res.status(404).end("ID " + id + " not found!!")
            } else {
                res.send(persons);
            }
        })
    }

});

app.post('/persons', (req, res) => {
    Person.create(req.body)
        .then(body => {
            res.send("Inserted " + body.id);
        });
});

app.delete('/persons/delete', (req, res) => {
    var body = req.body;
    Person.destroy({
        where: {
            id: body.id
        }
    }).then((affectedRows) => {
        if (affectedRows == 0) {
            res.status(404).send("Id nao existe");
        } else {
            res.send("affectedRows " + affectedRows);
        }
    });

});

app.delete('/persons/delete/:id', (req, res) => {
    var id = req.params.id;
    Person.destroy({
        where: {
            id: id
        }
    }).then((affectedRows) => {
        if (affectedRows == 0) {
            res.status(404).send("Id nao existe");
        } else {
            res.send("affectedRows " + affectedRows);
        }
    });

});

app.get('/persons/:age/:profession', (req, res) => {
    var age = req.params.age;
    var profession = req.params.profession;
    Person.findOne({
        where: {
            age: age,
            profession: profession
        }
    }).then(persons => {
        if (persons == 0) {
            res.status(404).end("Essa idade e profissao nao existem " + id + profession + " not found!!")
        } else {
            res.send(persons);
        }
    })
}
)

app.put('/persons/:id', (req, res) => {
    Person.update(req.body,{
        where: {
            id: req.params.id,
        }
    }).then(persons => {
        res.send(persons);
    })
})
