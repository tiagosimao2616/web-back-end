const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;
var persons = readFile();

app.use(express.json());


function readFile(){
    var content = fs.readFileSync("persons.json");
    return JSON.parse(content);
}

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/users', (req, res) => {
    res.send(persons);
  })

  app.post('/users', (req, res) => {
    var person = req.body;
    var id = 5;
    person.id = id;
    persons["person" + id] = person;

    res.send(req.body);
  })

  app.delete('/users/:id', (req, res) => {
    var content = readFile();
    res.send(content);
  })
  
  app.get('/users/:id', (req, res) => {
    var content = readFile();
    res.send(content);
  })

  app.put('/users/:id', (req, res) => {
    var content = readFile();
    res.send(content);
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})