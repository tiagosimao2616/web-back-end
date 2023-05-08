const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

app.use(express.json());

// Configurar a conexão com o banco de dados MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'projeto_backend'
});

// Conectar ao banco de dados MySQL
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados: ', err);
    return;
  }
  console.log('Conexão ao banco de dados estabelecida com sucesso!');
});

app.get('/reviews', (req, res) => {
    const pontuacao = req.query.pont;
    const query = 'SELECT * FROM reviews';
    connection.query(query, (error, results) => {
      if (error) {
        console.error('Erro ao executar a consulta: ', error);
        res.status(500).send('Erro ao executar a consulta');
      } else {
        res.json(results);
      }
    });
  });

app.post('/reviews', (req, res) => {
    console.log(req.body);
    //const timeNow= new Date().toLocaleDateString('en-GB');
    const query = 'INSERT INTO reviews (movie_title, reviewer, genre, language, review_text, likes, score, date, tags, comments) VALUES (?,?,?,?,?,?,?,?,?,?)';
    connection.query(query, [req.body.movie_title, req.body.reviewer, req.body.genre, req.body.language, req.body.review_text , req.body.likes, req.body.score, req.body.date, req.body.tags, req.body.comments ], (error, result) => {
      if (error) {
        console.error('Erro ao executar a consulta: ', error);
        res.status(500).send('Erro ao executar a consulta');
      } 
      else {
        res.json(result);
      }
    });
});

app.get('/reviews/reviewer/:reviewer', (req, res) => {
    const query = 'SELECT * FROM reviews WHERE reviewer = ?';
    connection.query(query, [req.params.reviewer], (error, results) => {
      if (error) {
        console.error('Erro ao executar a consulta: ', error);
        res.status(500).send('Erro ao executar a consulta');
      } else if (results.length === 0) {
        res.status(404).send('Reviews não encontradas');
      } else {
        res.json(results);
      }
    });
  });

  app.put('/reviews/:id/:pontuacao', (req,res) => {
    const query = 'UPDATE reviews SET score = ? WHERE Id = ?';
    connection.query(query, [req.params.pontuacao, req.params.id], (error, results) =>{
      if(error){
        console.log('erro ao executar update: ', error);
      }
      const query2= 'select * FROM reviews WHERE Id = ?';
      connection.query(query2, req.params.id, (error, results) =>{
        if(error){
          console.log('erro ao executar update: ', error);
        }
        const updatedreview = results;
        res.send(updatedreview);
      });
    })
  });  

  app.get('/reviews/list/', (req, res) => {
    const pontuacao = req.query.pont;
    const query = 'SELECT * FROM reviews WHERE score = ?';
    connection.query(query, [pontuacao], (error, results) => {
      if (error) {
        console.error('Erro ao executar a consulta: ', error);
        res.status(500).send('Erro ao executar a consulta');
      } else if (results.length === 0) {
        res.status(404).send('Reviews não encontradas');
      } else {
        res.json(results);
      }
    });
  });

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor iniciado em http://localhost:${port}`);
});
