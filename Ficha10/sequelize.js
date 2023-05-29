const { Sequelize, DataTypes } = require('sequelize');

const UserDataModel = require('./models/Users');
const BookDataModel = require('./models/Books');
const LoanDataModel = require('./models/Loans');

const sequelize = new Sequelize('ficha_10', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

const User = UserDataModel(sequelize, DataTypes);
const Book = BookDataModel(sequelize, DataTypes);
const Loan = LoanDataModel(sequelize, DataTypes);

User.hasMany(Loan);
Loan.belongsTo(User);

Book.hasMany(Loan, { onDelete: 'CASCADE' });
Loan.belongsTo(Book);

/*User.create(
    { first_name: "Tiago" ,
    last_name: "Viveiros",
    email: "tiagosimao2616@gmail.com",
    address: "Caniçal",
    phone_number: 123456789
});

Book.create(
    { title: "Title",
    author_name: "José",
    publication_date: "2023-05-29",
    genre: "Male",
    avaliable_copies: "10"
}); 

Loan.create({
    UserId: 1,
    BookId: 1
}); */

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
    User, Book, Loan
}