const Course = require('../sequelize').Course;
const Grade = require('../sequelize').Grade;
const Student = require('../sequelize').Student;

exports.getAllGrades = (req, res, next) => {
    Grade.findAll().then(grades =>{
        res.send(grades);
    });
} 

exports.createGradeById = (req, res, next) => {
    Grade.create(req.body)
        .then(body => {
            res.send("Inserted " + body.id);
        });
}

exports.deleteGradeById = (req, res, next) => {
    var id = req.params.id;
    Grade.destroy({
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

} 


// TENTATIVA DE FAZER COM QUERY

/* exports.deleteGradeById = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM grades WHERE id = ?';
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
  }; */



exports.updateGradeById = (req, res, next) => {
    Grade.update(req.body,{
        where: {
            student_id: req.params.student_id,
            course_id: req.params.course_id
        }
    }).then(grades => {
        res.send(grades);
    })
}

exports.getGradeById = (req, res, next) => {
    var student_id = req.params.student_id;
    Grade.findByPk(req.params.student_id).then(results => { 
        res.send(results)
    });
} 