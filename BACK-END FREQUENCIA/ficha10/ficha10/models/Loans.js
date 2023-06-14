module.exports = (Sequelize, DataTypes) =>{
    return Sequelize.define('Loan',{
        loan_date:{
            type: DataTypes.STRING
        },
        return_date:{
            type: DataTypes.STRING
        }
    });
}