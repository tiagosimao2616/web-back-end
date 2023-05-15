var express = require('express');
var router = express.Router();
var mysql = require('mysql');

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hello World',
      version: '1.0.0',
    },
  },
  apis: ['./routes/*.js'], // files containing annotations as above
};


const swaggerDocs = swaggerJsDoc(options);



var app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


 /**
* @swagger
* /person:
* get:
* tags:
* - Person
* summary: Gets a list of persons
* description: Returns a list of persons
* produces:
* - application/json
* responses:
* 200:
* description: An array of persons
* schema:
* $ref: '#/definitions/Person'
*/
app.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = app;
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'back_end'
});

connection.connect((error) => {
  if (error) {
    console.error('Erro ao conectar à database: ', error);
  } else {
    console.log('Conexão à database estabelecida com sucesso!');
  }
});

// Endpoint para listar todas as pessoas existentes na tabela Persons
router.get('/', (req, res) => {
  const query = 'SELECT * FROM Persons';
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Erro ao executar a consulta: ', error);
      res.status(500).send('Erro ao executar a consulta');
    } else {
      res.json(results);
    }
  });
});

router.post('/', (req, res) => {
  console.log(req.body);
  const query = 'INSERT INTO Persons (Firstname, Lastname, Profession, Age) VALUES (?,?,?,?)';
  connection.query(query, [req.body.Firstname, req.body.Lastname, req.body.Profession, req.body.Age], (error, result) => {
    if (error) {
      console.error('Erro ao executar a consulta: ', error);
      res.status(500).send('Erro ao executar a consulta');
    } else {
      res.json(result);
    }
  });
});

/*router.post('/', (req, res) => {
  console.log(req.body);
  const query = 'INSERT INTO Persons set ?';
  connection.query(query, req.body, (error, result) => {
    if (error) {
      console.error('Erro ao executar a consulta: ', error);
      res.status(500).send('Erro ao executar a consulta');
    } else {
      res.json(result);
    }
  });
});*/

router.delete('/', (req, res) => {
  const { id } = req.body;
  const query = 'DELETE FROM Persons WHERE Id = ?';
  connection.query(query, id, (error, result) => {
    if (error) {
      console.error('Erro ao executar a consulta: ', error);
      res.status(500).send('Erro ao executar a consulta');
    } else {
      const affectedRows = result.affectedRows;
      if (affectedRows > 0) {
        res.json({ message: `Pessoa com ID ${id} apagada com sucesso`, affectedRows });
      } else {
        res.status(404).send(`Pessoa com ID ${id} não encontrada`);
      }
    }
  });
});

// Endpoint para apagar uma pessoa da tabela Persons
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM Persons WHERE Id = ?';
  connection.query(query, [id], (error, result) => {
    if (error) {
      console.error('Erro ao executar a consulta: ', error);
      res.status(500).send('Erro ao executar a consulta');
    } else if (result.affectedRows === 0) {
      res.status(404).send('Pessoa não encontrada');
    } else {
      const affectedRows = result.affectedRows;
      res.json({ message: 'Pessoa removida com sucesso', affectedRows });
    }
  });
});


// Endpoint para selecionar uma pessoa pelo ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM Persons WHERE Id = ?';
  connection.query(query, [id], (error, results) => {
    if (error) {
      console.error('Erro ao executar a consulta: ', error);
      res.status(500).send('Erro ao executar a consulta');
    } else if (results.length === 0) {
      res.status(404).send('Pessoa não encontrada');
    } else {
      const person = results[0];
      res.json(person);
    }
  });
});


// Endpoint para selecionar pessoas por idade e profissão
router.get('/:age/:profession', (req, res) => {
  const query = 'SELECT * FROM Persons WHERE Age = ? AND Profession = ?';
  connection.query(query, [req.params.age, req.params.profession], (error, results) => {
    if (error) {
      console.error('Erro ao executar a consulta: ', error);
      res.status(500).send('Erro ao executar a consulta');
    } else if (results.length === 0) {
      res.status(404).send('Pessoas não encontradas');
    } else {
      res.json(results);
    }
  });
});


//Endpoint para dar update aos detalhos de uma pessoa

router.put('/:id', (req,res) => {
  const { id } = req.params;
  const query = 'UPDATE Persons SET Firstname = ?, Lastname = ?, Profession = ?, Age = ? WHERE Id = ?';
  connection.query(query, [req.body.Firstname, req.body.Lastname, req.body.Profession, req.body.Age, id], (error, results) =>{
    if(error){
      console.log('erro ao executar update: ', error);
    }
    const query2= 'select * FROM Persons WHERE Id = ?';
    connection.query(query2, id, (error, results) =>{
      if(error){
        console.log('erro ao executar update: ', error);
      }
      const updatedPerson = results;
      res.send(updatedPerson);
    });
  })
});

module.exports = router;

