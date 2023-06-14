const { Sequelize, DataTypes } = require("sequelize")

const UserDataModel = require('./models/Users');
const BookDataModel = require('./models/Books');
const LoanDataModel = require('./models/Loans');

const sequelize = new Sequelize('ficha10db','root','password',{
    host:"localhost",
    dialect: 'mysql'
});

const User = UserDataModel(sequelize,DataTypes);
const Book = BookDataModel(sequelize,DataTypes);
const Loan = LoanDataModel(sequelize,DataTypes);

//Defenir relações entre tabeças
User.hasMany(Loan);
Loan.belongsTo(User);

Book.hasMany(Loan,{onDelete:'CASCADE'});
Loan.belongsTo(Book);


// User.create({
//     last_name:"Teste",
//     first_name:"Teste",
//     email:"teste@gmail.com",
//     address:"TESTE, funchal",
//     phone_number:"928394823"
// });

// Book.create({
//     title:"Teste",
//     author_name:"srser",
//     publication_date:'2022-09-24',
//     genre:"Ação",
//     availabel_copies:20
// });

// Loan.create({
//     loan_date:'2022-09-24',
//     return_date:'2022-09-24',
//     UserId:1,
//     BookId:1
// });


sequelize.sync({force:false})
    .then(()=>{
        console.log('Tables Created!');
});



sequelize.authenticate()
.then(()=>{
    console.log("Connection has been established");
})
.catch(err =>{
    console.log("unable to connect" + err);
})


module.exports = {
    User, Book, Loan
}