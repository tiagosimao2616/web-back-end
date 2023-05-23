const { Sequelize, DataTypes } = require('sequelize');

const UserDataModel = require('./models/Users');
const BookDataModel = require('./models/Books');
const LoanDataModel = require('./models/Loans');

const sequelize = new Sequelize('ficha_10', 'root', '', {
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