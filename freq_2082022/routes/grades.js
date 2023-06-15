var express = require('express');
var router = express.Router();
var gradesController = require('../controllers/gradesController');

router.get('/', gradesController.getAllGrades);
router.post('/', gradesController.createGradeById);
router.delete('/:id', gradesController.deleteGradeById);
router.put('/:student_id/:course_id', gradesController.updateGradeById);
router.get('/:student_id', gradesController.getGradeById);

module.exports = router;
