const Sequelize = require('sequelize'); 
const mysql2 = require('mysql2');
const models = require('./models');
const Persons = models.Person;
const express = require("express");
const swaggerUi = require("swagger-ui-express")
const swaggerDocument = require('./swagger-output.json')
const app = express();

const sequelize = new Sequelize('ficha9','root','password',{
    dialect: 'mysql'
});

sequelize.authenticate()
.then(()=>{
    console.log("Connection has been established");
})
.catch(err =>{
    console.log("unable to connect" + err);
})



var server = app.listen(8080,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://localhost:%s",port);
})


// sequelize.sync({force:false})
//     .then(()=>{
//         console.log('Database and tables created!');
//         }).then(function(){
//             return Person.findAll();
//         }).then(function(persons){
//             console.log(persons)
//         });

// Persons.bulkCreate([
//     {firstName:'Pedro',lastName:'Jardim',profession:'IT',age:62},
//     {firstName:'Manuel',lastName:'Jardim',profession:'IT',age:32},
//     {firstName:'Maria',lastName:'Jardim',profession:'IT',age:12},
//     {firstName:'Ana',lastName:'Jardim',profession:'IT',age:99},
//     {firstName:'Luis',lastName:'Jardim',profession:'IT',age:38}
// ]).then(function(){
//     return Person.findAll();
// }).then(function(persons){
//     console.log(persons);
// })

app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocument));

app.get('/persons', function(request,response){
    Persons.findAll().then(people=>{
        if(people == []){
            response.status(204).send(people)
        }else{
            response.status(200).send(people)
        }
    })

});

app.post('/persons', function(req,response){
    try{
        Persons.create(req.body).then(people=>{
            response.status(201).send("person created");
        })
    }catch{
        response.status(400).send("person created");
    }
});

app.delete('/persons',function(req,response){

    const row = Persons.findOne({
        where:req.body.id
    });
    if(row){
        row.destroy();
        response.status(200).send("person deleted")
    }else{
        response.status(400).send("person not deleted")
    }
});

app.delete('/persons/:id',function(req,response){
    const row = Persons.findOne({
        where:req.params.id
    });
    if(row){
        row.destroy();
        response.status(200).send("person deleted")
    }else{
        response.status(400).send("person not deleted")
    }
})

app.get('/person',function(req,response){
    Persons.findOne({
        where:{
            id:req.query.id
        }
    }).then(people => 
        {
            if(people != []){
                response.status(200).send(people)
            }else{
                response.status(204).send(people)
            }
            
        }
    )
})

app.get('/persons/:age/:profession',function(req,response){
    Persons.findAll({
        where:{
            age:req.params.age,
            profession:req.params.profession
        }
    }).then(people => 
        {
            if(people != []){
                response.status(200).send(people)
            }else{
                response.status(204).send(people)
            }
        }
    )
})

app.put('persons/:id',function(req,response){
    try{
        Persons.update(
            req.body,
            {
                where:{id:req.params.id}
            }
        ).then( 
            response.status(200).send("atualizado")
        )
    }catch{
        response.status(400).send("não atualizado")
    }
})



