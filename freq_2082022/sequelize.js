const { foreign_key } = require('inflection');
const { Sequelize, DataTypes } = require('sequelize');

const CourseDataModel = require('./models/courses');
const GradeDataModel = require('./models/grades');
const StudentDataModel = require('./models/students');

const sequelize = new Sequelize(process.env.DB_SCHEMA, process.env.DB_USER, process.env.DB_PASS, {
    dialect: "mysql",
    host: process.env.DB_HOST
}); 

const Course = CourseDataModel(sequelize, DataTypes);
const Grade = GradeDataModel(sequelize, DataTypes);
const Student = StudentDataModel(sequelize, DataTypes);

Grade.belongsTo(Student);
Grade.belongsTo(Course);

/*Student.create(
    { first_name: "Tiago" ,
    last_name: "Viveiros",
    email: "tiagosimao2616@gmail.com",
});

Course.create(
    { course_name: "Programação",
    instructor: "David Jardim"
});  

Grade.create({
    grade: 20,
    studentId: 1,
    courseId: 1
});   */

sequelize.authenticate()
    .then(() => {
        console.log("Connection has been established");
    })
    .catch(err => {
        console.error("Unable to connect", err);
    });


sequelize.sync({ force: false })
    .then(() => {
        console.log('Tables created!');
    });

module.exports = {
    Course, Grade, Student
}