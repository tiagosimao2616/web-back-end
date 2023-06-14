const { json } = require("body-parser");
const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.json());

const data = fs.readFileSync("./persons.json");
const persons = JSON.parse(data);

var server = app.listen(8081,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s",host,port);
})


app.get('/users', function(request,response){
    response.send(persons);
})


app.delete('/users/:id',function(request,response){
    var targetId = request.params.id;

    delete persons[targetId];
    response.send(persons)
})

app.get('/users/:id',function(request,response){
    
})

app.put('/users/:id',function(request,response){
    
})

app.post('/users', function(request,response){
    var newUser = request.body.FirstName;
    persons[newUser] = request.body;
    persons[newUser].id = Object.keys(persons).length;
    response.send(persons)
})